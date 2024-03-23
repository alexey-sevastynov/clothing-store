import Link from 'next/link';
import Image from 'next/image';
import HeroSlideTooltip from './HeroSlideTooltip';
import { IHeroSlide } from '@/types/main-page';
import styles from '@/styles/main-page/index.module.scss';

const HeroSlide = ({ slide }: { slide: IHeroSlide }) => (
  <>
    <Link href='/catalog' className='hero-slide-plus' />
    <Image
      src={slide.image}
      alt={slide.title}
      width={120}
      className={styles.hero__slider_slide_img}
      loading='eager'
    />
    <HeroSlideTooltip title={slide.title} image={slide.image} />
  </>
);

export default HeroSlide;
