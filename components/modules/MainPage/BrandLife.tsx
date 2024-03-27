import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/main-page/index.module.scss';

import { useLang } from '@/hooks/useLang';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';

import useImagePreloader from '@/hooks/useImagePreloader';

import img from '@/public/img/brands-life.png';

import MainSlider from './MainSlider';

import AllLink from '@/components/elements/AllLink/AllLink';

const BrandLife = () => {
  const isMedia480 = useMediaQuery(BREAKPOINTS.sm); // Argument of type 'number' is not assignable to parameter of type '320 | 480 | 768 | 1024 | 1200'

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  const { lang, translations } = useLang();

  const imgSpinnerClass = imgSpinner ? styles.img_loading : '';

  const textWithNonBreakingSpace = (text: string) =>
    text.replace(/\s/g, '\u00A0');

  const images = [
    { src: img, id: 1, title: translations[lang].main_page.brand_nature },
    { src: img, id: 1, title: translations[lang].main_page.brand_look },
    { src: img, id: 1, title: translations[lang].main_page.brand_idea },
  ];

  return (
    <section className={styles.brands}>
      <div className={`container ${styles.brands__container}`}>
        <h2 className={`site-title ${styles.brands__title}`}>
          {translations[lang].main_page.brand_title}
        </h2>
        <div className={styles.brands__inner}>
          <AllLink />
        </div>
        {!isMedia480 && (
          <ul className={`list-reset ${styles.brands__list}`}>
            <li className={styles.brands__list__item}>
              <Link
                href='/'
                className={`${styles.brands__list__item__link} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img}
                  alt={translations[lang].main_page.brand_nature}
                  className='transition-opacity opacity-0 duration'
                  onLoad={handleLoadingImageComplete}
                />
                <span>
                  {textWithNonBreakingSpace(
                    translations[lang].main_page.brand_nature
                  )}
                </span>
              </Link>
            </li>
            <li className={styles.brands__list__item}>
              <Link
                href='/'
                className={`${styles.brands__list__item__link} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img}
                  alt={translations[lang].main_page.brand_look}
                  className='transition-opacity opacity-0 duration'
                  onLoad={handleLoadingImageComplete}
                />
                <span>
                  {textWithNonBreakingSpace(
                    translations[lang].main_page.brand_look
                  )}
                </span>
              </Link>
            </li>
            <li className={styles.brands__list__item}>
              <Link
                href='/'
                className={`${styles.brands__list__item__link} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img}
                  alt={translations[lang].main_page.brand_idea}
                  className='transition-opacity opacity-0 duration'
                  onLoad={handleLoadingImageComplete}
                />
                <span>
                  {textWithNonBreakingSpace(
                    translations[lang].main_page.brand_idea
                  )}
                </span>
              </Link>
            </li>
          </ul>
        )}
        {isMedia480 && <MainSlider images={images} />}
      </div>
    </section>
  );
};

export default BrandLife;
