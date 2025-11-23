import type { Lead } from "@shared/schema";

interface QContactPayload {
  first_name: string;
  last_name: string;
  phone_number?: string;
  body: string;
  country?: string;
  c__company?: string;
  c__industry?: string;
  c__email?: string;
  c__service_interest?: string;
}

export class QContactService {
  private readonly webhookUrl: string;

  constructor() {
    const orgId = process.env.QCONTACT_ORG_ID;
    const eventId = process.env.QCONTACT_EVENT_ID;
    const baseUrl = process.env.QCONTACT_WEBHOOK_URL || 'https://zuzo.qcontact.com/api/v2/webhooks/callback/inbound';
    
    if (!orgId || !eventId) {
      throw new Error('QContact credentials not configured');
    }

    this.webhookUrl = `${baseUrl}?org_id=${orgId}&eid=${eventId}`;
  }

  /**
   * Map our lead data to QContact's expected format
   */
  private mapLeadToQContact(lead: Lead): QContactPayload {
    // Split full name into first and last name
    const nameParts = lead.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload: QContactPayload = {
      first_name: firstName,
      last_name: lastName,
      body: lead.message || '',
    };

    // Add optional fields
    if (lead.email) {
      payload.c__email = lead.email;
    }
    if (lead.phone) {
      payload.phone_number = lead.phone;
    }
    if (lead.company) {
      payload.c__company = lead.company;
    }
    if (lead.industry) {
      payload.c__industry = lead.industry;
    }
    if (lead.interestedServices && lead.interestedServices.length > 0) {
      payload.c__service_interest = lead.interestedServices.join(', ');
    }

    return payload;
  }

  /**
   * Forward lead to QContact webhook
   */
  async forwardLead(lead: Lead): Promise<{ success: boolean; error?: string }> {
    try {
      const payload = this.mapLeadToQContact(lead);
      
      console.log('[QContact] Forwarding lead:', { 
        leadId: lead.id, 
        firstName: payload.first_name,
        lastName: payload.last_name 
      });

      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload as any).toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[QContact] Webhook failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        });
        
        return {
          success: false,
          error: `QContact webhook returned ${response.status}: ${response.statusText}`,
        };
      }

      const result = await response.text();
      console.log('[QContact] Webhook success:', result);
      
      return { success: true };
    } catch (error) {
      console.error('[QContact] Webhook error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Forward lead with retry logic
   */
  async forwardLeadWithRetry(
    lead: Lead,
    maxRetries: number = 2
  ): Promise<{ success: boolean; error?: string }> {
    let lastError: string | undefined;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      if (attempt > 0) {
        // Exponential backoff: 1s, 2s
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.log(`[QContact] Retrying after ${delay}ms (attempt ${attempt + 1}/${maxRetries + 1})`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      const result = await this.forwardLead(lead);
      
      if (result.success) {
        if (attempt > 0) {
          console.log(`[QContact] Succeeded on retry attempt ${attempt + 1}`);
        }
        return result;
      }

      lastError = result.error;
    }

    return {
      success: false,
      error: lastError || 'Failed after retries',
    };
  }
}

// Singleton instance
export const qcontactService = new QContactService();
