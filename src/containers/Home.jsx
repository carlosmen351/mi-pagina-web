import React from 'react';
import Header from '../components/Header/header';
import ImagesSection from '../components/imagesSection/imagesSection'
import AboutMe from '../components/AboutMe/aboutMe'
import Stack from '../components/stack/stack'
import '../styles/global.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ImagesSection />
      <AboutMe />
      <Stack/>
    </React.Fragment>
  );
};

export default Home;