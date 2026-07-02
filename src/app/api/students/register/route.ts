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

function normalizeProgramLevel(level: string) {
  const value = level.trim().toLowerCase();
  const map: Record<string, string> = {
    'foundation year program': 'certificate',
    diploma: 'diploma',
    undergraduate: 'undergraduate',
    postgraduate: 'postgraduate',
    "bachelor's program": 'undergraduate',
    'bachelors program': 'undergraduate',
    "master's program": 'masters',
    'masters program': 'masters',
    'german language program': 'certificate',
    ausbildung: 'certificate',
    'apprenticeship & job placement': 'certificate',
    'apprenticeship and job placement': 'certificate',
  };
  return map[value] || value;
}

function getCrmErrorMessage(status: number, body: string) {
  const normalizedBody = body.toLowerCase();

  if (status === 400 && normalizedBody.includes('"error":"unknown error."')) {
    return 'This email may already be registered, or the CRM rejected the submission. Please check the CRM record or try another email.';
  }

  try {
    const parsed = JSON.parse(body) as { error?: unknown; message?: unknown };
    const rawMessage = typeof parsed.message === 'string' ? parsed.message : parsed.error;

    if (typeof rawMessage === 'string') {
      if (rawMessage.includes('Invalid email')) {
        return 'Please enter a valid email address.';
      }

      return rawMessage.slice(0, 220);
    }
  } catch {
    // Fall through to a readable generic message below.
  }

  return 'The CRM rejected this registration. Please check the submitted details and try again.';
}

function isCrmFalseNegativeSuccess(status: number) {
  return status === 404;
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
    program_level: normalizeProgramLevel(payload.level),
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

    if (isCrmFalseNegativeSuccess(crmResponse.status)) {
      return NextResponse.json(
        {
          success: true,
          crmStatus: crmResponse.status,
          warning: 'CRM returned 404 after receiving the registration.',
          crmBody: text.slice(0, 700),
        },
        { status: 200 }
      );
    }

    const message = getCrmErrorMessage(crmResponse.status, text);
    return NextResponse.json(
      {
        message,
        crmStatus: crmResponse.status,
        crmBody: text.slice(0, 700),
        code: message.includes('already registered') ? 'DUPLICATE_EMAIL' : 'CRM_FORWARD_ERROR',
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
