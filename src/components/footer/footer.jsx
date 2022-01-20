import React from 'react';
import data1 from '../../../data.json'
import data2 from '../../../data copy.json'
import gitHub from '../../../assets/icons/githubD.svg'
import linkedin from '../../../assets/icons/linkedinD.svg'
import mail from '../../../assets/icons/mailD.svg'
import twitter from '../../../assets/icons/twitterD.svg'

const Footer = ({ idiom }) => {
  if (idiom === data2) {
    return (
      <div className='footer'>
        <h1 className='footer_title'>{data2.MoreAboutMe}</h1>
        <h1 className='footer_title'>{data2.MoreAboutMe2}</h1>
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
          <p>{data2.Bye}</p>
          <p>{data2.From}</p>
          <p>{data2.Registred}</p>
        </div>
      </div>
    );
  }
  return (
    <div className='footer'>
      <h1 className='footer_title'>{data1.MasSobreMi}</h1>
      <h1 className='footer_title'>{data1.MasSobreMi2}</h1>
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
        <p>{data1.Adios}</p>
        <p>{data1.De}</p>
        <p>{data1.Registrada}</p>
      </div>
    </div>
  );

};

export default Footer;