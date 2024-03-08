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
import BuyersListItems from './BuyersListItems';
import ContactsListItems from './ContactsListItems';

const Menu = () => {
  const { lang, translations } = useLang();
  const pathName = usePathname();

  // const isMedia480 = useMediaQuery(BREAKPOINTS.sm);
  const isMedia768 = useMediaQuery(BREAKPOINTS.md);

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
        {/* logo */}
        <div className={`menu__logo ${menuIsOpen ? 'open' : ''}`}>
          <Logo size={110} />
        </div>

        {/* promo background image  */}
        <img
          className={`menu__bg ${menuIsOpen ? 'open' : ''}`}
          src='/img/promo.png'
          alt='promo image'
          height={800}
        />

        {/* close the menu  */}
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
          {!isMedia768 && (
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
            {/* If the screen is larger than 768px, it is hidden the "For buyers" button */}
            {!isMedia768 && (
              <button
                className='btn-reset menu__list_item-btn'
                onMouseEnter={handleShowBuyersList}
              >
                {translations[lang].main_menu.buyers}
              </button>
            )}

            {/* If the screen is smaller than 768px, it is hidden under the "For buyers" list */}
            {!isMedia768 && (
              <AnimatePresence>
                {showBuyersList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset menu__accordion'
                  >
                    <BuyersListItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}

            {/* If the screen is larger than 768px, Accordion is visible */}
            {isMedia768 && (
              <AnimatePresence>
                <Accordion
                  title={translations[lang].main_menu.buyers}
                  titleClass='btn-reset menu__list_item-btn'
                >
                  <ul className='list-reset menu__accordion_item-list'>
                    <BuyersListItems />
                  </ul>
                </Accordion>
              </AnimatePresence>
            )}
          </li>

          {/* ______CONTACTS */}
          <li className='menu__list_item'>
            {/* If the screen is larger than 768px, it is hidden the "Contancts" button */}
            {!isMedia768 && (
              <button
                className='btn-reset menu__list_item-btn'
                onMouseEnter={handleShowContactsList}
              >
                {translations[lang].main_menu.contacts}
              </button>
            )}

            {/* If the screen is smaller than 768px, it is hidden under the "Contancts" list */}
            {!isMedia768 && (
              <AnimatePresence>
                {showContactsList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset menu__accordion'
                  >
                    <ContactsListItems />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}

            {/* If the screen is larger than 768px, Accordion is visible */}
            {isMedia768 && (
              <AnimatePresence>
                <Accordion
                  title={translations[lang].main_menu.contacts}
                  titleClass='btn-reset menu__list_item-btn'
                >
                  <ul className='list-reset menu__accordion_item-list'>
                    <ContactsListItems />
                  </ul>
                </Accordion>
              </AnimatePresence>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
