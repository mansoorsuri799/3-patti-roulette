import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CtaButton from '@/components/CtaButton';
import { BRAND, DOWNLOAD_URL, IMAGES, ROUTES, SITE_ORIGIN, VERSION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Deposit PKR in 3 Patti Roulette via JazzCash or EasyPaisa',
  description: 'Add money to 3 Patti Roulette with JazzCash or EasyPaisa. OTP steps, failed-deposit checks, and why bonus wagering can lock chips.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.deposit}` },
  openGraph: {
    title: 'Deposit in 3 Patti Roulette',
    description: 'JazzCash and EasyPaisa add-funds walkthrough for Teen Patti and roulette tables.',
    url: `${SITE_ORIGIN}${ROUTES.deposit}`,
    siteName: BRAND,
    type: 'article',
  },
};

export default function DepositMoneyPage() {
  return (
    <article className="min-h-screen bg-primary">
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6 text-sm text-gray-400">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li>/</li>
          <li className="text-white" aria-current="page">Deposit</li>
        </ol>
      </nav>
      <section className="py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Fund <span className="text-[#FFA500]">{BRAND}</span> with local wallets
          </h1>
          <p className="text-lg text-gray-300 mb-8">JazzCash and EasyPaisa are the usual rails. Start with a small test amount before roulette chips.</p>
          <CtaButton href={DOWNLOAD_URL}>Download {VERSION} first</CtaButton>
          <div className="mt-10 flex justify-center">
            <Image src={IMAGES.addMoney} alt="3 Patti Roulette add money screen with JazzCash and EasyPaisa" width={320} height={320} className="object-contain w-[260px] h-[260px] md:w-[320px] md:h-[320px]" priority sizes="(max-width: 768px) 260px, 320px" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8">
            <p className="text-lg text-gray-300 mb-4">
              <Link href="/" className="text-accent hover:underline">{BRAND}</Link> will not let you sit a cash Teen Patti table or spin a paid wheel until chips exist. Install {VERSION} from the <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link> if the shop icon is missing.
            </p>
            <p className="text-lg text-gray-300">
              Use a wallet registered in the same name as the app account. Mismatched CNIC or numbers are the top reason deposits sit in “pending.” After you play, cash out with the <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdrawal guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Steps to add chips</h2>
          <ol className="space-y-6">
            {[
              ['Open the signed-in lobby', 'Use the phone number you registered. Guest chips often cannot withdraw.'],
              ['Open Shop or Wallet', 'Look for Add / Recharge, not the roulette table buy-in.'],
              ['Pick JazzCash or EasyPaisa', 'Those two cover most Pakistani numbers. Bank cards may appear later after extra KYC.'],
              ['Choose an amount you can lose', 'Typical first tests are PKR 200–500. Roulette tables can eat a stack faster than Teen Patti blinds.'],
              ['Approve the wallet OTP', 'The request lands in JazzCash or EasyPaisa. Nobody from this site will ask for that PIN.'],
              ['Wait for the chip balance', 'Most credits are quick. If not, check wallet history before depositing twice.'],
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

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-white">When a deposit fails</h2>
          <ul className="text-gray-300 space-y-3 list-disc pl-6">
            <li>Daily JazzCash/EasyPaisa limits already used</li>
            <li>Wrong mobile number on the payment sheet</li>
            <li>VPN or unstable data during OTP</li>
            <li>Bonus offers that require a minimum first recharge</li>
          </ul>
        </div>
      </section>

      <section className="py-12 text-center">
        <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
      </section>
    </article>
  );
}
