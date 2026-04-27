import { NextRequest, NextResponse } from 'next/server';

type StudentRegistrationPayload = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  level: string;
  notes?: string;
  location?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function parsePayload(body: unknown): StudentRegistrationPayload | null {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const candidate = body as Record<string, unknown>;

  if (
    !isNonEmpty(candidate.fullName) ||
    !isNonEmpty(candidate.email) ||
    !isNonEmpty(candidate.phone) ||
    !isNonEmpty(candidate.country) ||
    !isNonEmpty(candidate.level)
  ) {
    return null;
  }

  return {
    fullName: candidate.fullName.trim(),
    email: candidate.email.trim().toLowerCase(),
    phone: candidate.phone.trim(),
    country: candidate.country.trim(),
    level: candidate.level.trim(),
    notes: typeof candidate.notes === 'string' ? candidate.notes.trim() : '',
    location: typeof candidate.location === 'string' ? candidate.location.trim() : '',
  };
}

export async function POST(request: NextRequest) {
  const crmUrl =
    process.env.STUDENT_REGISTER_API_URL ||
    'https://pathways-crm.vercel.app/api/public/students/register';

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      { message: 'Missing required fields: fullName, email, phone, country, level.' },
      { status: 400 }
    );
  }

  const crmPayload: Record<string, string> = {
    full_name: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    country_interest: payload.country,
    program_level: payload.level,
  };

  if (payload.location) {
    crmPayload.location = payload.location;
  }
  if (payload.notes) {
    crmPayload.notes = payload.notes;
  }

  let crmResponse: Response;
  try {
    crmResponse = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(crmPayload),
      cache: 'no-store',
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Could not reach CRM API.',
        crmError: error instanceof Error ? error.message : 'Unknown network error',
      },
      { status: 502 }
    );
  }

  if (!crmResponse.ok) {
    const text = await crmResponse.text();
    return NextResponse.json(
      {
        message: 'Failed to send registration to CRM API.',
        crmStatus: crmResponse.status,
        crmBody: text.slice(0, 700),
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
