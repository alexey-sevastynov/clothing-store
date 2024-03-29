import { StaticImageData } from 'next/image';
import { LinkHTMLAttributes } from 'react';
import { CustomArrowProps } from 'react-slick';

export interface ILogoProps {
  size?: number;
}

export interface ILinkImageProps extends LinkHTMLAttributes<HTMLLinkElement> {
  image: StaticImageData;
  text: string;
}

export interface IProductSubtitleProps {
  subtitleClassName?: string;
  subtitleRectClassName?: string;
}

export interface IProductItemActionBtnProps {
  text: string;
  iconClass: string;
  spinner?: boolean;
  callback?: VoidFunction;
  withTooltip?: boolean;
  marginBottom?: number;
}

export interface IProductAvailableProps {
  vendorCode: string;
  inStock: number;
}

export interface IQuickViewModalSliderArrowProps extends CustomArrowProps {
  directionClassName: string;
}
