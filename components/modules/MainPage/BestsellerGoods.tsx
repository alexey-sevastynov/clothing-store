import { useUnit } from 'effector-react';

import { $bestsellerProducts } from '@/context/goods';

const BestsellerGoods = () => {
  const goods = useUnit($bestsellerProducts);
  console.log(goods);

  return <div></div>;
};

export default BestsellerGoods;
