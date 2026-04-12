import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/barak/footer';
import { Navbar } from '@/components/barak/navbar';
import { WhatsAppButton } from '@/components/barak/whatsapp-button';
import { blogPosts } from '@/data/blog';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function getRelatedPosts(currentSlug: string) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: 'Blog | Barak Pathways',
      alternates: { canonical: '/blogs' },
    };
  }

  return {
    title: `${post.title} | Barak Pathways`,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  const relatedPosts = getRelatedPosts(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f8fc_0%,#ffffff_24%,#f7faff_100%)] text-slate-900">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-[#e1e8f2] bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,110,242,0.14),transparent_42%),radial-gradient(circle_at_top_right,rgba(242,194,0,0.16),transparent_35%)]" />
          <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 sm:py-14">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-slate-900">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blogs" className="transition hover:text-slate-900">
                Blogs
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="min-w-0 max-w-full truncate text-slate-900">{post.title}</span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e3f6] bg-white/90 px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  {post.category}
                </div>
                <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="rounded-full border border-[#e3e8f1] bg-white px-3 py-1">
                    {post.readTime}
                  </span>
                  <span className="rounded-full border border-[#e3e8f1] bg-white px-3 py-1">
                    {post.date}
                  </span>
                </div>
              </div>

              <div className="rounded-[18px] border border-[#e3e8f1] bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,58,120,0.08)] backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Need help applying?
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-950">
                  Talk to a Barak Pathways advisor
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Get 1:1 guidance on destinations, documents, intakes, and scholarship planning.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact-us"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#1d6ef2] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f3a78] sm:w-auto"
                  >
                    Book consultation
                  </Link>
                  <Link
                    href="/blogs"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#d8e3f6] bg-white px-5 py-2.5 text-sm font-semibold text-[#0f3a78] transition hover:bg-[#f7faff] sm:w-auto"
                  >
                    Browse blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr] lg:items-start">
              <article className="rounded-[20px] border border-[#e3e8f1] bg-white p-6 shadow-[0_10px_28px_rgba(15,58,120,0.06)] sm:p-9">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="mt-10 scroll-mt-24 border-t border-[#e8edf5] pt-8 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="mt-5 text-[15.5px] leading-8 text-slate-600 sm:text-[16px]">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mt-5 list-disc space-y-2 pl-6 text-[15.5px] leading-8 text-slate-600 sm:text-[16px]">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mt-5 list-decimal space-y-2 pl-6 text-[15.5px] leading-8 text-slate-600 sm:text-[16px]">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => <li className="pl-1">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="mt-6 rounded-[16px] border border-[#d8e3f6] bg-[#f7faff] p-5 text-slate-700 shadow-sm">
                        {children}
                      </blockquote>
                    ),
                    hr: () => <hr className="my-10 border-[#e8edf5]" />,
                    code: ({ children }) => (
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.92em] text-slate-800">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="mt-6 overflow-x-auto rounded-[16px] border border-[#e3e8f1] bg-slate-950 p-5 text-sm text-slate-50 shadow-sm">
                        {children}
                      </pre>
                    ),
                    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className="font-semibold text-[#1d6ef2] underline decoration-[#1d6ef2]/25 underline-offset-4 transition hover:decoration-[#1d6ef2]/60"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>

                <div className="mt-12 flex flex-col gap-3 border-t border-[#e8edf5] pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/blogs"
                    className="text-sm font-semibold text-[#0f3a78] transition hover:text-[#0b2b5c]"
                  >
                    {'\u2190'} Back to Blogs
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-sm font-semibold text-[#1d6ef2] transition hover:text-[#0f3a78]"
                  >
                    Talk to an advisor {'\u2192'}
                  </Link>
                </div>
              </article>

              <aside className="space-y-5 lg:sticky lg:top-24">
                <div className="rounded-[18px] border border-[#e3e8f1] bg-white p-6 shadow-[0_10px_28px_rgba(15,58,120,0.06)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Related posts
                  </div>
                  <div className="mt-4 space-y-3">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blogs/${item.slug}`}
                        className="group block rounded-[14px] border border-[#eef2f8] bg-[#fbfcff] p-4 transition hover:border-[#d8e3f6] hover:bg-white"
                      >
                        <div className="text-sm font-semibold text-slate-900 transition group-hover:text-[#0f3a78]">
                          {item.title}
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          {item.readTime} {'\u2022'} {item.date}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[18px] border border-[#d8e3f6] bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] p-6 shadow-[0_14px_35px_rgba(15,58,120,0.08)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Quick action
                  </div>
                  <div className="mt-3 text-lg font-semibold text-slate-950">
                    Ready to start your application?
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We&apos;ll help you shortlist, prepare documents, and plan timelines with confidence.
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#1d6ef2] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f3a78]"
                  >
                    Contact us
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
