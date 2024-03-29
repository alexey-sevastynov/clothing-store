import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/quick-view-modal/index.module.scss';
import stylesForProduct from '@/styles/product-list-item/index.module.scss';

import { useCartAction } from '@/hooks/useCartActions';
import { useLang } from '@/hooks/useLang';

import { formatPrice, removeOverflowHiddenFromBody } from '@/lib/utils/common';
import { closeQuickModal } from '@/context/modals';
import ProductAvailable from '@/components/elements/ProductAvailable/ProductAvailable';
import ProductColor from '../ProductsListItems/ProductColor';
import ProductComposition from '../ProductsListItems/ProductComposition';
import ProductSizeTableBtn from '../ProductsListItems/ProductSizeTableBtn';
import ProductSizesItem from '../ProductsListItems/ProductSizeItem';
import ProductCounter from '../ProductsListItems/ProductCounter';
import AddToCartBtn from '../ProductsListItems/AddToCardBtn';
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn';

const QuickViewModal = () => {
  const { lang, translations } = useLang();
  const { product, selectedSize, setSelectedSize } = useCartAction();

  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickModal();
  };

  return (
    <div className={styles.modal}>
      <button className={styles.modal__close} onClick={handleCloseModal} />

      <div className={styles.modal__actions}>
        <ProductItemActionBtn
          text={translations[lang].product.add_to_favorites}
          iconClass={`actions__btn_favorite`}
          withTooltip={false}
        />
        <ProductItemActionBtn
          text={translations[lang].product.add_to_comparison}
          iconClass={`actions__btn_comparison`}
          withTooltip={false}
        />
      </div>

      <div className={styles.modal__left}>
        <Image
          src={product.images}
          alt={product.name}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.modal__right}>
        <h3 className={styles.modal__right__title}>{product.name}</h3>
        <div className={styles.modal__right__price}>
          {formatPrice(+product.price)} ₴
        </div>

        <div className={styles.modal__right__info}>
          <ProductAvailable
            vendorCode={product.vendorCode}
            inStock={+product.inStock}
          />

          <ProductColor color={product.characteristics.color} />
          {product.characteristics?.composition && (
            <ProductComposition
              composition={product.characteristics.composition}
            />
          )}

          {Object.keys(product.sizes).length ? (
            <div className={styles.modal__right__info__size}>
              <div className={styles.modal__right__info__size__inner}>
                <span className={stylesForProduct.product__size_title}>
                  {translations[lang].catalog.size}
                </span>
                <ProductSizeTableBtn
                  sizes={product.sizes}
                  type={product.type}
                  className={`sizes-table-btn ${styles.modal__right__info__sizes_btn}`}
                />
              </div>
              <ul className={`list-reset ${styles.modal__right__info__sizes}`}>
                {Object.entries(product.sizes).map(([key, value], i) => (
                  <ProductSizesItem
                    key={i}
                    currentSize={[key, value]}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    // currentCartItems={currentCartItems}
                  />
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}

          <div className={styles.modal__right__bottom}>
            <span className={stylesForProduct.product__size_title}>
              {translations[lang].product.count}
            </span>
            <div className={styles.modal__right__bottom__inner}>
              {!!selectedSize ? (
                <ProductCounter
                  className={`counter ${styles.modal__right__bottom__counter}`}
                  count={0}
                />
              ) : (
                <div
                  className={`counter ${styles.modal__right__bottom__counter}`}
                  style={{ justifyContent: 'center' }}
                >
                  <span>{translations[lang].product.total_in_cart} 0</span>
                </div>
              )}
              <AddToCartBtn
                className={styles.modal__right__bottom__add}
                text={translations[lang].product.to_cart}
              />
            </div>
          </div>
        </div>
        <div className={styles.modal__right__more}>
          <Link
            href={`/catalog/${product.category}/${product._id}`}
            className={styles.modal__right__more__link}
            onClick={handleCloseModal}
          >
            {translations[lang].product.more}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
