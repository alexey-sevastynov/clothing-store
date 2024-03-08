import { closeSearchModal } from '@/context/modals';

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
