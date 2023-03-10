import React from "react";
import './header.scss';
import logo from '../../Assets/images/logo_welbex.png';
import telegram from '../../Assets/images/telegram.png';
import viber from '../../Assets/images/viber.png';
import whatsapp from '../../Assets/images/whatsapp.png';



const Header = () => {
    return(
        <>
        <div className="circlehead"></div>
            <div className="header">
                <div className="logo">
                    <img className="logoimg" src={logo}/>
                    <p className="crm">крупный интегратор CRM <br/> в Росcии и ещё 8 странах</p>
                </div>
                <div className="menu_important">
                    <a className="linkhead">Услуги</a>
                    <a className="linkhead">Виджеты</a>
                    <a className="linkhead">Интеграции</a>
                    <a className="linkhead">Кейсы</a>
                    <a className="linkheadd">Сертификаты</a>
                </div>
                <div className="head_contact">
                    <p>+7 555 555-55-55</p>
                    <img className="telegram" src={telegram} />
                    <img className="viber" src={viber} />
                    <img className="whatsap" src={whatsapp}/>
                </div>
            </div>
        </>
    )
}

export default Header