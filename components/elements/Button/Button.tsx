import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

import '@/styles/elements/button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  width = 200,
  ...props
}) => {
  if (!href) {
    return (
      <button className='button' {...props} style={{ width: width + 'px' }}>
        {children}
      </button>
    );
  }

  return (
    <button className='button' {...props} style={{ width: width + 'px' }}>
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
