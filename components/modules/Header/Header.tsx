'use client';

import React from 'react';

import Link from 'next/link';

import { FiAlignJustify } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import {
  MdFavoriteBorder,
  MdOutlinePlaylistAdd,
  MdOutlineShoppingBag,
} from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';

import { useLang } from '@/hooks/useLang';

import {
  addOverflowHiddenToBody,
  handleCloseSearchModal,
} from '@/lib/utils/common';

import { $searchModal, openMenu, openSearchModal } from '@/context/modals';
import { useUnit } from 'effector-react';

import Logo from '@/components/elements/Logo/Logo';
import Menu from './Menu';
import CartPopup from './CartPopup/CartPopup';

const Header = () => {
  const { lang, translations } = useLang();

  const searchModal = useUnit($searchModal);

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };

  const handleSearchModal = () => {
    openSearchModal();
    addOverflowHiddenToBody();
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        {/* ____________________???? */}
        <div
          className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
          onClick={handleCloseSearchModal}
        />

        {/* ____________________Burger button */}
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          <FiAlignJustify />
          {translations[lang].header.menu_btn}
        </button>
        <Menu />

        {/* ____________________LOGO ICON */}
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          {/* ____________________search ICON */}
          <li className='header__links_item'>
            <button
              className='header__links_item-btn header__links_item-btn--search'
              onClick={handleSearchModal}
            >
              <IoIosSearch size={24} className='header__links_item-btn-icon' />
            </button>
          </li>

          {/* ____________________favorite ICON */}
          <li className='header__links_item'>
            <Link
              className='header__links_item-btn header__links_item-btn--favorites'
              href='/favorites'
            >
              <MdFavoriteBorder
                size={24}
                className='header__links_item-btn-icon'
              />
            </Link>
          </li>

          {/* ____________________add ICON */}
          <li className='header__links_item'>
            <Link
              className='header__links_item-btn header__links_item-btn--comparison'
              href='/comparison'
            >
              <MdOutlinePlaylistAdd
                size={24}
                className='header__links_item-btn-icon'
              />
            </Link>
          </li>

          {/* ____________________cart ICON*/}
          <li className='header__links_item'>
            {/* <Link
              className='header__links_item-btn header__links_item-btn--cart'
              href='/cart'
            >
              <MdOutlineShoppingBag
                size={24}
                className='header__links_item-btn-icon'
              />
            </Link> */}

            <CartPopup />
          </li>

          {/* ____________________user ICON*/}
          <li className='header__links_item'>
            <Link
              className='header__links_item-btn header__links_item-btn--profile'
              href='/profile'
            >
              <FaRegCircleUser
                size={24}
                className='header__links_item-btn-icon'
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
