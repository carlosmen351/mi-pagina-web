import React from 'react';
import Header from '../components/Header/header';
import MyProject from '../components/tituloPorta/MyProject';
import Proyects from '../components/proyects/Proyects'
import Footer from '../components/footer/footer';
import '../styles/global.scss';

const Portafolio = () => {
  return (
    <React.Fragment>
      <Header />
      <MyProject />
      <Proyects />
      <Footer/>
    </React.Fragment>
  );
};

export default Portafolio;