import Link from 'next/link';

import { useLang } from '@/hooks/useLang';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS } from '@/constants/breakpoints';

import { PiTelegramLogo } from 'react-icons/pi';
import { CiFacebook, CiYoutube } from 'react-icons/ci';

import Logo from '@/components/elements/Logo/Logo';
import FooterLinks from './FooterLinks';
import FooterMobileLink from './FooterMobileLink';

const Footer = () => {
  const { lang, translations } = useLang();

  const isMedia768 = useMediaQuery(BREAKPOINTS.md);
  const isMedia1024 = useMediaQuery(BREAKPOINTS.lg);

  return (
    <footer className='footer'>
      {/* _____________________________________TOP */}

      <div className='footer__top'>
        <div className='footer__top_container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='tel:+380974211929'>+38 (097) 42-119-29</a>
            </span>
            <span>
              <a href='mailto:alexseva94@gmail.com' target='_blank'>
                alexseva94@gmail.com
              </a>
            </span>

            {isMedia1024 && <FooterLinks />}
          </div>

          {!isMedia1024 && <FooterLinks />}

          <ul className='footer__socials'>
            {/* ________________Telegram icon */}
            <li className='footer__socials_item'>
              <a
                className='footer__socials_item-link'
                href='https://telegram.org/'
              >
                <PiTelegramLogo size={24} />
              </a>
            </li>

            {/* ________________Youtube icon */}
            <li className='footer__socials_item'>
              <a
                className='footer__socials_item-link'
                href='https://youtube.com/'
              >
                <CiYoutube size={24} />
              </a>
            </li>

            {/* ________________Facebook icon */}
            <li className='footer__socials_item'>
              <a
                className='footer__socials_item-link'
                href='https://facebook.com/'
              >
                <CiFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* _______________________________________BOTTOM */}
      <div className='footer__bottom'>
        <div className='footer__bottom_container'>
          <div className='footer__copyright'>
            @ 2024 {translations[lang].footer.copyright}
            <br />
            18+
          </div>

          <div className='footer__policy_inner'>
            <Link href='/data-processing-policy'>
              {translations[lang].footer.policy}
            </Link>

            <Link href='/privacy-policy'>
              {translations[lang].footer.privacy}
            </Link>
          </div>

          {/* ________________full version link */}
          {isMedia768 && (
            <FooterMobileLink text={translations[lang].footer.full_version} />
          )}

          {/* ________________mobile version link */}
          {!isMedia768 && (
            <FooterMobileLink text={translations[lang].footer.mobile_version} />
          )}
          <div> </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
