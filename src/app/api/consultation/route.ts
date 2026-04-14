import { NextRequest, NextResponse } from 'next/server';

type ConsultationPayload = {
  fullName: string;
  email: string;
  age?: string;
  location?: string;
  phone: string;
  country: string;
  level: string;
  inquiry?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function parsePayload(body: unknown): ConsultationPayload | null {
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
    age: typeof candidate.age === 'string' ? candidate.age.trim() : '',
    location: typeof candidate.location === 'string' ? candidate.location.trim() : '',
    phone: candidate.phone.trim(),
    country: candidate.country.trim(),
    level: candidate.level.trim(),
    inquiry: typeof candidate.inquiry === 'string' ? candidate.inquiry.trim() : '',
  };
}

function normalizeProgramLevel(level: string) {
  const value = level.trim().toLowerCase();
  const map: Record<string, string> = {
    certificate: 'certificate',
    diploma: 'diploma',
    undergraduate: 'undergraduate',
    postgraduate: 'postgraduate',
    masters: 'masters',
    'master’s': 'masters',
    "master's": 'masters',
    phd: 'phd',
    'ph.d': 'phd',
  };
  return map[value] || value;
}

export async function POST(request: NextRequest) {
  const crmUrl =
    process.env.CRM_API_URL || 'https://pathways-crm.vercel.app/api/public/consultations';

  if (!crmUrl) {
    return NextResponse.json(
      { message: 'CRM_API_URL is not configured on the server.' },
      { status: 500 }
    );
  }

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
    const isLikelyDuplicateEmail =
      crmResponse.status === 400 && text.includes('"error":"Unknown error."');
    return NextResponse.json(
      {
        message: isLikelyDuplicateEmail
          ? 'This email already has a consultation request. Please use another email or contact support.'
          : 'Failed to send consultation to CRM API.',
        crmStatus: crmResponse.status,
        crmBody: text.slice(0, 700),
        code: isLikelyDuplicateEmail ? 'DUPLICATE_EMAIL' : 'CRM_FORWARD_ERROR',
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
