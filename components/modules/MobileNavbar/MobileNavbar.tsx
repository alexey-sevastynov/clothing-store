'use client';
import Link from 'next/link';

import { addOverflowHiddenToBody } from '@/lib/utils/common';

import { useLang } from '@/hooks/useLang';

import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context/modals';

import { IoHomeOutline } from 'react-icons/io5';
import { FaListUl } from 'react-icons/fa';
import { MdFavoriteBorder, MdOutlineShoppingBag } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';

import CatalogMenu from '../Header/CatalogMenu';

const MobileNavbar = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
    closeCatalogMenu();
  };

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody('0px');
    openCatalogMenu();
    closeMenu();
  };

  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <button className='mobile-navbar__btn'>
          <Link href={'/'} className='mobile-navbar__link'>
            <IoHomeOutline size={24} />
            {translations[lang].breadcrumbs.main}
          </Link>
        </button>

        <button className='mobile-navbar__btn' onClick={handleOpenCatalogMenu}>
          <FaListUl size={24} />
          {translations[lang].breadcrumbs.catalog}
        </button>

        <button className='mobile-navbar__btn'>
          <Link href={'/favorites'} className='mobile-navbar__link'>
            <MdFavoriteBorder size={24} />
            {translations[lang].breadcrumbs.favorites}
          </Link>
        </button>

        <button className='mobile-navbar__btn'>
          <Link href={'/cart'} className='mobile-navbar__link'>
            <MdOutlineShoppingBag size={24} />
            {translations[lang].breadcrumbs.cart}
          </Link>
        </button>

        <button className='mobile-navbar__btn' onClick={handleOpenMenu}>
          <MdMoreHoriz size={24} />
          {translations[lang].common.more}
        </button>
      </div>
    </>
  );
};

export default MobileNavbar;
