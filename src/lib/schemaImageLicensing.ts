import { BRAND, SITE_ORIGIN } from '@/lib/site';

export const IMAGE_CREATOR = {
  '@type': 'Organization',
  name: BRAND,
  url: SITE_ORIGIN,
} as const;

export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: `© ${BRAND}. All rights reserved.`,
  creditText: BRAND,
} as const;
