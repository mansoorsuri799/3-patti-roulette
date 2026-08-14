import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import CtaButton from '@/components/CtaButton';
import {
  APP_SIZE,
  BLOG,
  BRAND,
  DOWNLOAD_URL,
  IMAGES,
  RATING_COUNT,
  RATING_VALUE,
  ROUTES,
  SITE_ORIGIN,
  SUPPORT_EMAIL,
  VERSION,
} from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
    template: `%s | ${BRAND}`
  },
  description: "3 Patti Roulette mixes Teen Patti tables with roulette wheels for Pakistani Android users. JazzCash and EasyPaisa wallets, v1.14 APK notes, and no income guarantees.",
  openGraph: {
    title: `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
    description: "Teen Patti plus roulette on Android. Read the install guide, then sideload v1.14. Wallets: JazzCash and EasyPaisa.",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.logo}`,
        width: 512,
        height: 512,
        alt: `${BRAND} app icon for Android`
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
    description: "Teen Patti plus roulette on Android with JazzCash and EasyPaisa. Entertainment play only.",
    images: [`${SITE_ORIGIN}${IMAGES.logo}`]
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        "url": `${SITE_ORIGIN}/`,
        "name": BRAND,
        "description": "Teen Patti and roulette Android app guides for Pakistan",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        "url": `${SITE_ORIGIN}/`,
        "name": `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
        "isPartOf": { "@id": `${SITE_ORIGIN}/#website` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_ORIGIN}${IMAGES.logo}`,
          "width": 512,
          "height": 512,
          "name": BRAND,
          ...imageObjectLicensing
        }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        "name": BRAND,
        "url": `${SITE_ORIGIN}/`,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_ORIGIN}${IMAGES.logo}`,
          "width": 512,
          "height": 512,
          ...imageObjectLicensing
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": SUPPORT_EMAIL,
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": BRAND,
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "image": `${SITE_ORIGIN}${IMAGES.logo}`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": RATING_VALUE,
          "ratingCount": RATING_COUNT,
          "bestRating": "5"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": DOWNLOAD_URL,
        "softwareVersion": VERSION,
        "fileSize": APP_SIZE,
        "description": "3 Patti Roulette is an Android earning-style game that combines Teen Patti tables with roulette-style wheels. Pakistani users typically fund and cash out through JazzCash or EasyPaisa. Outcomes are not guaranteed."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is 3 Patti Roulette?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "3 Patti Roulette is an Android app that puts Teen Patti card tables and roulette-style wheels in one lobby. Players in Pakistan usually add funds with JazzCash or EasyPaisa. It is entertainment with real-money risk, not a salary."
            }
          },
          {
            "@type": "Question",
            "name": "How do I download 3 Patti Roulette APK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open the download page on 3pattiroulette.com.pk, follow the Android unknown-sources steps, and install v1.14. Homepage buttons stay on this site; the APK file itself comes from the disclosed game link."
            }
          },
          {
            "@type": "Question",
            "name": "Is 3 Patti Roulette legal in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Online Teen Patti and roulette sit in a grey area. This website does not give legal advice. Read local rules, play only with spare money, and stop if play harms your budget."
            }
          },
          {
            "@type": "Question",
            "name": "Which wallets work for deposit and withdraw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JazzCash and EasyPaisa are the usual Pakistani methods. Bind the wallet to the same mobile number you registered. Withdrawals can fail if KYC, bet volume, or wallet names do not match."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">{BRAND}</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Teen Patti + Roulette</span>{' '}
                <span className="text-white">on Android in Pakistan</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">{BRAND}</Link> is built for players who want three-card tables and a spinning wheel without jumping between apps. Version {VERSION} is listed as a free Android package around {APP_SIZE}. This site is English-only. Ratings shown below match schema: {RATING_VALUE} stars from {Number(RATING_COUNT).toLocaleString()} ratings. Play is optional entertainment — balances can go to zero.
            </p>

            <div className="flex justify-center my-8">
              <CtaButton href={ROUTES.download} ariaLabel="Open the 3 Patti Roulette download page">DOWNLOAD NOW</CtaButton>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">500K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{RATING_VALUE}★</div>
                <div className="text-gray-400 text-sm">500,000 ratings</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{APP_SIZE}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Android only. Free to install. Gameplay uses real money at your own risk.</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={IMAGES.logo}
              alt="3 Patti Roulette official Android app icon"
              title="3 Patti Roulette v1.14"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">APK details for v1.14</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ['App Name', BRAND],
                ['Category', 'Cards & Roulette, Game'],
                ['Size', APP_SIZE],
                ['Latest Version', VERSION],
                ['Required OS', 'Android 5.0+'],
                ['Language', 'English'],
                ['Price', 'Free (0 PKR to install)'],
                ['Rating', `${RATING_VALUE} / 5 (${Number(RATING_COUNT).toLocaleString()} ratings)`],
              ].map(([k, v], i) => (
                <tr key={k} className={i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'}>
                  <td className="py-4 px-6 font-medium text-white">{k}</td>
                  <td className="py-4 px-6 text-white">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="what-is-3-patti-roulette" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What 3 Patti Roulette actually is</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most Pakistani APK pages treat “Teen Patti” and “roulette” as two separate products. {BRAND} puts both in one lobby: three-card showdowns at one table, numbered wheels at another. That mix is why search results are messy — Softonic clones and Play Store poker titles rank, but they rarely explain JazzCash wallets or sideloading.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This website is the English guide for 3pattiroulette.com.pk. We document install, account, <Link href={ROUTES.deposit} className="text-accent hover:underline">deposits</Link>, and <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdrawals</Link>. We do not promise profit. If a page claims “always win,” treat it as advertising, not a method.
          </p>
        </div>
      </section>

      <section id="why-players-open-it" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Why Pakistani players look for this APK</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Google Play often hides real-money Teen Patti packages. People therefore search “3 Patti Roulette APK” and land on aggregator sites that cloak downloads. We keep conversion on-domain: the homepage button opens our <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link>. That page then uses the disclosed game URL so you can see where the file comes from.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Local wallets matter more than flashy graphics. JazzCash and EasyPaisa are the practical rails. Bank names must match the registered account or cashouts stall. That operational detail is more useful than stuffed keywords.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Screens from the lobby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            [IMAGES.game, '3 Patti Roulette game lobby screenshot', 'Lobby with Teen Patti and wheel entries'],
            [IMAGES.pakistan, '3 Patti Roulette Pakistan wallet screen', 'Pakistan-facing wallet and PKR display'],
            [IMAGES.addMoney, 'Add money screen with JazzCash and EasyPaisa', 'Deposit sheet for JazzCash and EasyPaisa'],
            [IMAGES.withdraw, 'Withdraw money screen in 3 Patti Roulette', 'Cashout form for local wallets'],
            [IMAGES.refer, 'Refer and earn panel in 3 Patti Roulette', 'Invite code panel — bonus terms can change'],
            [IMAGES.bindMail, 'Bind email security screen', 'Email bind for account recovery'],
          ].map(([src, alt, caption]) => (
            <figure key={src} className="bg-[#0A1029] rounded-xl p-4">
              <Image src={src} alt={alt} width={640} height={360} className="w-full h-auto rounded-lg" sizes="(max-width: 768px) 100vw, 33vw" />
              <figcaption className="text-gray-400 text-sm mt-3">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Features that change how you play</h2>
          <h3 className="text-xl font-semibold text-white mb-3">Combined Teen Patti and wheel lobby</h3>
          <p className="text-gray-300 mb-6">You pick a table or a wheel without installing two APKs. Beginners usually start on low Teen Patti blinds, then try small roulette chips. Switching games does not reset KYC if the same login is used.</p>
          <h3 className="text-xl font-semibold text-white mb-3">PKR wallet with local methods</h3>
          <p className="text-gray-300 mb-6">Deposits typically credit after the wallet OTP. Failed deposits are usually wrong numbers or pending JazzCash limits — not “hacked servers.” Follow the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit walkthrough</Link> before you retry.</p>
          <h3 className="text-xl font-semibold text-white mb-3">Bonuses with wagering</h3>
          <p className="text-gray-300">Welcome chips, recharge extras, and referral credit almost always carry playthrough. If you withdraw immediately after a bonus, the app can freeze the request. Read the in-app banner, not a screenshot from 2024.</p>
        </div>
      </section>

      <section id="install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">How to start without wrecking your phone</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Open the <Link href={ROUTES.download} className="text-accent hover:underline">v1.14 download guide</Link> on this domain.</li>
            <li>Allow unknown sources only for the installer you chose.</li>
            <li>Create a login with a number you control; bind email later.</li>
            <li>Add a small test deposit, then try a tiny Teen Patti or roulette stake.</li>
          </ol>
          <p className="text-gray-300 mt-4">PC users should follow the <Link href={ROUTES.pc} className="text-accent hover:underline">emulator notes</Link> instead of expecting a Windows .exe.</p>
        </div>
      </section>

      <section id="safety" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Safety, legality, and support</h2>
          <p className="text-gray-300 mb-4">
            Sideloaded APKs can be swapped. Compare package size (~{APP_SIZE}) and version ({VERSION}). Never send OTP to chat agents. For legitimacy checks see <Link href={BLOG.realOrFake} className="text-accent hover:underline">is it real or fake</Link>; for law and risk see <Link href={BLOG.safety} className="text-accent hover:underline">Pakistan safety notes</Link>.
          </p>
          <p className="text-gray-300">
            Support for this website: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a>. In-app chat is separate and can be slow during peak hours.
          </p>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">FAQs</h2>
        <div className="space-y-4">
          {[
            ['What is 3 Patti Roulette?', 'An Android lobby with Teen Patti tables and roulette-style wheels, usually funded in PKR via JazzCash or EasyPaisa.'],
            ['How do I download the APK?', 'Use the download page on this site. Homepage buttons stay here on purpose so you read install steps first.'],
            ['Is it legal in Pakistan?', 'Grey area. We are not a law firm. Play only if you accept legal and financial risk.'],
            ['Which wallets work?', 'JazzCash and EasyPaisa are the practical pair. Matching names and numbers reduces failed withdrawals.'],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#0A1029] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-gray-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready for the install steps?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          {BRAND} {VERSION} is free to install. Winnings are not guaranteed. Continue to the download page for Android steps, then use JazzCash or EasyPaisa only with money you can lose.
        </p>
        <CtaButton href={ROUTES.download}>DOWNLOAD NOW</CtaButton>
      </section>
    </>
  );
}
