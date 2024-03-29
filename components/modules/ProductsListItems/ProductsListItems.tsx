import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/product-list-item/index.module.scss';
import '@/styles/elements/ad.css';

import { useLang } from '@/hooks/useLang';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';

import { IProductsListItemProps } from '@/types/modules';

import { addOverflowHiddenToBody, formatPrice } from '@/lib/utils/common';

import { openQuickModal } from '@/context/modals';
import { setCurrentProduct } from '@/context/goods';

import ProductSubtitle from '@/components/elements/ProductSubtitle/ProductSubtitle';
import ProductLabel from './ProductLabel';
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn';
import ProductAvailable from '@/components/elements/ProductAvailable/ProductAvailable';

// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { showQuickViewModal } from '@/context/modals';
// import { setCurrentProduct } from '@/context/goods';
// import { productsWithoutSizes } from '@/constants/product';
// import { useCartAction } from '@/hooks/useCartAction';
// import { addProductToCartBySizeTable } from '@/lib/utils/cart';
// import { setIsAddToFavorites } from '@/context/favorites';
// import { useFavoritesAction } from '@/hooks/useFavoritesAction';

// import { useComparisonAction } from '@/hooks/useComparisonAction';

const ProductsListItem = ({ item, title }: IProductsListItemProps) => {
  const { lang, translations } = useLang();

  const isMedia768 = useMediaQuery(BREAKPOINTS.md);

  const isTitleForNew = title === translations[lang].main_page.new_title;

  // const { addToCartSpinner, setAddToCartSpinner, currentCartByAuth } =
  //   useCartAction();

  // const isProductInCart = isItemInList(currentCartByAuth, item._id);
  // const {
  //   handleAddProductToFavorites,
  //   addToFavoritesSpinner,
  //   isProductInFavorites,
  // } = useFavoritesAction(item);
  // const {
  //   handleAddToComparison,
  //   isProductInComparison,
  //   addToComparisonSpinner,
  // } = useComparisonAction(item);

  const handleShowQuickViewModal = () => {
    addOverflowHiddenToBody();
    openQuickModal();
    setCurrentProduct(item);
  };

  // const addToCart = () => {
  //   setIsAddToFavorites(false);
  //   addProductToCartBySizeTable(item, setAddToCartSpinner, 1);
  // };

  return (
    <>
      {item.characteristics.collection === 'line' &&
      item.type === 't-shirts' ? (
        <li className={styles.list__item_ad}>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item_ad__inner}
          >
            <span className={`ad ${styles.list__item_ad__ad}`}>
              {translations[lang].common.ad}
            </span>
            <ProductSubtitle
              subtitleClassName={styles.list__item_ad__subtitle}
              subtitleRectClassName={styles.list__item_ad__subtitle__rect}
            />
            <div className={styles.list__item_ad__img}>
              <Image
                src={item.images}
                alt={item.name}
                fill
                objectFit='contain'
              />
            </div>
            <p className={styles.list__item_ad__title}>
              <span>
                {translations[lang].main_page.tShirt} «Line» {item.name}
              </span>
              <span>{formatPrice(+item.price)} ₴</span>
            </p>
          </Link>
        </li>
      ) : (
        <li className={styles.list__item}>
          {title ? (
            <span
              className={`${styles.list__item__label} ${
                isTitleForNew
                  ? styles.list__item__new
                  : styles.list__item__bestseller
              }`}
            >
              {isTitleForNew
                ? translations[lang].main_page.is_new
                : translations[lang].main_page.is_bestseller}
            </span>
          ) : !item.isNew && !item.isBestseller ? (
            ''
          ) : (
            <ProductLabel isBestseller={item.isBestseller} isNew={item.isNew} />
          )}
          <div className={styles.list__item__actions}>
            <ProductItemActionBtn
              // spinner={addToFavoritesSpinner}
              text={translations[lang].product.add_to_favorites}
              // iconClass={`${
              //   addToFavoritesSpinner
              //     ? 'actions__btn_spinner'
              //     : isProductInFavorites
              //       ? 'actions__btn_favorite_checked'
              //       : 'actions__btn_favorite'
              // }`}
              iconClass={`actions__btn_favorite`}
              // callback={handleAddProductToFavorites}
            />
            <ProductItemActionBtn
              // spinner={addToComparisonSpinner}
              text={translations[lang].product.add_to_comparison}
              // iconClass={`${
              //   addToComparisonSpinner
              //     ? 'actions__btn_spinner'
              //     : isProductInComparison
              //       ? 'actions__btn_comparison_checked'
              //       : 'actions__btn_comparison'
              // }`}
              iconClass={`actions__btn_comparison`}
              // callback={handleAddToComparison}
            />
            {!isMedia768 && (
              <ProductItemActionBtn
                text={translations[lang].product.quick_view}
                iconClass='actions__btn_quick_view'
                callback={handleShowQuickViewModal}
              />
            )}
          </div>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item__img}
          >
            <Image src={item.images} alt={item.name} fill objectFit='contain' />
          </Link>
          <div className={styles.list__item__inner}>
            <h3 className={styles.list__item__title}>
              <Link href={`/catalog/${item.category}/${item._id}`}>
                {item.name}
              </Link>
            </h3>
            <ProductAvailable
              vendorCode={item.vendorCode}
              inStock={+item.inStock}
            />
            <span className={styles.list__item__price}>
              {formatPrice(+item.price)} ₴
            </span>
          </div>
          <button className={`btn-reset ${styles.list__item__cart}`}>
            {translations[lang].product.to_cart}
          </button>
          {/* {productsWithoutSizes.includes(item.type) ? (
            <button
              onClick={addToCart}
              className={`btn-reset ${styles.list__item__cart} ${
                isProductInCart ? styles.list__item__cart_added : ''
              }`}
              disabled={addToCartSpinner}
              style={addToCartSpinner ? { minWidth: 125, height: 48 } : {}}
            >
              {addToCartSpinner ? (
                <FontAwesomeIcon icon={faSpinner} spin color='#fff' />
              ) : isProductInCart ? (
                translations[lang].product.in_cart
              ) : (
                translations[lang].product.to_cart
              )}
            </button>
          ) : (
            <button
              className={`btn-reset ${styles.list__item__cart}`}
              onClick={addToCart}
            >
              {translations[lang].product.to_cart}
            </button>
          )} */}
        </li>
      )}
    </>
  );
};

export default ProductsListItem;
