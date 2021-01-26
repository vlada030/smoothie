import React from 'react';
import SmoothieList from '../components/SmoothieList';
import SearchForm from '../components/SearchForm';
import { MdAllInclusive } from 'react-icons/md';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <SmoothieList />
    </main>
  )
}

export default Home
