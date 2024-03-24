'use client';
import React, { useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

import styles from '@/styles/main-page/index.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useImagePreloader from '@/hooks/useImagePreloader';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';
import Link from 'next/link';

const MainSlider = ({
  images,
}: {
  images: {
    src: StaticImageData;
    id: number;
    title: string;
  }[];
}) => {
  const isMedia480 = useMediaQuery(BREAKPOINTS.sm);

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();
  const imgSpinnerClass = imgSpinner ? styles.img_loading : '';

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
  };

  useEffect(() => {
    const slider = document.querySelectorAll(`.${styles.categories__slider}`);

    slider.forEach((item) => {
      const list = item.querySelector('.slick-list') as HTMLElement;

      list.style.height = isMedia480 ? '290px' : '357px';
      list.style.marginRight = '-15px';
    });
  }, [isMedia480]);

  return (
    <Slider {...settings} className={styles.categories__slider}>
      {images.map((item) => (
        <Link
          key={item.id}
          style={{ width: isMedia480 ? 290 : 357 }}
          className={`${styles.categories__slide} ${styles.categories__img} ${imgSpinnerClass}`}
          href='/catalog'
        >
          <Image
            src={item.src}
            alt={item.title}
            width={357}
            height={357}
            onLoad={handleLoadingImageComplete}
          />
          <span>{item.title.replace(/\s/g, '\u00A0')}</span>
        </Link>
      ))}
    </Slider>
  );
};

export default MainSlider;
