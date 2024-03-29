import type { Metadata } from 'next';
import './globalStyles/normalize.css';
import './globalStyles/globals.css';

import '@/app/globalStyles/header.css';
import '@/app/globalStyles/menu.css';
import '@/app/globalStyles/mobile-navbar.css';
import '@/app/globalStyles/catalog-menu.css';
import '@/app/globalStyles/search.css';
import '@/app/globalStyles/cart-popup.css';
import '@/app/globalStyles/footer.css';
import '@/app/globalStyles/auth-popup.css';
import '@/app/globalStyles/slick-theme.css';
import '@/app/globalStyles/slick.css';

import PagesLayout from '@/components/layouts/PagesLayout';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PagesLayout>{children}</PagesLayout>;
}
