import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef(null);

  const searchSmoothie = () => {
    // u slucaju unosa vise reci da uzima samo prvu
    const firstArrElement = searchValue.current.value.split(' ')[0];

    setSearchTerm(firstArrElement);
  }

  // ovo se dodaje u svakom slucaju jer kada udarimo enter strana se refreshuje i ucitava ispocetka
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
      <section className="section search">
          <form className="search-form" onSubmit={handleSubmit}>
              <div className="form-control">
                  <label htmlFor="name">Please enter one ingredient</label>
                  <input
                      type="text"
                      id="name"
                      ref={searchValue}
                      placeholder="i.e. banana"
                      onChange={searchSmoothie}
                  />
              </div>
          </form>
      </section>
  );
}

export default SearchForm;