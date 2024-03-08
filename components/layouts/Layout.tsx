'use client';
import React from 'react';

import { motion } from 'framer-motion';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { BREAKPOINTS } from '@/constants/breakpoints';

import { useUnit } from 'effector-react';
import { $searchModal } from '@/context/modals';

import Header from '../modules/Header/Header';
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar';
import Search from '../modules/Header/Search';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia768 = useMediaQuery(BREAKPOINTS.md);

  const searchModal = useUnit($searchModal);
  return (
    <>
      <Header />
      {children}

      {/* If the window width is larger than 768 px,  the mobile navigation bar is visible  */}
      {isMedia768 && <MobileNavbar />}

      {/* When click on icon "Search", than opened Search Modal Window  */}
      {searchModal && (
        <motion.div
          initial={{ opacity: 0, zIndex: 3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Search />
        </motion.div>
      )}
    </>
  );
};

export default Layout;
