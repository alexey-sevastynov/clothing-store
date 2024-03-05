'use client';

import React from 'react';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import { useStore } from 'effector-react';
import { $catalogMenuIsOpen, closeCatalogMenu } from '@/context/modals';

import { useLang } from '@/hooks/useLang';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';

import { removeOverflowHiddenFromBody } from '@/lib/utils/common';

import { BREAKPOINTS } from '@/constants/breakpoints';

import { IoMdClose } from 'react-icons/io';

import Header from './Header';
import CatalogMenuButton from './CatalogMenuButton';
import CatalogMenuList from './CatalogMenuList';
import Accordion from '../Accordion/Accordion';

const CatalogMenu = () => {
  const catalogMenuIsOpen = useStore($catalogMenuIsOpen);

  const isMedia768 = useMediaQuery(BREAKPOINTS.md);
  const isMedia480 = useMediaQuery(BREAKPOINTS.sm);

  const { itemVariants, sideVariants, popupZindex } = useMenuAnimation(
    2,
    catalogMenuIsOpen
  );

  const { lang, translations } = useLang();

  const [showClothesList, setShowClothesList] = React.useState<boolean>(false);
  const [showAccessoriesList, setShowAccessoriesList] =
    React.useState<boolean>(false);
  const [showSouvenirsList, setShowSouvenirsList] =
    React.useState<boolean>(false);
  const [showOfficeList, setShowOfficeList] = React.useState<boolean>(false);

  const handleShowClothesList = () => {
    setShowClothesList(true);
    setShowAccessoriesList(false);
    setShowSouvenirsList(false);
    setShowOfficeList(false);
  };

  const handleShowAccessoriesList = () => {
    setShowClothesList(false);
    setShowAccessoriesList(true);
    setShowSouvenirsList(false);
    setShowOfficeList(false);
  };

  const handleShowSouvenirsList = () => {
    setShowClothesList(false);
    setShowAccessoriesList(false);
    setShowSouvenirsList(true);
    setShowOfficeList(false);
  };

  const handleShowOfficeList = () => {
    setShowClothesList(false);
    setShowAccessoriesList(false);
    setShowSouvenirsList(false);
    setShowOfficeList(true);
  };

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeCatalogMenu();
    setShowClothesList(false);
    setShowAccessoriesList(false);
    setShowSouvenirsList(false);
    setShowOfficeList(false);
  };

  const data = [
    {
      name: translations[lang].main_menu.clothes,
      id: 1,
      items: [
        translations[lang].comparison['t-shirts'],
        translations[lang].comparison['long-sleeves'],
        translations[lang].comparison.hoodie,
        translations[lang].comparison.outerwear,
      ],
      handler: handleShowClothesList,
    },
    {
      name: translations[lang].main_menu.accessories,
      id: 2,
      items: [
        translations[lang].comparison.bags,
        translations[lang].comparison.headdress,
        translations[lang].comparison.umbrellas,
      ],
      handler: handleShowAccessoriesList,
    },
    {
      name: translations[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translations[lang].comparison['business-souvenirs'],
        translations[lang].comparison['promotional-souvenirs'],
      ],
      handler: handleShowSouvenirsList,
    },
    {
      name: translations[lang].main_menu.office,
      id: 4,
      items: [
        translations[lang].comparison.notebooks,
        translations[lang].comparison.pens,
      ],
      handler: handleShowOfficeList,
    },
  ];

  return (
    <div className='catalog-menu' style={{ zIndex: popupZindex }}>
      <AnimatePresence>
        {catalogMenuIsOpen && (
          <motion.aside
            className='catalog-menu__aside'
            initial={{ width: 0 }}
            animate={{
              width: 'calc(100% - 48px)', // 24px ("padding-left") + 24px ("padding-right") = 48px !!!
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <div className='catalog-menu__header'>
              <Header />
            </div>
            <motion.div
              className='catalog-menu__inner'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              {/* promo background image  */}
              <img
                className={`catalog-menu__bg`}
                src='/img/promo.png'
                alt='promo image'
                height={800}
              />

              <motion.button
                className={`catalog-menu__close`}
                variants={itemVariants}
                onClick={handleCloseMenu}
              >
                <IoMdClose size={24} />
              </motion.button>

              <motion.h2
                className={`catalog-menu__title`}
                variants={itemVariants}
              >
                {translations[lang].main_menu.catalog}
              </motion.h2>

              <ul className='catalog-menu__list'>
                {data.map(({ id, name, items, handler }) => {
                  const buttonProps = (isActive: boolean) => ({
                    handler: handler as VoidFunction,
                    name,
                    isActive,
                  });

                  const isCurrentList = (
                    showList: boolean,
                    currentId: number
                  ): boolean => showList && id === currentId;
                  return (
                    <motion.li
                      key={id}
                      variants={itemVariants}
                      className='catalog-menu__list_item'
                    >
                      {/*If the screen is smaller than 768px and larger than 480px, it will be visible the menu */}
                      {isMedia768 && !isMedia480 && (
                        <>
                          {id === 1 && (
                            <CatalogMenuButton
                              {...buttonProps(showClothesList)}
                            />
                          )}
                          {id === 2 && (
                            <CatalogMenuButton
                              {...buttonProps(showAccessoriesList)}
                            />
                          )}
                          {id === 3 && (
                            <CatalogMenuButton
                              {...buttonProps(showSouvenirsList)}
                            />
                          )}
                          {id === 4 && (
                            <CatalogMenuButton
                              {...buttonProps(showOfficeList)}
                            />
                          )}
                        </>
                      )}

                      {/*If the screen is smaller than 768px and larger than 480px, it will be visible under the menu */}
                      {isMedia768 && !isMedia480 && (
                        <AnimatePresence>
                          {isCurrentList(showClothesList, 1) && (
                            <CatalogMenuList items={items} />
                          )}
                          {isCurrentList(showAccessoriesList, 2) && (
                            <CatalogMenuList items={items} />
                          )}
                          {isCurrentList(showSouvenirsList, 3) && (
                            <CatalogMenuList items={items} />
                          )}
                          {isCurrentList(showOfficeList, 4) && (
                            <CatalogMenuList items={items} />
                          )}
                        </AnimatePresence>
                      )}

                      {/* If the screen is smaller than 480px, Accordion list menu is visible */}
                      {isMedia480 && (
                        <Accordion
                          title={name}
                          titleClass='menu__accordion_item-title'
                        >
                          <ul className='catalog-menu__accordion_list'>
                            {items.map((title, index) => (
                              <li
                                key={index}
                                className='catalog-menu__accordion_list-item'
                              >
                                <Link
                                  href='/catalog'
                                  className='catalog-menu__accordion_list-item-link'
                                >
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Accordion>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogMenu;
