import { ICatalogMenuButtonProps } from '@/types/modules';

import { COLORS } from '@/constants/colors';

const CatalogMenuButton = ({
  name,
  isActive,
  handler,
}: ICatalogMenuButtonProps) => {
  return (
    <button
      className='catalog-menu__list_item-btn'
      onClick={handler}
      style={{ color: isActive ? COLORS.fontHover : COLORS.font }}
    >
      {name}
    </button>
  );
};

export default CatalogMenuButton;
