'use client';
import { AllowedLangs } from '@/constants/lang';
import { createDomain } from 'effector';

const lang = createDomain();

//event effector
export const setLang = lang.createEvent<AllowedLangs>();

//store effector
export const $lang = lang
  .createStore(AllowedLangs.EN)
  .on(setLang, (_, lang) => lang);
