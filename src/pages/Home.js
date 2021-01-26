import React from 'react';
import SmoothieList from '../components/SmoothieList';
import SearchForm from '../components/SearchForm';
import Modal from '../components/Modal';
import { MdAllInclusive } from 'react-icons/md';

const Home = () => {
  return (
    <main className='main'>
      <Modal />
      <SearchForm />
      <SmoothieList />
    </main>
  )
}

export default Home
