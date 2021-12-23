import React from 'react';
import Header from '../components/Header/header';
import ImagesSection from '../components/imagesSection/imagesSection'
import '../styles/global.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ImagesSection/>
    </React.Fragment>
  );
};

export default Home;