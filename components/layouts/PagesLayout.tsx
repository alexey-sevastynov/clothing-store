'use client';
import { useUnit } from 'effector-react';

import { $quickModal, closeQuickModal } from '@/context/modals';
import { removeOverflowHiddenFromBody } from '@/lib/utils/common';

import Layout from './Layout';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($quickModal);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickModal();
  };

  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>

        {/* The Modal quick view modal for a item-card */}
        <div
          className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`}
          onClick={() => handleCloseQuickViewModal()}
        />
      </body>
    </html>
  );
};

export default PagesLayout;
