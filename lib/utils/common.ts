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
