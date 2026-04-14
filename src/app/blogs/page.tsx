import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ChevronRight, Newspaper } from 'lucide-react';
import { Footer } from '@/components/barak/footer';
import { Navbar } from '@/components/barak/navbar';
import { WhatsAppButton } from '@/components/barak/whatsapp-button';
import { blogPosts } from '@/data/blog';
import { destinationDetails } from '@/data/destination-details';

export const metadata: Metadata = {
  title: 'Blogs | Barak Pathways',
  description:
    'Read Barak Pathways blog articles on study abroad planning, IELTS preparation and visa guidance for Kenyan students.',
  alternates: {
    canonical: '/blogs',
  },
};

const articleVisuals = [
  {
    image: destinationDetails['united-kingdom'].heroImage,
    alt: destinationDetails['united-kingdom'].heroImageAlt,
  },
  {
    image: destinationDetails.canada.heroImage,
    alt: destinationDetails.canada.heroImageAlt,
  },
  {
    image: destinationDetails.australia.heroImage,
    alt: destinationDetails.australia.heroImageAlt,
  },
  {
    image: destinationDetails.malta.heroImage,
    alt: destinationDetails.malta.heroImageAlt,
  },
];

export default function BlogsPage() {
  const visiblePosts = blogPosts.filter((post) => post.slug !== 'scholarships-for-kenyan-students');

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f8fc_0%,#ffffff_24%,#f4f8fb_100%)] text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-[#e1e8f2] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 sm:py-16">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-slate-900">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-slate-900">Blogs</span>
            </div>

            <div className="mt-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cddbf7] bg-[#f4f8fb] px-4 py-2 text-sm font-medium text-[#1f62e4]">
                <Newspaper className="h-4 w-4" />
                Blog articles
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
                Helpful reads for students planning to study abroad
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Explore practical articles on study destinations, admissions, IELTS and the decisions students usually need to make before applying.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map((post, index) => {
                const visual = articleVisuals[index % articleVisuals.length];

                return (
                  <article
                    key={post.slug}
                    className="flex h-full flex-col overflow-hidden rounded-[16px] border border-[#e3e8f1] bg-white shadow-[0_10px_28px_rgba(31,98,228,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(31,98,228,0.12)]"
                  >
                    <div className="relative h-[220px] overflow-hidden">
                      <Image
                        src={visual.image}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.28)_100%)]" />
                    </div>

                    <div className="flex flex-1 flex-col p-6 text-center sm:p-7">
                      <div className="flex justify-center">
                        <div className="inline-flex rounded-full bg-[#4f8ff0] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                          {post.category}
                        </div>
                      </div>

                      <h2 className="mt-5 text-[1.95rem] font-semibold leading-tight text-slate-900">
                        {post.title}
                      </h2>

                      <div className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-[#f2c200]" />

                      <p className="mt-5 flex-1 text-[15px] leading-8 text-slate-500">
                        {post.excerpt}
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-[#e8edf5] pt-5 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          {post.date}
                        </span>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="font-semibold text-[#4f8ff0] transition hover:text-[#1f62e4]"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

