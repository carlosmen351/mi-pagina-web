import React from 'react';
import PdfEs from '../../../assets/docs/CarlosEs.pdf';
import PdfEn from '../../../assets/docs/CarlosEn.pdf';
import data1 from '../../../data.json'
import data2 from '../../../data copy.json'

const AboutMe = ({idiom}) => {
  if (idiom === data2) {
    return (
      <div className='aboutMe'>
        <h2>{data2.Hi}</h2>
        <h1>{data2.name}</h1>
        <p>{data2.AboutMe1}</p>
        <p>{data2.AboutMe2}</p>
        <p>{data2.AboutMe3}</p>
        <p>{data2.AboutMe4}</p>
        <p>{data2.AboutMe5}</p>
        <p>{data2.AboutMe6}</p>
        <a href={PdfEn} download="CarlosMenesesCV">
          {data2.Cv}
        </a>
      </div>
    )
  }
  return (
    <div className='aboutMe'>
      <h2>{data1.Hola}</h2>
      <h1>{data1.Nombre}</h1>
      <p>{data1.sobreMi}</p>
      <p>{data1.sobreMi2}</p>
      <p>{data1.sobreMi3}</p>
      <p>{data1.sobreMi4}</p>
      <p>{data1.sobreMi5}</p>
      <p>{data1.sobreMi6}</p>
      <a href={PdfEs} download="CarlosMenesesCV">
        {data1.CvEs}
      </a>
    </div>
  );

}

export default AboutMe;
