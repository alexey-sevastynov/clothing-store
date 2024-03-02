'use client';
import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { BREAKPOINTS } from '@/constants/breakpoints';

import Header from '../modules/Header/Header';
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia768 = useMediaQuery(BREAKPOINTS.md);
  return (
    <>
      <Header />
      {children}

      {/* if the window width is larger than 768 px,  the mobile navigation bar is visible  */}
      {isMedia768 && <MobileNavbar />}
    </>
  );
};

export default Layout;
