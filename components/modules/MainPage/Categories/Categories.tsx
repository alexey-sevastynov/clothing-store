'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/main-page/index.module.scss';

import { useLang } from '@/hooks/useLang';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';

import useImagePreloader from '@/hooks/useImagePreloader';

import img1 from '@/public/img/category-img-1.jpeg';
import img2 from '@/public/img/category-img-2.jpg';
import img3 from '@/public/img/category-img-3.jpg';

import AllLink from '@/components/elements/AllLink/AllLink';
import MainSlider from '../MainSlider';
import LinkImage from '@/components/elements/LinkImage/LinkImage';

const Categories = () => {
  const { lang, translations } = useLang();
  const isMedia480 = useMediaQuery(BREAKPOINTS.sm);

  const { imgSpinner } = useImagePreloader();
  const imgSpinnerClass = imgSpinner ? styles.img_loading : '';

  const images = [
    { src: img1, id: 1, title: translations[lang].main_page.category_cloth },
    {
      src: img2,
      id: 2,
      title: translations[lang].main_page.category_accessories,
    },
    {
      src: img3,
      id: 3,
      title: translations[lang].main_page.category_souvenirs,
    },
    { src: img1, id: 4, title: translations[lang].main_page.category_office },
  ];

  return (
    <section className={styles.categories}>
      <div className={`container ${styles.categories__container}`}>
        <h2 className={`site-title ${styles.categories__title}`}>
          {translations[lang].main_page.category_title}
        </h2>

        <div className={styles.categories__inner}>
          <AllLink />
          {!isMedia480 && (
            <>
              <LinkImage
                href='/catalog/cloth'
                className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
                image={img1}
                text={translations[lang].main_page.category_cloth}
              />

              <div className={styles.categories__left}>
                <div className={styles.categories__left_top}>
                  <LinkImage
                    href='/catalog/accessories'
                    className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
                    image={img1}
                    text={translations[lang].main_page.category_accessories}
                  />
                  <LinkImage
                    href='/catalog/souvenirs'
                    className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
                    image={img1}
                    text={translations[lang].main_page.category_souvenirs}
                  />
                </div>
                <LinkImage
                  href='/catalog/office'
                  className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  image={img1}
                  text={translations[lang].main_page.category_office}
                />
              </div>
            </>
          )}
          {isMedia480 && <MainSlider images={images} />}
        </div>
      </div>
    </section>
  );
};

export default Categories;
