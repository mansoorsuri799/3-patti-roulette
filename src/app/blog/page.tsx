import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG, BRAND, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: `${BRAND} blog — legitimacy, login, tips, Pakistan safety`,
  description: 'Four original articles: is 3 Patti Roulette real, how to create an account, how to play Teen Patti and roulette smarter, and Pakistan legal/safety notes.',
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
};

const posts = [
  { href: BLOG.realOrFake, title: 'Is 3 Patti Roulette real or a cloned APK?', excerpt: 'How to tell a genuine v1.14 package from lookalike Teen Patti roulette files.', mins: '8 min' },
  { href: BLOG.accountLogin, title: 'Create a 3 Patti Roulette account and log in', excerpt: 'Phone number, OTP, email bind, and what to do when the code never arrives.', mins: '6 min' },
  { href: BLOG.tips, title: 'Practical Teen Patti and roulette habits', excerpt: 'Bankroll splits between tables and wheels — not “sure win” scripts.', mins: '7 min' },
  { href: BLOG.safety, title: 'Is 3 Patti Roulette safe to use in Pakistan?', excerpt: 'Grey-area law, sideload risk, and wallet hygiene. English only.', mins: '8 min' },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">{BRAND} Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">Supporting intents only. Deposit and withdraw live on their own guide pages so we do not cannibalize those queries.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((p, i) => (
          <div key={p.href} className={`bg-secondary px-8 py-8 rounded-lg border-2 ${i === 0 ? 'border-[#FFA500]' : 'border-gray-700'}`}>
            {i === 0 && <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">FEATURED</div>}
            <h2 className="text-2xl font-bold mb-4 text-white">{p.title}</h2>
            <p className="text-gray-300 mb-4">{p.excerpt}</p>
            <p className="text-sm text-gray-400 mb-4">August 2026 · {p.mins}</p>
            <Link href={p.href} className="text-accent hover:underline font-semibold">Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
