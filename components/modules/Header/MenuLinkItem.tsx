import React from 'react';
import Link from 'next/link';

import { IMenuLinkItemProps } from '@/types/modules';

const MenuLinkItem = ({
  item,
  handleRedirectToCatalog,
}: IMenuLinkItemProps) => {
  const onRedirect = () => handleRedirectToCatalog(item.href);

  return (
    <li key={item.id} className='menu__accordion_item-list-item-item'>
      <Link
        href={item.href}
        className='menu__accordion_item-list-item-link'
        onClick={onRedirect}
      >
        {item.text}
      </Link>
    </li>
  );
};

export default MenuLinkItem;
