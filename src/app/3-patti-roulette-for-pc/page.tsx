import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { APP_SIZE, BRAND, DOWNLOAD_URL, IMAGES, ROUTES, SITE_ORIGIN, VERSION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Play 3 Patti Roulette on PC with an Android emulator',
  description: 'There is no Windows .exe. Run 3 Patti Roulette v1.14 inside BlueStacks, LDPlayer, or Nox, then sideload the same Android APK.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.pc}` },
  openGraph: {
    title: '3 Patti Roulette on PC',
    description: 'Emulator install for Teen Patti and roulette on a larger screen.',
    url: `${SITE_ORIGIN}${ROUTES.pc}`,
    siteName: BRAND,
  },
};

export default function PcPage() {
  return (
    <article>
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-6 text-sm text-gray-400">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li>/</li>
          <li className="text-white" aria-current="page">PC Version</li>
        </ol>
      </nav>
      <section className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-[#FFA500]">{BRAND} on PC</span>
          <span className="text-white"> via emulator</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          {BRAND} ships as Android {VERSION} ({APP_SIZE}). A desktop build is not offered. BlueStacks-class emulators sideload the same APK you would put on a phone.
        </p>
        <Image src={IMAGES.logo} alt="3 Patti Roulette icon used inside Android emulators" width={280} height={280} className="mx-auto" priority />
      </section>
      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Install path</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-3">
          <li>Install BlueStacks, LDPlayer, or Nox on Windows.</li>
          <li>Download the APK from the <Link href={ROUTES.download} className="text-accent hover:underline">Android download page</Link>.</li>
          <li>Use the emulator’s “Install APK” control.</li>
          <li>Sign in and treat JazzCash OTPs on your real phone, not inside the emulator SMS if it cannot receive them.</li>
        </ol>
        <div className="flex justify-center mt-8">
          <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
        </div>
      </section>
    </article>
  );
}
