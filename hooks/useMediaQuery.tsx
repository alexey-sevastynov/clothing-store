import React, { useEffect } from 'react';

import { getWindowWidth } from '@/lib/utils/common';

const useWindowWidth = () => {
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
