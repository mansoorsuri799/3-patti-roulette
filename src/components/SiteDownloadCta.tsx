'use client';

import { usePathname } from 'next/navigation';
import CtaButton from '@/components/CtaButton';
import { DOWNLOAD_URL, ROUTES } from '@/lib/site';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};

/** Homepage CTAs go to the on-site download page; all other pages use the game install link. */
export default function SiteDownloadCta({ children, onClick, ariaLabel, className }: Props) {
  const pathname = usePathname();
  const href = pathname === '/' ? ROUTES.download : DOWNLOAD_URL;
  return (
    <CtaButton href={href} onClick={onClick} ariaLabel={ariaLabel} className={className}>
      {children}
    </CtaButton>
  );
}
