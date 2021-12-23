import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/coverD.png'
import porta from '../../../assets/icons/portafolioD.svg'
import brillo from '../../../assets/icons/brightnessD.svg'
import idiom from '../../../assets/icons/language.svg'

const Header = () => {
  return (
    <nav className='nav'>
      <input type="checkbox" id='navCheckbox' className='nav_checkbox' />
      <label className='nav_toogle' htmlFor="navCheckbox">
        <svg className='close' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.375 30H5.625C4.13316 30 2.70242 29.4074 1.64752 28.3525C0.592632 27.2976 0 25.8668 0 24.375L0 5.625C0 4.13316 0.592632 2.70242 1.64752 1.64752C2.70242 0.592632 4.13316 0 5.625 0L24.375 0C27.48 0 30 2.51812 30 5.625V24.375C30 27.4819 27.48 30 24.375 30ZM26.25 5.625C26.25 4.58812 25.4119 3.75 24.375 3.75H5.625C5.12772 3.75 4.65081 3.94754 4.29917 4.29917C3.94754 4.65081 3.75 5.12772 3.75 5.625V24.375C3.75 24.8723 3.94754 25.3492 4.29917 25.7008C4.65081 26.0525 5.12772 26.25 5.625 26.25H24.375C25.4119 26.25 26.25 25.4119 26.25 24.375V5.625ZM20.3025 20.3025C20.1285 20.4768 19.9219 20.615 19.6944 20.7094C19.467 20.8037 19.2231 20.8523 18.9769 20.8523C18.7306 20.8523 18.4868 20.8037 18.2593 20.7094C18.0319 20.615 17.8252 20.4768 17.6513 20.3025L15 17.6513L12.3487 20.3025C11.9972 20.6543 11.5202 20.8521 11.0229 20.8523C10.5255 20.8524 10.0484 20.655 9.69656 20.3034C9.34474 19.9519 9.14698 19.4749 9.14681 18.9775C9.14663 18.4802 9.34405 18.0031 9.69562 17.6513L12.3487 15L9.69562 12.3487C9.52154 12.1745 9.38348 11.9678 9.28931 11.7402C9.19514 11.5126 9.14672 11.2687 9.14681 11.0225C9.14689 10.7762 9.19549 10.5323 9.28982 10.3048C9.38414 10.0773 9.52236 9.87065 9.69656 9.69656C9.87077 9.52248 10.0776 9.38441 10.3051 9.29025C10.5327 9.19608 10.7766 9.14766 11.0229 9.14775C11.2691 9.14783 11.513 9.19643 11.7405 9.29075C11.968 9.38508 12.1747 9.52329 12.3487 9.6975L15 12.3487L17.6513 9.6975C18.3844 8.96437 19.5694 8.96437 20.3025 9.6975C21.0356 10.4306 21.0356 11.6156 20.3025 12.3487L17.6513 15L20.3025 17.6513C20.4768 17.8252 20.615 18.0319 20.7094 18.2593C20.8037 18.4868 20.8523 18.7306 20.8523 18.9769C20.8523 19.2231 20.8037 19.467 20.7094 19.6944C20.615 19.9219 20.4768 20.1285 20.3025 20.3025V20.3025Z" fill="white"/>
        </svg>
        <svg className='menu' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.375 30H5.625C4.13316 30 2.70242 29.4074 1.64752 28.3525C0.592632 27.2976 0 25.8668 0 24.375L0 5.625C0 4.13316 0.592632 2.70242 1.64752 1.64752C2.70242 0.592632 4.13316 0 5.625 0L24.375 0C25.8668 0 27.2976 0.592632 28.3525 1.64752C29.4074 2.70242 30 4.13316 30 5.625V24.375C30 25.8668 29.4074 27.2976 28.3525 28.3525C27.2976 29.4074 25.8668 30 24.375 30ZM26.25 5.625C26.25 5.12772 26.0525 4.65081 25.7008 4.29917C25.3492 3.94754 24.8723 3.75 24.375 3.75H5.625C5.12772 3.75 4.65081 3.94754 4.29917 4.29917C3.94754 4.65081 3.75 5.12772 3.75 5.625V24.375C3.75 25.4119 4.58812 26.25 5.625 26.25H24.375C25.4119 26.25 26.25 25.4119 26.25 24.375V5.625ZM7.5 18.75H22.5V22.5H7.5V18.75ZM7.5 13.125H22.5V16.875H7.5V13.125ZM7.5 7.5H22.5V11.25H7.5V7.5Z" fill="white"/>
        </svg>
      </label>
      <ul className='nav_menu'>
        <li className='nav_menu_logo'>
          <Link to='/' >
            <img id='logo' src={logo} alt="Logo de la pagina" />
          </Link>
        </li>
        <li className='nav_menu_icons'>
          <img className='iconosNav' src={porta} alt="Portafolio" />
          <img className='iconosNav' src={brillo} alt="Modo Claro" />
          <img className='iconosNav' src={idiom} alt="Idioma" />
        </li>
      </ul>
    </nav>
  );
}

export default Header;