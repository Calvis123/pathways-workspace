import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://barakpathways.com"),
  title: "Barak Pathways - Study Abroad Consultancy | UK, Canada, Australia & More",
  description:
    "Your seamless path to studying overseas. Expert consultation for studying in the UK, Canada, Australia, Malta, Cyprus, New Zealand, and Spain. 40+ students successfully placed. Book your free consultation today!",
  keywords: [
    "study abroad",
    "study in UK",
    "study in Canada",
    "study in Australia",
    "study in Malta",
    "study abroad Kenya",
    "Barak Pathways",
    "IELTS training Kenya",
    "student visa",
    "university application",
    "study guidance",
  ],
  authors: [{ name: "Barak Pathways" }],
  alternates: {
    canonical: "/",
  },
  category: "education",
  icons: {
    icon: "/images/pathways-logo.png",
  },
  openGraph: {
    title: "Barak Pathways - Your Path to Studying Overseas",
    description:
      "Expert consultation for studying in the UK, Canada, Australia, Malta, Cyprus, New Zealand, and Spain. 40+ students successfully placed.",
    url: "/",
    siteName: "Barak Pathways",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/pathways-logo.png",
        alt: "Barak Pathways logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barak Pathways - Your Path to Studying Overseas",
    description:
      "Expert consultation for studying in the UK, Canada, Australia, and more. 40+ students successfully placed.",
    images: ["/images/pathways-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Barak Pathways",
              url: "https://barakpathways.com",
              logo: "https://barakpathways.com/images/pathways-logo.png",
              description:
                "Study abroad consultancy helping Kenyan students study in the UK, Canada, Australia, Malta, Cyprus, New Zealand, and Spain.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254113043315",
                contactType: "customer service",
                availableLanguage: ["English", "Swahili"],
              },
              sameAs: [
                "https://wa.me/254113043315",
                "https://pathways-crm.vercel.app/book-consultation",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

