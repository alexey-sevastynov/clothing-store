import Link from 'next/link';

import { ILogoProps } from '@/types/elements';

const Logo = ({ size = 60 }: ILogoProps) => {
  return (
    <Link href='/'>
      <img
        className='logo__img'
        src='/img/logo.png'
        alt='Garna-Rich-Logo'
        width={size}
      />
    </Link>
  );
};

export default Logo;
