import React, {useState} from 'react';
import Header from '../components/Header/header';
import MyProject from '../components/tituloPorta/MyProject';
import Proyects from '../components/proyects/Proyects'
import Footer from '../components/footer/footer';
import data1 from '../../data.json';
import '../styles/global.scss';

const Portafolio = () => {
  const [lenguaje, setLenguaje] = useState(data1);
  return (
    <React.Fragment>
      <Header idiom={lenguaje} changes={setLenguaje}/>
      <MyProject idiom={lenguaje}/>
      <Proyects idiom={lenguaje}/>
      <Footer idiom={lenguaje}/>
    </React.Fragment>
  );
};

export default Portafolio;