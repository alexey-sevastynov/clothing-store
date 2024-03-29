'use client';
import { useUnit } from 'effector-react';

import { $quickModal, closeQuickModal, $sizeTable } from '@/context/modals';
import {
  closeSizeTableByCheck,
  handleCloseAuthPopup,
  removeOverflowHiddenFromBody,
} from '@/lib/utils/common';

import { $openAuthPopup } from '@/context/auth';

import Layout from './Layout';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($quickModal);
  const showSizeTable = useUnit($sizeTable);
  const openAuthPopup = useUnit($openAuthPopup);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickModal();
  };

  const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal);

  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>

        {/* The Modal quick view modal for a item-card */}
        <div
          className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`}
          onClick={() => handleCloseQuickViewModal()}
        />

        {/* The Modal size table modal for show size clothes */}
        <div
          className={`size-table-overlay ${
            showSizeTable ? 'overlay-active' : ''
          }`}
          onClick={handleCloseSizeTable}
        />

        {/* The Modal size table modal for show size clothes */}
        <div
          className={`auth-overlay ${openAuthPopup ? 'overlay-active' : ''}`}
          onClick={handleCloseAuthPopup}
        />
      </body>
    </html>
  );
};

export default PagesLayout;
