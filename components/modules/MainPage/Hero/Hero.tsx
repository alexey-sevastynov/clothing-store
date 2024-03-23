'use client';

import styles from '@/styles/main-page/index.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { useLang } from '@/hooks/useLang';

import tShirtBlue from '@/public/img/t-shirt-blue.png';
import tShirtYellow from '@/public/img/t-shirt-yellow.png';
import tShirtWhite from '@/public/img/t-shirt-white.png';

import Ad from '@/components/elements/Ad/Ad';
import HeroSlide from './HeroSlide';

const Hero = () => {
  const { lang, translations } = useLang();

  const slides = [
    {
      id: 1,
      title: `${translations[lang].main_page.tShirt} «GarnaRich» ${translations[lang].main_page.blue}`,
      image: tShirtBlue,
    },
    {
      id: 2,
      title: `${translations[lang].main_page.tShirt} «GarnaRich» ${translations[lang].main_page.yellow}`,
      image: tShirtYellow,
    },
    {
      id: 3,
      title: `${translations[lang].main_page.tShirt} «GarnaRich» ${translations[lang].main_page.white}`,
      image: tShirtWhite,
    },
  ];

  const handleSlideClick = (e: SwiperType) => e.slideTo(e.clickedIndex);

  return (
    <section className={styles.hero}>
      <h1 className='visually-hidden'>
        {translations[lang].main_page.hero_hidden_title}
      </h1>

      <div className={`container ${styles.hero__container}`}>
        {/* _____________ad */}
        <Ad className={styles.hero__ad} />

        <Swiper
          className={styles.hero__slider}
          effect='coverflow'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5.5,
          }}
          slidesPerView='auto'
          initialSlide={1}
          autoplay
          loop
          onClick={handleSlideClick}
          modules={[EffectCoverflow]}
          grabCursor
          centeredSlides
        >
          {slides.map((slide) => (
            <SwiperSlide className={styles.hero__slider_slide} key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* _____________title */}
        <h2 className={styles.hero__title}>
          <span className={styles.hero__title__text}>
            {translations[lang].main_page.hero_title}
            <span className={`${styles.hero__title__text__subtitle}`}>
              [ {translations[lang].main_page.hero_subtitle} ]
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
