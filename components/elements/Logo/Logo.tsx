import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href='/'>
      <img
        className='logo__img'
        src='/img/logo.png'
        alt='Garna-Rich-Logo'
        width={60}
      />
    </Link>
  );
};

export default Logo;
