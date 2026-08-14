import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CtaButton from '@/components/CtaButton';
import { BRAND, DOWNLOAD_URL, IMAGES, ROUTES, SITE_ORIGIN, VERSION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Withdraw from 3 Patti Roulette to JazzCash or EasyPaisa',
  description: 'Cash out 3 Patti Roulette winnings to JazzCash, EasyPaisa, or a bound bank card. Why bonus wagering, KYC, and name mismatch block payouts.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.withdraw}` },
  openGraph: {
    title: 'Withdraw from 3 Patti Roulette',
    description: 'PKR cashout steps for Teen Patti and roulette balances.',
    url: `${SITE_ORIGIN}${ROUTES.withdraw}`,
    siteName: BRAND,
    type: 'article',
  },
};

export default function WithdrawMoneyPage() {
  return (
    <article className="min-h-screen bg-primary">
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6 text-sm text-gray-400">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li>/</li>
          <li className="text-white" aria-current="page">Withdraw</li>
        </ol>
      </nav>
      <section className="py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Cash out <span className="text-[#FFA500]">{BRAND}</span> to a wallet you own
          </h1>
          <p className="text-lg text-gray-300 mb-8">Payouts fail most often on unfinished bonus wagering or a wallet name that does not match KYC.</p>
          <CtaButton href={DOWNLOAD_URL}>Get {VERSION}</CtaButton>
          <div className="mt-10 flex justify-center">
            <Image src={IMAGES.withdraw} alt="3 Patti Roulette withdraw money screen" width={320} height={320} className="object-contain w-[260px] h-[260px] md:w-[320px] md:h-[320px]" priority sizes="(max-width: 768px) 260px, 320px" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8">
            <p className="text-lg text-gray-300 mb-4">
              You can only withdraw what the app treats as withdrawable chips — not locked bonus. If you have not funded yet, use the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit steps</Link> first.
            </p>
            <p className="text-lg text-gray-300">
              <Link href="/" className="text-accent hover:underline">{BRAND}</Link> is not a bank. Times vary. Screenshot the request ID before you message support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Withdrawal sequence</h2>
          <ol className="space-y-6">
            {[
              ['Open Wallet', 'Balance and Withdraw sit together. Do not confuse table leave with cashout.'],
              ['Tap Withdraw', 'Pick JazzCash, EasyPaisa, or a bound bank card if offered.'],
              ['Enter an amount inside limits', 'Minimums are shown in-app and can change. Bank card caps are often lower per request.'],
              ['Match the registered name', `The wallet title should match the ${BRAND} profile. Friends’ wallets get rejected.`],
              ['Confirm and wait', 'Minutes to a day is common. Peak evenings are slower.'],
              ['Check the wallet SMS', 'If chips left the app but PKR did not arrive, keep the transaction ID.'],
            ].map(([t, d], i) => (
              <li key={t} className="bg-[#0A1029] rounded-xl p-6 flex gap-4">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">{i + 1}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t}</h3>
                  <p className="text-gray-300">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 text-center">
        <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
      </section>
    </article>
  );
}
