import React from 'react';
import data from '../../../data.json'
import PDF from '../../../assets/docs/CarlosEs.pdf';


const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <h2>{data.Hola}</h2>
      <h1>{data.Nombre}</h1>
      <p>{data.sobreMi}</p>
      <p>{data.sobreMi2}</p>
      <p>{data.sobreMi3}</p>
      <p>{data.sobreMi4}</p>
      <p>{data.sobreMi5}</p>
      <p>{data.sobreMi6}</p>
      <a href={PDF} download>
        {data.CvEs}
      </a>
    </div>
  );
}

export default AboutMe;
