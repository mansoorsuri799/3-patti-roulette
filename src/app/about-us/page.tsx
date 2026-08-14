import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import CtaButton from '@/components/CtaButton';
import { BRAND, IMAGES, ROUTES, SITE_ORIGIN, SUPPORT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: `About ${BRAND} — Pakistani Teen Patti & roulette guides`,
  description: '3pattiroulette.com.pk publishes original English install, wallet, and safety notes for 3 Patti Roulette. We are not the game studio and do not guarantee winnings.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.about}` },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white text-center">About this site</h1>
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image src={IMAGES.logo} alt="3 Patti Roulette brand icon" width={280} height={280} className="object-contain" priority />
            <div>
              <p className="text-lg text-gray-300 mb-4">
                <Link href="/" className="text-accent hover:underline">{BRAND}</Link> content on 3pattiroulette.com.pk is written for Pakistani Android users who need sideload steps, JazzCash/EasyPaisa notes, and honest risk language. The game itself is a third-party APK. This website is a guide property, not a casino operator.
              </p>
              <p className="text-lg text-gray-300">
                We do not promise income. Roulette wheels and Teen Patti tables can empty a wallet. Contact {SUPPORT_EMAIL} for site issues; in-app chat is separate.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">What we publish</h2>
          <p className="text-white text-lg">Download, deposit, withdraw, PC emulator notes, and four supporting articles. No doorway clones of other earning-game sites.</p>
        </div>
        <div className="bg-secondary rounded-2xl p-8 text-center">
          <CtaButton href={ROUTES.contact} icon="arrow">Contact Us</CtaButton>
        </div>
      </div>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: BRAND,
              url: SITE_ORIGIN,
              logo: `${SITE_ORIGIN}${IMAGES.logo}`,
              email: SUPPORT_EMAIL,
            },
          }),
        }}
      />
    </article>
  );
}
