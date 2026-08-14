import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import {
  APP_SIZE,
  BRAND,
  DOWNLOAD_URL,
  IMAGES,
  RATING_COUNT,
  RATING_VALUE,
  ROUTES,
  SITE_ORIGIN,
  VERSION,
} from '@/lib/site';

export const metadata: Metadata = {
  title: `Download 3 Patti Roulette APK ${VERSION} for Android`,
  description: `Sideload 3 Patti Roulette ${VERSION} (${APP_SIZE}) for Android. Unknown-sources steps, JazzCash notes, and a disclosed APK link — no cloaked tracker.`,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.download}` },
  openGraph: {
    title: `Download 3 Patti Roulette APK ${VERSION}`,
    description: 'Android sideload guide for Teen Patti and roulette. Free install. Real-money play is optional and risky.',
    url: `${SITE_ORIGIN}${ROUTES.download}`,
    siteName: BRAND,
    type: 'website',
    images: [{ url: `${SITE_ORIGIN}${IMAGES.og}`, width: 512, height: 512, alt: `Download ${BRAND}` }],
  },
};

export default function DownloadPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND,
    operatingSystem: "Android 5.0+",
    applicationCategory: "GameApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      ratingCount: RATING_COUNT,
      bestRating: "5",
    },
    downloadUrl: DOWNLOAD_URL,
    softwareVersion: VERSION,
    fileSize: APP_SIZE,
    image: `${SITE_ORIGIN}${IMAGES.logo}`,
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Install ${BRAND} ${VERSION} on Android`,
    step: [
      { "@type": "HowToStep", name: "Open the APK link", text: "Use the download button on this page. It goes to the disclosed game URL." },
      { "@type": "HowToStep", name: "Allow unknown sources", text: "Enable install from that source in Android settings." },
      { "@type": "HowToStep", name: "Install v1.14", text: "Open the APK and wait until the icon appears." },
      { "@type": "HowToStep", name: "Register", text: "Sign up with a number you control before depositing." },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
              { "@type": "ListItem", position: 2, name: `Download ${BRAND}`, item: `${SITE_ORIGIN}${ROUTES.download}` },
            ],
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-6 text-sm text-gray-400">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">Download</li>
        </ol>
      </nav>

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get </span>
            <span className="text-[#FFA500]">{BRAND} {VERSION}</span>
            <span className="text-white"> on Android</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            This page is the conversion URL. The button below opens the disclosed installer: 3pattiroulette.com with gameid 3758138. Homepage visitors were sent here first so they can read unknown-sources steps.
          </p>
        </div>

        <div className="flex justify-center my-12">
          <CtaButton href={DOWNLOAD_URL} ariaLabel={`Download ${BRAND} APK`}>DOWNLOAD NOW</CtaButton>
        </div>

        <div className="flex justify-center mb-12">
          <Image
            src={IMAGES.logo}
            alt="3 Patti Roulette APK icon v1.14"
            width={320}
            height={320}
            className="object-contain w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-[#FFA500] text-center">Package facts</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full">
            <tbody>
              {[
                ['App', BRAND],
                ['Version', VERSION],
                ['Size', APP_SIZE],
                ['OS', 'Android 5.0+'],
                ['Rating', `${RATING_VALUE}★ · ${Number(RATING_COUNT).toLocaleString()} ratings · Free · Android · Game`],
              ].map(([k, v], i) => (
                <tr key={k} className={i % 2 ? 'bg-[#06091F]/50' : 'bg-[#0a1029]/50'}>
                  <td className="py-4 px-6 text-white font-medium">{k}</td>
                  <td className="py-4 px-6 text-white">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <CtaButton href={DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-[#FFA500] text-center">Install 3 Patti Roulette without guesswork</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">1. Fetch the APK</h3>
              <p className="text-gray-300">Tap DOWNLOAD NOW on this page. You leave 3pattiroulette.com.pk for the game host. That hop is intentional and disclosed — not a silent cloak.</p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">2. Allow the installer</h3>
              <p className="text-gray-300">Android blocks unknown APKs by default. Enable installs from this source only. Turn the permission off after {BRAND} is on the home screen.</p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">3. Confirm {VERSION}</h3>
              <p className="text-gray-300">Open the file. If the size is far from {APP_SIZE} or the version is not {VERSION}, abort. Fake Teen Patti packages often reuse the name.</p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">4. Register, then fund small</h3>
              <p className="text-gray-300">Create the account, bind a wallet you own, and use the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>. Do not chase losses on the roulette wheel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 px-4 text-center">
        <Link href="/" className="text-[#0ea5e9] font-medium">← Back to Home</Link>
      </section>
    </article>
  );
}
