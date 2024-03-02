import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import { useUnit } from 'effector-react';
import { $menuIsOpen, closeMenu } from '@/context/modals';

import { removeOverflowHiddenFromBody } from '@/lib/utils/common';
import { useLang } from '@/hooks/useLang';

import { IoMdClose } from 'react-icons/io';

import { setLang } from '@/context/lang';
import { AllowedLangs } from '@/constants/lang';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';

import Logo from '@/components/elements/Logo/Logo';
import Accordion from '../Accordion/Accordion';
import MenuLinkItem from './MenuLinkItem';

const Menu = () => {
  const { lang, translations } = useLang();
  const pathName = usePathname();

  const isMedia450 = useMediaQuery(BREAKPOINTS.sm);
  const isMedia800 = useMediaQuery(BREAKPOINTS.sm);

  const menuIsOpen = useUnit($menuIsOpen);

  const [showCatalogList, setShowCatalogList] = React.useState<boolean>(false);
  const [showBuyersList, setShowBuyersList] = React.useState<boolean>(false);
  const [showContactsList, setShowContactsList] =
    React.useState<boolean>(false);

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  const handleSwitchToRu = () => handleSwitchLang('ru');
  const handleSwitchToUa = () => handleSwitchLang('ua');
  const handleSwitchToEn = () => handleSwitchLang('en');

  const handleShowCatalogList = () => {
    setShowCatalogList(true);
    setShowBuyersList(false);
    setShowContactsList(false);
  };

  const handleShowBuyersList = () => {
    setShowCatalogList(false);
    setShowBuyersList(true);
    setShowContactsList(false);
  };

  const handleShowContactsList = () => {
    setShowCatalogList(false);
    setShowBuyersList(false);
    setShowContactsList(true);
  };

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

  const handleRedirectToCatalog = (path: string) => {
    if (pathName.includes('/catalog')) {
      window.history.pushState({ path }, '', path);
      window.location.reload();
    }

    handleCloseMenu();
  };

  const clothesLinks = [
    {
      id: 1,
      text: translations[lang].comparison['t-shirts'],
      href: '/catalog/clothes?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: translations[lang].comparison['long-sleeves'],
      href: '/catalog/clothes?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translations[lang].comparison['hoodie'],
      href: '/catalog/clothes?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: translations[lang].comparison['outerwear'],
      href: '/catalog/clothes?offset=0&type=outerwear',
    },
  ];

  const accessoriesLinks = [
    {
      id: 1,
      text: translations[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translations[lang].comparison.umbrellas,
      href: '/catalog/accessories?offset=0&type=umbrellas',
    },
  ];

  const souvenirsLinks = [
    {
      id: 1,
      text: translations[lang].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translations[lang].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ];

  const officeLinks = [
    {
      id: 1,
      text: translations[lang].comparison.notebooks,
      href: '/catalog/office?offset=0&type=notebooks',
    },
    {
      id: 2,
      text: translations[lang].comparison.pens,
      href: '/catalog/office?offset=0&type=pens',
    },
  ];

  return (
    <nav className={`menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container menu__container'>
        {/* promo background image  */}
        <img
          className={`menu__bg ${menuIsOpen ? 'open' : ''}`}
          src='/img/promo.png'
          alt='promo image'
          height={800}
        />
        <div className={`menu__logo ${menuIsOpen ? 'open' : ''}`}>
          <Logo />
        </div>

        <button
          className={`btn-reset menu__close ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        >
          <IoMdClose size={24} />
        </button>

        {/* the language panel */}
        <div className={`menu__lang ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`menu__lang_btn ${lang === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchToEn}
          >
            EN
          </button>
          <button
            className={`menu__lang_btn ${lang === 'ua' ? 'lang-active' : ''}`}
            onClick={handleSwitchToUa}
          >
            UA
          </button>
          <button
            className={`menu__lang_btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={handleSwitchToRu}
          >
            RU
          </button>
        </div>

        {/* ______CATEGORIES AVAILEBLE LIST */}
        <ul className={`list-reset menu__list ${menuIsOpen ? 'open' : ''}`}>
          {/* ______CATALOG */}
          {!isMedia800 && (
            <li className='menu__list_item'>
              <button
                className='btn-reset menu__list_item-btn'
                onMouseEnter={handleShowCatalogList}
              >
                {translations[lang].main_menu.catalog}
              </button>
              <AnimatePresence>
                {showCatalogList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset menu__accordion'
                  >
                    <li className='menu__accordion_item'>
                      <Accordion
                        title={translations[lang].main_menu.clothes}
                        titleClass='btn-reset menu__accordion_item-title'
                      >
                        <ul className='list-reset menu__accordion_item-list'>
                          {clothesLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>

                    <li className='menu__accordion_item'>
                      <Accordion
                        title={translations[lang].main_menu.accessories}
                        titleClass='btn-reset menu__accordion_item-title'
                      >
                        <ul className='list-reset menu__accordion_item-list'>
                          {accessoriesLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>

                    <li className='menu__accordion_item'>
                      <Accordion
                        title={translations[lang].main_menu.souvenirs}
                        titleClass='btn-reset menu__accordion_item-title'
                      >
                        <ul className='list-reset menu__accordion_item-list'>
                          {souvenirsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>

                    <li className='menu__accordion_item'>
                      <Accordion
                        title={translations[lang].main_menu.office}
                        titleClass='btn-reset menu__accordion_item-title'
                      >
                        <ul className='list-reset menu__accordion_item-list'>
                          {officeLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accordion>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          )}

          {/* ______FOR BUYERS */}
          <li className='menu__list_item'>
            <button
              className='btn-reset menu__list_item-btn'
              onMouseEnter={handleShowBuyersList}
            >
              {translations[lang].main_menu.buyers}
            </button>
            <AnimatePresence>
              {showBuyersList && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='list-reset menu__accordion'
                >
                  <li className='menu__accordion_item '>
                    <Link
                      href={'/about'}
                      className='menu__accordion_item-link menu__accordion_item-title'
                    >
                      {translations[lang].main_menu.about}
                    </Link>
                  </li>
                  <li className='menu__accordion_item'>
                    <Link href={'/blog'} className='menu__accordion_item-link'>
                      {translations[lang].main_menu.blog}
                    </Link>
                  </li>
                  <li className='menu__accordion_item'>
                    <Link
                      href={'/shipping-and-payment'}
                      className='menu__accordion_item-link'
                    >
                      {translations[lang].main_menu.shipping}
                    </Link>
                  </li>
                  <li className='menu__accordion_item'>
                    <Link
                      href={'/purchase-returns'}
                      className='menu__accordion_item-link'
                    >
                      {translations[lang].main_menu.returns}
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* ______CONTACTS */}
          <li className='menu__list_item'>
            <button
              className='btn-reset menu__list_item-btn'
              onMouseEnter={handleShowContactsList}
            >
              {translations[lang].main_menu.contacts}
            </button>
            <AnimatePresence>
              {showContactsList && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='list-reset menu__accordion'
                >
                  <li className='menu__accordion_item '>
                    <a
                      href={'tel:+380974211929'}
                      className='menu__accordion_item-link menu__accordion_item-title'
                    >
                      +38 (097) 42-119-29
                    </a>
                  </li>
                  <li className='menu__accordion_item'>
                    <a
                      href={'mailto:alexseva94@gmail.com'}
                      className='menu__accordion_item-link'
                    >
                      {translations[lang].main_menu.mail}
                    </a>
                  </li>
                  <li className='menu__accordion_item'>
                    <Link
                      href={'https://t.me/alexseva_94'}
                      target='_blank'
                      className='menu__accordion_item-link'
                    >
                      {translations[lang].main_menu.telegram}
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
