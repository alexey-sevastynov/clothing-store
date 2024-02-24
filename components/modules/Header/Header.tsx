'use client';
import React from 'react';
import '@/app/globalStyles/header.css';
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

import Logo from '@/components/elements/Logo/Logo';

const Header = () => {
  const { lang, translations } = useLang();
  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          <FiAlignJustify />
          {translations[lang].header.menu_btn}
        </button>
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links_item'>
            <button className='header__links_item-btn header__links_item-btn--search'>
              <IoIosSearch size={24} className='header__links_item-btn-icon' />
            </button>
          </li>
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
          <li className='header__links_item'>
            <Link
              className='header__links_item-btn header__links_item-btn--cart'
              href='/cart'
            >
              <MdOutlineShoppingBag
                size={24}
                className='header__links_item-btn-icon'
              />
            </Link>
          </li>
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
