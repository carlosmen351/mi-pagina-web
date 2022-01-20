import React, {useState} from 'react';
import Header from '../components/Header/header';
import ImagesSection from '../components/imagesSection/imagesSection'
import AboutMe from '../components/AboutMe/aboutMe'
import Stack from '../components/stack/stack';
import Footer from '../components/footer/footer';
import data1 from '../../data.json'
import '../styles/global.scss';

const Home = () => {
  const [lenguaje, setLenguaje] = useState(data1);
  return (
    <React.Fragment>
      <Header idiom={lenguaje} changes={setLenguaje}/>
      <ImagesSection />
      <AboutMe idiom = {lenguaje} />
      <Stack idiom = {lenguaje}/>
      <Footer idiom = {lenguaje}/>
    </React.Fragment>
  );
};

export default Home;