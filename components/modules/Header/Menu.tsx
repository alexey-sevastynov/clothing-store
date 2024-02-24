import React from 'react';

import { useUnit } from 'effector-react';
import { $menuIsOpen } from '@/context/modals';

import { useLang } from '@/hooks/useLang';

const Menu = () => {
  const { lang, translations } = useLang();

  const menuIsOpen = useUnit($menuIsOpen);

  const [showCatalogList, setShowCatalogList] = React.useState(false);
  const [showBuyersList, setShowBuyersList] = React.useState(false);
  const [showContactsList, setShowContactsList] = React.useState(false);

  return <nav className={`menu ${menuIsOpen ? 'open' : 'close'}`}>Menu</nav>;
};

export default Menu;
