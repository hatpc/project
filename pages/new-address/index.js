import Footer from '../layouts/commons/footer/Footer';
import React from 'react';
import Header from '../layouts/commons/header/Header';
import Address from '../../pages/new-address/address';

const Home = () => {
    return (
      <>
        <Header />
        <Footer />
        <Address />
      </>
    );
  };
  
  export default Home;