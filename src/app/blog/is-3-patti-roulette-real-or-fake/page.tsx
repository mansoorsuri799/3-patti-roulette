import Link from 'next/link';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';
import { BLOG, BRAND, DOWNLOAD_URL, ROUTES, SITE_ORIGIN, VERSION } from '@/lib/site';

const slug = 'is-3-patti-roulette-real-or-fake';

export const metadata: Metadata = {
  title: 'Is 3 Patti Roulette real or a fake APK?',
  description: 'Checks for cloned Teen Patti roulette files: version v1.14, package size, wallet names, and why Softonic clones are a poor source.',
  alternates: { canonical: `${SITE_ORIGIN}${BLOG.realOrFake}` },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="Is 3 Patti Roulette real or a fake APK?"
        description={metadata.description as string}
        slug={slug}
        datePublished="2026-08-15"
        dateModified="2026-08-15"
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/blog" className="hover:text-accent">Blog</Link> / <span className="text-white">Real or fake</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Is 3 Patti Roulette a real app or a copycat APK?</h1>
      <p className="text-gray-300 mb-4">Search results mix Play Store poker titles, Softonic “3 Patti and Roulette” pages, and YouTube “hack” channels. None of those are this product. {BRAND} on 3pattiroulette.com.pk points at version {VERSION} and a disclosed game URL with from_gameid=3758138.</p>
      <p className="text-gray-300 mb-4">A real package still involves money risk. “Real” here means the file matches the version we document, not that you will profit. Fake APKs often keep the icon but inject overlay ads or steal OTPs.</p>
      <h2 className="text-2xl font-bold text-[#FFA500] mt-10 mb-4">Signals the file is the one we mean</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li>Version string {VERSION} after install</li>
        <li>Install flow started from our <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link></li>
        <li>JazzCash/EasyPaisa labels inside wallet, not unknown foreign gateways only</li>
      </ul>
      <h2 className="text-2xl font-bold text-[#FFA500] mt-10 mb-4">Signals to abort</h2>
      <p className="text-gray-300 mb-4">Chrome warnings, a request to disable Play Protect permanently, login screens that ask for banking PINs, or “mod/hack” APKs. Those are not {BRAND}.</p>
      <p className="text-gray-300 mb-8">Next: <Link href={BLOG.accountLogin} className="text-accent hover:underline">account setup</Link> and <Link href={BLOG.safety} className="text-accent hover:underline">Pakistan safety notes</Link>.</p>
      <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
