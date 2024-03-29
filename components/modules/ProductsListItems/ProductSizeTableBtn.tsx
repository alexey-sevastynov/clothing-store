'use client';
import { useUnit } from 'effector-react';
import { openSizeTable, $quickModal } from '@/context/modals';
import { addOverflowHiddenToBody } from '@/lib/utils/common';
import { ISelectedSizes } from '@/types/common';
import { setSizeTableSizes } from '@/context/sizeTable';
import { useLang } from '@/hooks/useLang';

const ProductSizeTableBtn = ({ sizes, type, className }: ISelectedSizes) => {
  const { lang, translations } = useLang();
  const showQuickViewModal = useUnit($quickModal);

  const handleShowSizeTable = () => {
    if (!showQuickViewModal) {
      addOverflowHiddenToBody();
    }

    setSizeTableSizes({ sizes, type });
    openSizeTable();
  };

  return (
    <button className={`btn-reset ${className}`} onClick={handleShowSizeTable}>
      {translations[lang].product.size_table}
    </button>
  );
};

export default ProductSizeTableBtn;
