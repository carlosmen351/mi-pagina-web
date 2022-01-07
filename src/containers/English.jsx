import React from 'react';
import Header from '../components/Header/header';
import ImagesSection from '../components/imagesSection/imagesSection'
import AboutMe from '../components/AboutMe/aboutMe'
import Stack from '../components/stack/stack';
import Footer from '../components/footer/footer';
import '../styles/global.scss';

const English = () => {
  return (
    <React.Fragment>
      <Header />
      <ImagesSection />
      <AboutMe />
      <Stack />
      <Footer/>
    </React.Fragment>
  );
};

export default English;