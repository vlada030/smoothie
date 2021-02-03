import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import {searchForm} from '../assets/languages/searchFormLang';

const SearchForm = () => {

  const {setSearchTerm, englishLang} = useGlobalContext();
  const searchValue = useRef(null);

  const searchSmoothie = () => {
    // u slucaju unosa vise reci da uzima samo prvu
    const firstArrElement = searchValue.current.value.split(' ')[0];

    setSearchTerm(firstArrElement.toLowerCase());
  }

  // ovo se dodaje u svakom slucaju jer kada udarimo enter strana se refreshuje i ucitava ispocetka
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const langOption = englishLang ? searchForm.en : searchForm.sr;

  return (
      <section className="section search">
          <form className="search-form" onSubmit={handleSubmit}>
              <div className="form-control">
                  <label htmlFor="name">{langOption.caption}</label>
                  <input
                      type="text"
                      id="name"
                      ref={searchValue}
                      placeholder={langOption.placeholder}
                      onChange={searchSmoothie}
                  />
              </div>
          </form>
      </section>
  );
}

export default SearchForm;