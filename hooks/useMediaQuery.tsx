import React, { useEffect } from 'react';

import { getWindowWidth } from '@/lib/utils/common';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState<{ windowWidth: number }>(
    getWindowWidth()
  );

  const handleResize = () => setWindowWidth(getWindowWidth());

  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);

    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  return { windowWidth, handleResize };
};

export const useMediaQuery = (maxWidth: number) => {
  const {
    windowWidth: { windowWidth },
    handleResize,
  } = useWindowWidth();

  const [isMedia, setIsMedia] = React.useState<boolean>(false);

  useEffect(() => {
    if (windowWidth <= maxWidth) {
      setIsMedia(true);
    } else {
      setIsMedia(false);
    }
  }, [handleResize, maxWidth, windowWidth]);

  return isMedia;
};

//______template for using to component

// const isMedia320 = useMediaQuery(BREAKPOINTS.xs);
// const isMedia480 = useMediaQuery(BREAKPOINTS.sm);
// const isMedia768 = useMediaQuery(BREAKPOINTS.md);
// const isMedia1024 = useMediaQuery(BREAKPOINTS.lg);
// const isMedia1200 = useMediaQuery(BREAKPOINTS.xl);
