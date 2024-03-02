import Link from 'next/link';

import { useLang } from '@/hooks/useLang';

const ContactsListItems = () => {
  const { lang, translations } = useLang();
  return (
    <>
      <li className='menu__accordion_item '>
        <a
          href={'tel:+380974211929'}
          className='menu__accordion_item-link menu__accordion_item-title'
        >
          +38 (097) 42-119-29
        </a>
      </li>
      <li className='menu__accordion_item'>
        <a
          href={'mailto:alexseva94@gmail.com'}
          className='menu__accordion_item-link'
        >
          {translations[lang].main_menu.mail}
        </a>
      </li>
      <li className='menu__accordion_item'>
        <Link
          href={'https://t.me/alexseva_94'}
          target='_blank'
          className='menu__accordion_item-link'
        >
          {translations[lang].main_menu.telegram}
        </Link>
      </li>
    </>
  );
};

export default ContactsListItems;
