# pathways-workspace

## Consultation Form -> CRM Flow

The consultation popup now submits to:

1. `POST /api/consultation` on this website backend
2. Website backend forwards to your CRM API (`CRM_API_URL`)
3. CRM API stores it in CRM database

### Environment variables

Create a `.env.local` file in the project root with:

```bash
CRM_API_URL=https://your-crm-domain.com/api/public/consultations
```

Notes:
- `CRM_API_URL` is optional for this flow.
- If omitted, the backend defaults to `https://pathways-crm.vercel.app/api/public/consultations`.
- No API key is sent for this endpoint.

### Payload mapping to CRM

Website form fields are transformed as:

- `fullName` -> `full_name` (required)
- `email` -> `email` (required)
- `phone` -> `phone` (required)
- `country` -> `country_interest` (required)
- `level` -> `program_level` (required)
- `location` -> `location` (optional)

Current endpoint forwarding does not persist `age` and `inquiry`.
