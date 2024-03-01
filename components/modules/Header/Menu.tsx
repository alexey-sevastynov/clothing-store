import React from 'react';

import { useUnit } from 'effector-react';
import { $menuIsOpen, closeMenu } from '@/context/modals';

import { removeOverflowHiddenFromBody } from '@/lib/utils/common';
import { useLang } from '@/hooks/useLang';

import { IoMdClose } from 'react-icons/io';

import { setLang } from '@/context/lang';
import { AllowedLangs } from '@/constants/lang';

const Menu = () => {
  const { lang, translations } = useLang();

  const menuIsOpen = useUnit($menuIsOpen);

  const [showCatalogList, setShowCatalogList] = React.useState(false);
  const [showBuyersList, setShowBuyersList] = React.useState(false);
  const [showContactsList, setShowContactsList] = React.useState(false);

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  const handleSwitchToRu = () => handleSwitchLang('ru');
  const handleSwitchToUa = () => handleSwitchLang('ua');
  const handleSwitchToEn = () => handleSwitchLang('en');

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

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
        <button
          className={`btn-reset menu__close ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        >
          <IoMdClose size={24} />
        </button>
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
      </div>
    </nav>
  );
};

export default Menu;
