import Link from 'next/link';

import { motion } from 'framer-motion';

const CatalogMenuList = ({ items }: { items: string[] }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='menu__accordion'
    >
      {items.map((title, index) => (
        <li
          key={index}
          className='menu__accordion_item-list-item catalog-menu__list_item-icon'
          style={{ position: 'relative' }}
        >
          <Link
            href={'/catalog'}
            className='menu__accordion_item-list-item-link'
          >
            {title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default CatalogMenuList;
