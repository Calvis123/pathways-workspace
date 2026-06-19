import type { Metadata } from 'next';
import { RegisterClient } from './register-client';

export const metadata: Metadata = {
  title: 'Student Registration | Barak Pathways',
  description:
    'Register your study abroad interest with Barak Pathways and send your details directly to our student CRM.',
  alternates: {
    canonical: '/register',
  },
  openGraph: {
    title: 'Student Registration | Barak Pathways',
    description:
      'Complete the Barak Pathways student registration form for study abroad support.',
    url: '/register',
  },
};

export default function RegisterPage() {
  return <RegisterClient />;
}
