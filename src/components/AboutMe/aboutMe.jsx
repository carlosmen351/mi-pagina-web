import React from 'react';
import data from '../../../data.json'

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <h2>{data.Hi}</h2>
      <h1>{data.name}</h1>
      <p>{data.AboutMe1}</p>
      <p>{data.AboutMe2}</p>
      <p>{data.AboutMe3}</p>
      <p>{data.AboutMe4}</p>
      <p>{data.AboutMe5}</p>
      <button type='button'>{ data.Cv }</button>
    </div>
  );
}

export default AboutMe;
