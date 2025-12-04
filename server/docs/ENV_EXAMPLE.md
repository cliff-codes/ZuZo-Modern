# Environment Variables Example

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
DATABASE_URL=postgresql://user:password@host:5432/database

# QContact Integration
# Get these from your QContact dashboard: Settings → Integrations → Webhooks
QCONTACT_ORG_ID=your_organization_id_here
QCONTACT_EVENT_ID=your_event_id_here

# Optional: Custom webhook URL (if different from default)
# Default: https://zuzo.qcontact.com/api/v2/webhooks/callback/inbound
# QCONTACT_WEBHOOK_URL=https://zuzo.qcontact.com/api/v2/webhooks/callback/inbound

# CORS Configuration (optional)
# CORS_ORIGIN=http://localhost:3000
```

## Quick Setup Steps

1. Copy this template to `server/.env`
2. Fill in your `DATABASE_URL`
3. Get your QContact credentials:
   - Log in to QContact dashboard
   - Go to **Settings** → **Integrations** → **Webhooks**
   - Copy your Organization ID and Event ID
4. Add `QCONTACT_ORG_ID` and `QCONTACT_EVENT_ID` to your `.env` file
5. Restart your server

For detailed QContact setup instructions, see [QCONTACT_SETUP.md](./QCONTACT_SETUP.md).

