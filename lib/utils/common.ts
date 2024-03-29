import { closeAuthPopup, openAuthPopup } from '@/context/auth';
import { closeSearchModal, closeSizeTable } from '@/context/modals';
import { ICartItem } from '@/types/cart';

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.classList.remove('overflow-hidden');
};

export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.classList.add('overflow-hidden');

  paddingRight && (body.style.paddingRight = paddingRight);
};

export const getWindowWidth = () => {
  let windowWidth = 0;

  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }

  return { windowWidth };
};

export const handleCloseSearchModal = () => {
  closeSearchModal();
  removeOverflowHiddenFromBody();
};

export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const formatPrice = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const idGenerator = () => {
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
};

export const getCartItemCountBySize = (
  cartItems: ICartItem[],
  currentSize: string
) =>
  cartItems.find((item) => item.size === currentSize.toLocaleLowerCase())
    ?.count || 0;

export const closeSizeTableByCheck = (isOpenQuickViewModal: boolean) => {
  if (!isOpenQuickViewModal) {
    removeOverflowHiddenFromBody();
  }

  closeSizeTable();
};

export const handleOpenAuthPopup = () => {
  addOverflowHiddenToBody();
  openAuthPopup();
};

export const handleCloseAuthPopup = () => {
  removeOverflowHiddenFromBody();
  closeAuthPopup();
};

export const closeAuthPopupWhenSomeModalOpened = (
  showQuickViewModal: boolean,
  showSizeTable: boolean
) => {
  if (showQuickViewModal || showSizeTable) {
    closeAuthPopup();
    return;
  }

  handleCloseAuthPopup();
};
