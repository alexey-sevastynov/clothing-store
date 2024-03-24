import { StaticImageData } from 'next/image';
import { LinkHTMLAttributes } from 'react';

export interface ILogoProps {
  size?: number;
}

export interface ILinkImageProps extends LinkHTMLAttributes<HTMLLinkElement> {
  image: StaticImageData;
  text: string;
}
