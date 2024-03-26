'use client';

import React from 'react';

import { MainPageGate } from '@/context/goods';
import { useGate } from 'effector-react';

import Categories from '@/components/modules/MainPage/Categories/Categories';
import Hero from '@/components/modules/MainPage/Hero/Hero';
import BestsellerGoods from '@/components/modules/MainPage/BestsellerGoods';
import NewGoods from '@/components/modules/MainPage/NewGoods';

const MainPage = () => {
  useGate(MainPageGate);

  return (
    <main>
      <Hero />
      <Categories />

      <NewGoods />
      <BestsellerGoods />
    </main>
  );
};

export default MainPage;