import React from 'react';

import { ILinkImageProps } from '@/types/elements';
import Link from 'next/link';
import Image from 'next/image';
import useImagePreloader from '@/hooks/useImagePreloader';

const LinkImage: React.FC<ILinkImageProps> = ({ image, text, ...props }) => {
  const { handleLoadingImageComplete } = useImagePreloader();

  return (
    <Link {...(props as any)}>
      <Image
        src={image}
        alt={text}
        className='transition-opacity opacity-0 duration'
        onLoadingComplete={handleLoadingImageComplete}
      />
      <span>{text}</span>
    </Link>
  );
};

export default LinkImage;
