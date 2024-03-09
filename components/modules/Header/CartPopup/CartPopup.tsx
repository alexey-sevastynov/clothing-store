import { forwardRef } from 'react';

import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import { useLang } from '@/hooks/useLang';

import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { TiShoppingCart } from 'react-icons/ti';

import { IWrappedComponentProps } from '@/types/hocs';
import { withClickOutside } from '@/components/hocs/withClickOutside';
import Button from '@/components/elements/Button/Button';

const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const { lang, translations } = useLang();

    const handleShowPopup = () => setOpen(true);
    const handleHidePopup = () => setOpen(false);

    return (
      <div className='cart-popup' ref={ref}>
        <Link
          className='header__links_item-btn header__links_item-btn--cart'
          href='/cart'
          onMouseEnter={handleShowPopup}
        >
          <MdOutlineShoppingBag
            size={24}
            className='header__links_item-btn-icon'
          />
        </Link>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className='cart-popup__wrapper'
              onMouseLeave={handleHidePopup}
            >
              {/* ___________arrow background */}
              <span className='cart-popup__arrow' />

              {/* ___________icon CLOSE */}
              <button className={`cart-popup__close`} onClick={handleHidePopup}>
                <IoMdClose size={24} />
              </button>

              {/* ___________TITLE CART */}
              <h3 className='cart-popup__title'>
                {translations[lang].breadcrumbs.cart}
              </h3>

              {/* ___________LIST ITEMS */}
              <ul className='cart-popup__list'>
                {/* <li className='cart-popup__list-item'></li> */}
                <TiShoppingCart size={150} className='cart-popup__list-empty' />
              </ul>

              {/* ___________LIST ITEMS */}

              <footer className='cart-popup__footer'>
                <div className='cart-popup__footer-inner'>
                  <span>{translations[lang].common.order_price}:</span>
                  <span>0 {translations[lang].common.currency}</span>
                </div>
                <Button href={'/order'} width={300} disabled={true}>
                  {translations[lang].breadcrumbs.order}
                </Button>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

CartPopup.displayName = 'CartPopup';

export default withClickOutside(CartPopup);
