import { useLang } from '@/hooks/useLang';
import { IProductSubtitleProps } from '@/types/elements';
import styles from '@/styles/elements/product-subtitle/index.module.scss';

const ProductSubtitle = ({
  subtitleClassName,
  subtitleRectClassName,
}: IProductSubtitleProps) => {
  const { lang, translations } = useLang();

  return (
    <div
      className={`${styles.product_subtitle__subtitle} ${subtitleClassName}`}
    >
      <div
        className={`${styles.product_subtitle__subtitle__rect} ${subtitleRectClassName}`}
      />
      <span>{translations[lang].main_page.hero_description}</span>
      <br />
      <span>{translations[lang].main_page.hero_description}</span>
    </div>
  );
};

export default ProductSubtitle;
