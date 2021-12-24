import React from 'react';
import data from '../../../data.json'
import gitHub from '../../../assets/icons/githubD.svg'
import linkedin from '../../../assets/icons/linkedinD.svg'
import mail from '../../../assets/icons/mailD.svg'
import twitter from '../../../assets/icons/twitterD.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footer_title'>{data.MasSobreMi}</h1>
      <h1 className='footer_title'>{data.MasSobreMi2}</h1>
      <div className='footer_icons'>
        <a target="_blank" href="https://github.com/carlosmen351">
          <img src={gitHub} alt="perfil github" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/carlosmen351/">
          <img src={linkedin} alt="perfil linkedin" />
        </a>
        <a target="_blank" href="mailto:contacto@menesescarlos.com">
          <img src={mail} alt="correo electronico" />
        </a>
        <a target="_blank" href="https://twitter.com/carlosmen351">
          <img src={twitter} alt="perfil twitter" />
        </a>
      </div>
      <div className='footer_info'>
        <p>{data.Adios}</p>
        <p>{data.Registrada}</p>
        <p>{data.De}</p>
      </div>
    </div>
  );
};

export default Footer;