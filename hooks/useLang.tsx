'use client';
import { useUnit } from 'effector-react';

import { $lang } from '@/context/lang';
import translationJson from '@/public/translations/translations.json';

export const useLang = () => {
  const lang = useUnit($lang);
  const translations = translationJson;

  return { lang, translations };
};

//______template for using to component
// const { lang, translations } = useLang();

//______example to html
// {translations[lang].main_menu.contacts}
