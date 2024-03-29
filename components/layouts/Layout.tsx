'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { BREAKPOINTS } from '@/constants/breakpoints';

import { useUnit } from 'effector-react';
import { $quickModal, $searchModal, $sizeTable } from '@/context/modals';

import Header from '../modules/Header/Header';
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar';
import Search from '../modules/Header/Search';
import Footer from '../modules/Footer/Footer';
import QuickViewModal from '../modules/QuickViewModal/QuickViewModal';
import SizeTable from '../modules/SizeTable/SizeTable';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($quickModal);
  const isMedia768 = useMediaQuery(BREAKPOINTS.md);

  const isOpenSearchModal = useUnit($searchModal);
  const isOpenSizeTable = useUnit($sizeTable);
  return (
    <>
      <Header />
      {children}

      {/* If the window width is larger than 768 px,  the mobile navigation bar is visible  */}
      {isMedia768 && <MobileNavbar />}

      {!isMedia768 && (
        <AnimatePresence>
          {showQuickViewModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuickViewModal />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {isOpenSizeTable && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SizeTable />
        </motion.div>
      )}

      {/* When click on icon "Search", than opened Search Modal Window  */}
      {isOpenSearchModal && (
        <motion.div
          initial={{ opacity: 0, zIndex: 3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Search />
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default Layout;
