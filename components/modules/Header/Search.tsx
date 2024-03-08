import { useLang } from '@/hooks/useLang';
import { handleCloseSearchModal } from '@/lib/utils/common';

import { IoMdClose } from 'react-icons/io';

const Search = () => {
  const { lang, translations } = useLang();

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    e.target.classList.add('with_value');
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (e.target.value) {
      return;
    }

    e.target.classList.remove('with_value');
  };

  return (
    <div className='search'>
      <button className='search__close' onClick={handleCloseSearchModal}>
        <IoMdClose size={24} />
      </button>

      <h3 className='search__title'>
        {translations[lang].header.search_products}
      </h3>

      <header className='search__top'>
        <label htmlFor='inputSearch' className='search__label'></label>
        <input
          type='text'
          id='inputSearch'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className='search__input'
        />
        <span className='search__floating_label'>
          {translations[lang].header.search_infos}
        </span>
      </header>
    </div>
  );
};

export default Search;
