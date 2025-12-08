# QContact Integration Setup Guide

## Overview

This guide will help you set up QContact integration for your ZuZo application. QContact is a unified communication platform that integrates live chat, calls, emails, and other channels.

## Prerequisites

1. A QContact account
2. Access to your QContact organization settings
3. API credentials (Organization ID and Event ID)

## Configuration Steps

### 1. Get Your QContact Credentials

1. Log in to your QContact dashboard
2. Navigate to **Settings** → **Integrations** → **Webhooks** (or **API Settings**)
3. Find or create a webhook configuration
4. Note down:
   - **Organization ID** (`org_id`)
   - **Event ID** (`eid`) - This is the webhook event identifier
   - **Webhook URL** (if custom, otherwise use default)

### 2. Set Environment Variables

Add the following to your `.env` file in the project root:

```env
# QContact Configuration
QCONTACT_ORG_ID=your_organization_id_here
QCONTACT_EVENT_ID=your_event_id_here

# Optional: Custom webhook URL (if different from default)
QCONTACT_WEBHOOK_URL=https://zuzo.qcontact.com/api/v2/webhooks/callback/inbound
```

### 3. Default Webhook URL Format

The default webhook URL format is:
```
https://zuzo.qcontact.com/api/v2/webhooks/callback/inbound?org_id={ORG_ID}&eid={EVENT_ID}
```

If you're using a different QContact instance, update `QCONTACT_WEBHOOK_URL` accordingly.

## API Endpoints

### Available Endpoints

1. **GET** `/api/qcontact/status` - Check configuration status
2. **POST** `/api/qcontact/test` - Test webhook connection
3. **POST** `/api/qcontact/leads/:id/forward` - Forward a lead to QContact
4. **POST** `/api/qcontact/subscribers/:id/forward` - Forward a subscriber to QContact

### Testing the Connection

1. Start your server: `pnpm run dev`
2. Test the connection:
   ```bash
   curl -X POST http://localhost:3000/api/qcontact/test
   ```
3. Check status:
   ```bash
   curl http://localhost:3000/api/qcontact/status
   ```

## Data Mapping

### Lead Data Mapping

When a lead is forwarded to QContact, the following mapping occurs:

| ZuZo Field | QContact Field | Required |
|------------|----------------|----------|
| `name` (first part) | `first_name` | Yes |
| `name` (remaining) | `last_name` | Yes |
| `email` | `c__email` | Optional |
| `phone` | `phone_number` | Optional |
| `company` | `c__company` | Optional |
| `industry` | `c__industry` | Optional |
| `interestedServices` | `c__service_interest` | Optional |
| `message` | `body` | Yes |

### Subscriber Data Mapping

| ZuZo Field | QContact Field | Value |
|------------|----------------|-------|
| `email` | `c__email` | Subscriber email |
| - | `first_name` | "Newsletter" |
| - | `last_name` | "Subscriber" |
| - | `body` | "Newsletter subscription request" |
| - | `c__service_interest` | "Newsletter Subscription" |

## Automatic Forwarding

By default, leads and subscribers are automatically forwarded to QContact when created:

- **Leads**: Automatically forwarded when created via `POST /api/leads`
- **Subscribers**: Automatically forwarded when created via `POST /api/subscribers`

The forwarding happens asynchronously and won't block the API response.

## Manual Forwarding

You can manually forward existing leads or subscribers:

### Forward a Lead

```bash
curl -X POST http://localhost:3000/api/qcontact/leads/{lead_id}/forward \
  -H "Content-Type: application/json" \
  -d '{"retry": true, "maxRetries": 3}'
```

### Forward a Subscriber

```bash
curl -X POST http://localhost:3000/api/qcontact/subscribers/{subscriber_id}/forward \
  -H "Content-Type: application/json" \
  -d '{"retry": true, "maxRetries": 3}'
```

## Retry Logic

The service includes automatic retry logic with exponential backoff:

- **Default retries**: 2 attempts
- **Backoff delays**: 1s, 2s (exponential)
- **Configurable**: Set `maxRetries` (0-5) when manually forwarding

## Troubleshooting

### Common Issues

1. **"QContact webhook failed"**
   - Verify `QCONTACT_ORG_ID` and `QCONTACT_EVENT_ID` are correct
   - Check that the webhook URL is accessible
   - Ensure your QContact account has webhook permissions enabled

2. **"Cannot find module" errors**
   - Run `pnpm install` to ensure all dependencies are installed

3. **Connection timeouts**
   - Check your network/firewall settings
   - Verify the QContact webhook URL is correct
   - Check QContact service status

### Debugging

Enable debug logging by setting `NODE_ENV=development` in your `.env` file. This will log detailed information about webhook requests.

## QContact Live Chat API

Based on the QContact Live Chat API documentation, you may also want to:

1. **Start New Chat**: Use the webhook to initiate chat sessions
2. **Custom Fields**: Map additional custom fields using the `c__` prefix
3. **Event Types**: Configure different event IDs for different types of interactions

## Security Notes

- Never commit your `.env` file to version control
- Keep your `QCONTACT_ORG_ID` and `QCONTACT_EVENT_ID` secure
- Use environment variables for all sensitive configuration
- The status endpoint doesn't expose sensitive values

## Support

For QContact-specific issues:
- QContact Support: https://support.qcontact.com
- QContact Documentation: https://support.qcontact.com/docs

For integration issues:
- Check server logs for detailed error messages
- Use the `/api/qcontact/status` endpoint to verify configuration
- Test connection with `/api/qcontact/test` endpoint

