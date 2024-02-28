import React from 'react';

import { useUnit } from 'effector-react';
import { $menuIsOpen, closeMenu } from '@/context/modals';

import { removeOverflowHiddenFromBody } from '@/lib/utils/common';
import { useLang } from '@/hooks/useLang';

import { IoMdClose } from 'react-icons/io';

const Menu = () => {
  const { lang, translations } = useLang();

  const menuIsOpen = useUnit($menuIsOpen);

  const [showCatalogList, setShowCatalogList] = React.useState(false);
  const [showBuyersList, setShowBuyersList] = React.useState(false);
  const [showContactsList, setShowContactsList] = React.useState(false);

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

  return (
    <nav className={`menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button
        className={`btn-reset menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handleCloseMenu}
      >
        <IoMdClose size={24} />
      </button>
      Menu
    </nav>
  );
};

export default Menu;
