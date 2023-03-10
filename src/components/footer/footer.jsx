import React from "react";
import './footer.scss';
import telegram from '../../Assets/images/telegram.png';
import viber from '../../Assets/images/viber.png';
import whatsapp from '../../Assets/images/whatsapp.png';

const Footer = () => {
    return(
        <>
        <div>
            <div className="footer">
                <div className="aboutus">
                    <div className="aboutlink">О КОМПАНИИ</div>
                        <a className="programm">Партнёрская программа</a>
                        <a className="vacancy">Вакансии</a>
                    </div>
                    <div className="menu">
                        <div className="menufoot">МЕНЮ</div>
                        <div className="menulinks">
                            <div>
                                <p>Расчёт стоимости</p>
                                <p>Услуги</p>
                                <p>Виджеты</p>
                                <p>Интеграции</p>
                                <p>Наши клиенты</p>
                            </div>
                            <div>
                                <p>Кейсы</p>
                                <p>Благодарственные письма</p>
                                <p>Сертификаты</p>
                                <p>Блог на Youtube</p>
                                <p>Вопрос / Ответ</p>
                            </div>
                        </div>
                    </div>
                    <div className="footcontacts">
                        <div className="contacts_foot">КОНТАКТЫ</div>
                        <p>+7 555 555-55-55</p>
                        <div className="footicons">
                            <img src={telegram} />

                            <img src={viber} />
                            
                            <img src={whatsapp} />
                        </div>
                        <p>Москва, Путевой проезд 3с1, к 902</p>
                    </div>
                </div>    
            
                <div className="foottxt">
                    <p>©WELBEX 2022. Все права защищены.</p>
                    <p>Политика конфиденциальности</p>
                </div>
        </div>
        
        </>

    )
}

export default Footer;