import Link from 'next/link';

const FooterMobileLink = ({ text }: { text: string }) => {
  return (
    <div className='footer__mobile'>
      <Link href={'#'}>{text}</Link>
    </div>
  );
};

export default FooterMobileLink;
