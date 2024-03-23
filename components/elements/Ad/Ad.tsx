'use client';
import '@/styles/elements/ad.css';

import { useLang } from '@/hooks/useLang';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { ButtonHTMLAttributes } from 'react';

interface AdProps extends ButtonHTMLAttributes<HTMLDivElement> {}

const Ad: React.FC<AdProps> = ({ className, ...rest }) => {
  const { lang, translations } = useLang();
  return (
    <div className={`ad ${className}`} {...rest}>
      <p className='ad__title'> {translations[lang].common.ad}</p>
      <IoIosInformationCircleOutline className='ad__icon' size={24} />
    </div>
  );
};

export default Ad;
