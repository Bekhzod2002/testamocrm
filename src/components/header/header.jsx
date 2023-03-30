import React from "react";
import logo from '../../Assets/images/logo_welbex.png';
import telegram from '../../Assets/images/telegram.png';
import whatsapp from '../../Assets/images/whatsapp.png';
import viber from '../../Assets/images/viber.png';
import redball from '../../Assets/images/red-ball.png';
import purpleball from '../../Assets/images/purple-ball.png';
import purplelight from '../../Assets/images/purple-light.png';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          src={logo}
          alt="Logo: Welbex"
          className="header__logo"
        />
        <p className="header__description">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
        <div className="header__navbar">
          <a href="/" className="header__items">
            Услуги
          </a>
          <a href="/" className="header__items">
            Виджеты
          </a>
          <a href="/" className="header__items">
            Интеграции
          </a>
          <img
            src={redball}
            alt="red ball"
            className="header__red-ball"
          />
          <a href="/" className="header__items">
            Кейсы
          </a>
          <img
            src={purplelight}
            alt="purple light"
            className="header__purple-light"
          />
          <img
            src={purpleball}
            alt="purple ball"
            className="header__purple-ball"
          />
          <a href="/" className="header__items">
            Сертификаты
          </a>
        </div>
        <div className="header__contacts">
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <a href="/">
            <img src={telegram} alt="Icon: Telegram" />
          </a>
          <a href="/">
            <img src={viber} alt="Icon: Viber" />
          </a>
          <a href="/">
            <img src={whatsapp} alt="Icon: WhatsApp" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;