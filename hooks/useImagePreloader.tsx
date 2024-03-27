import { useState } from 'react';

const useImagePreloader = () => {
  const [imgSpinner, setImgSpinner] = useState(true);

  const handleLoadingImageComplete: React.ReactEventHandler<
    HTMLImageElement
  > = (event) => {
    const img = event.target as HTMLImageElement;
    if (img && img.classList && img.classList.remove) {
      img.classList.remove('opacity-0');
      setImgSpinner(false);
    }
  };

  return { handleLoadingImageComplete, imgSpinner };
};

export default useImagePreloader;

//______template for using to component
// const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();
