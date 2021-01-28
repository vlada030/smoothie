import React from 'react';
import SmoothieList from '../components/SmoothieList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <SmoothieList />
    </main>
  )
}

export default Home
