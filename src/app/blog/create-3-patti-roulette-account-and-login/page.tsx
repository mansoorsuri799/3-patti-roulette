import Link from 'next/link';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import CtaButton from '@/components/CtaButton';
import { BLOG, BRAND, DOWNLOAD_URL, ROUTES, SITE_ORIGIN } from '@/lib/site';

const slug = 'create-3-patti-roulette-account-and-login';

export const metadata: Metadata = {
  title: 'Create a 3 Patti Roulette account and log in',
  description: 'Register 3 Patti Roulette with a Pakistani mobile number, complete OTP, bind email, and recover a locked login without sharing PINs.',
  alternates: { canonical: `${SITE_ORIGIN}${BLOG.accountLogin}` },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema title="Create a 3 Patti Roulette account and log in" description={metadata.description as string} slug={slug} datePublished="2026-08-15" />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/blog" className="hover:text-accent">Blog</Link> / <span className="text-white">Account</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">How to register and log in to 3 Patti Roulette</h1>
      <p className="text-gray-300 mb-4">Install from the <Link href={ROUTES.download} className="text-accent hover:underline">APK guide</Link> first. Guest play is a poor idea if you later want JazzCash cashouts — bind a number you control.</p>
      <h2 className="text-2xl font-bold text-[#FFA500] mt-10 mb-4">Registration</h2>
      <p className="text-gray-300 mb-4">Open {BRAND}, choose register, enter the Pakistani mobile number, and type the SMS OTP. Set a password you do not reuse on JazzCash. Bind email from the security screen so a lost phone is recoverable.</p>
      <h2 className="text-2xl font-bold text-[#FFA500] mt-10 mb-4">Login problems</h2>
      <p className="text-gray-300 mb-4">No SMS usually means a full inbox, a dual-SIM mix-up, or a VPN. Do not pay a “login agent” on WhatsApp. Support for this website is on the <Link href={ROUTES.contact} className="text-accent hover:underline">contact page</Link>; the game’s in-app chat is separate.</p>
      <p className="text-gray-300 mb-8">After login, add a small test amount using the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit article</Link>.</p>
      <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
