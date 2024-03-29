import { useUnit } from 'effector-react';
import { $quickModal, $sizeTable } from '@/context/modals';
import { closeAuthPopupWhenSomeModalOpened } from '@/lib/utils/common';

const AuthPopupClose = () => {
  const showQuickViewModal = useUnit($quickModal);
  const showSizeTable = useUnit($sizeTable);

  const closePopup = () =>
    closeAuthPopupWhenSomeModalOpened(showQuickViewModal, showSizeTable);

  return (
    <button className='btn-reset auth-popup__close' onClick={closePopup} />
  );
};

export default AuthPopupClose;
