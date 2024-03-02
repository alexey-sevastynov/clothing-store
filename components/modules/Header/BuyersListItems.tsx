import Link from 'next/link';

import { useLang } from '@/hooks/useLang';

const BuyersListItems = () => {
  const { lang, translations } = useLang();

  return (
    <>
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
        <Link href={'/purchase-returns'} className='menu__accordion_item-link'>
          {translations[lang].main_menu.returns}
        </Link>
      </li>
    </>
  );
};

export default BuyersListItems;
