import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://barakpathways.com"),
  title: "Barak Pathways - Study Abroad Consultancy | UK, Canada, Australia & More",
  description:
    "Your seamless path to studying overseas. Expert consultation for studying in the UK, Canada, Australia, Malta, USA, New Zealand, and Spain. 40+ students successfully placed. Book your free consultation today!",
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
    icon: "/images/barak-pathways-logo-transparent-v2.png",
  },
  openGraph: {
    title: "Barak Pathways - Your Path to Studying Overseas",
    description:
      "Expert consultation for studying in the UK, Canada, Australia, Malta, USA, New Zealand, and Spain. 40+ students successfully placed.",
    url: "/",
    siteName: "Barak Pathways",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/barak-pathways-logo-transparent-v2.png",
        alt: "Barak Pathways logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barak Pathways - Your Path to Studying Overseas",
    description:
      "Expert consultation for studying in the UK, Canada, Australia, and more. 40+ students successfully placed.",
    images: ["/images/barak-pathways-logo-transparent-v2.png"],
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
              logo: "https://barakpathways.com/images/barak-pathways-logo-transparent-v2.png",
              description:
                "Study abroad consultancy helping Kenyan students study in the UK, Canada, Australia, Malta, USA, New Zealand, and Spain.",
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2058828338322865');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

