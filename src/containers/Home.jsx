import React from 'react';
import Header from '../components/Header/header';
import ImagesSection from '../components/imagesSection/imagesSection'
import AboutMe from '../components/AboutMe/aboutMe'
import '../styles/global.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ImagesSection />
      <AboutMe/>
    </React.Fragment>
  );
};

export default Home;