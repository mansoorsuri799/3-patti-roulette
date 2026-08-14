import Link from 'next/link';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';
import { BLOG, BRAND, DOWNLOAD_URL, ROUTES, SITE_ORIGIN } from '@/lib/site';

const slug = 'is-3-patti-roulette-safe-legal-pakistan';

export const metadata: Metadata = {
  title: 'Is 3 Patti Roulette safe and legal in Pakistan?',
  description: 'Online Teen Patti and roulette sit in a legal grey area in Pakistan. Sideload risks, wallet hygiene, and why this site does not give legal advice.',
  alternates: { canonical: `${SITE_ORIGIN}${BLOG.safety}` },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema title="Is 3 Patti Roulette safe and legal in Pakistan?" description={metadata.description as string} slug={slug} datePublished="2026-08-15" />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/blog" className="hover:text-accent">Blog</Link> / <span className="text-white">Safety</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Pakistan safety notes for 3 Patti Roulette</h1>
      <p className="text-gray-300 mb-4">This page is English-only and is not legal advice. {BRAND} involves real-money Teen Patti and roulette. Pakistani rules around online wagering are unevenly enforced and can change. Play only if you accept that risk.</p>
      <h2 className="text-2xl font-bold text-[#FFA500] mt-10 mb-4">Technical safety</h2>
      <p className="text-gray-300 mb-4">Sideload from the <Link href={ROUTES.download} className="text-accent hover:underline">documented APK path</Link>. Compare version and size. Never send JazzCash PINs to chat. See <Link href={BLOG.realOrFake} className="text-accent hover:underline">real vs fake</Link>.</p>
      <h2 className="text-2xl font-bold text-[#FFA500] mt-10 mb-4">Financial safety</h2>
      <p className="text-gray-300 mb-8">Use money you can lose. Withdraw to a wallet in your name via the <Link href={ROUTES.withdraw} className="text-accent hover:underline">cashout guide</Link>. If gaming is harming sleep, work, or family, stop and seek local help — a game support chat is not therapy.</p>
      <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
