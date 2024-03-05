'use client';
import React from 'react';

export const useMenuAnimation = (zIndex: number, popupIsOpen: boolean) => {
  const [popupZindex, setPopupZindex] = React.useState<string | number>(0);

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  React.useEffect(() => {
    if (popupIsOpen) {
      setPopupZindex(zIndex);
      return;
    }

    const timerId = setTimeout(() => setPopupZindex('-1'), 1000);

    return () => clearInterval(timerId);
  }, [popupIsOpen, zIndex]);

  return { popupZindex, itemVariants, sideVariants };
};
