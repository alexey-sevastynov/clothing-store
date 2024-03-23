import Image from 'next/image';
import { IHeroSlideTooltip } from '@/types/main-page';
import styles from '@/styles/main-page/index.module.scss';

const HeroSlideTooltip = ({ title, image }: IHeroSlideTooltip) => (
  <div className={`${styles.hero__slider_slide_popup} slide-popup`}>
    <span className={styles.hero__slider_slide_popup_arrow} />
    <Image
      className={styles.hero__slider_slide_popup_img}
      src={image}
      alt={title}
      width={24}
    />
    <p className={styles.hero__slider_slide_popup_inner}>
      <b className={styles.hero__slider_slide_popup_title}>{title}</b>
      <span className={styles.hero__slider_slide_popup_price}>700 ₴</span>
    </p>
  </div>
);

export default HeroSlideTooltip;
