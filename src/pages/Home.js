import React from 'react';
import SmoothieList from '../components/SmoothieList';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <SmoothieList />
      <Pagination />
    </main>
  )
}

export default Home;