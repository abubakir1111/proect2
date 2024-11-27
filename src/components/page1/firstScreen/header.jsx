// import React, { createContext, useRef } from 'react';
import './header.scss';
import logo from '../../../assets/img/header/first-screen__logo.svg';
import { Link } from 'react-router-dom';
import headerLocation from '../../../assets/img/header/Group.png';
import headerPhone from '../../../assets/img/header/phone.png';
import { useContext } from 'react';
import { AppContext } from '../../../context/Context';
// import { createContext, useRef } from 'react';

// export const AppContext = createContext(null);

function Header() {
  const context_ref = useContext(AppContext)
  
  
  return (

      <div className="header-container">
        <div className="header-container-box">
          <div className="navbar">
            <div className="navbar-box">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="nav-text">
                <Link className="link">О комплексе</Link>
                <Link className="link">Район</Link>
                <Link className="link">Каталог квартир</Link>
                <Link className="link">Ипотека</Link>
                <Link className="link">Контакты</Link>
              </div>
            </div>
          </div>
          <div className="first-screen-center">
            <div className="first-screen-center-box">
              <div className="first-screen-center-text">
                <p>Жилой комплекс в историческом центре</p>
              </div>
              <div className="first-screen-center-button">
                <button onClick={context_ref.scrollToDiv}>
                  <div className="first-screen-center-border-animation"></div>
                </button>
              </div>
              <div className="first-screen-center-phone">
                <div className="header-number1">
                  <img src={headerLocation} alt="Location" />
                  <p>Наб. реки Фонтанки 10-15</p>
                </div>
                <div className="header-number2">
                  <img src={headerPhone} alt="Phone" />
                  <p>8 (812) 123-45-67</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


  );
}

export default Header;
