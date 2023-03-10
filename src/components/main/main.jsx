import React from "react";
import './main.scss';
const Main = () => {
    return(
        <>
            <div className="circlemain"></div>
            <div className="circleleft"></div>
            <div className="littlecircle"></div>
            <div className="adaptcircle"><div className="adaptkrug"></div></div>
            <div className="main">
                <div className="jobwithus">
                    <p className="earn">Зарабатывайте больше <br/> <span className="withwelbex">с WELBEX</span> </p>
                    <p className="oursettings">Развиваем и контролируем продажи за вас</p>
                </div>
                <div className="freeconsultation">
                    <div className="withconsult">Вместе с <span className="freeconsulttxt">бесплатной консультацией</span>  мы дарим:</div>
                    <div className="ourgifts">
                        <div className="vidjet">
                            <div className="vidjethead">ВИДЖЕТЫ</div>
                            <p className="vidjettxt">30 готовых решений</p>
                        </div>
                        <div className="dashboard">
                            <div className="dashboardhead">DASHBOARD</div>
                            <p className="dashboardtxt">с показателями вашего бизнеса</p>
                        </div>
                        <div className="skype">
                            <div className="skypehead">SKYPE АУДИТ</div>
                            <p className="skypetxt">отдела продаж и CRM системы</p>
                        </div>
                        <div className="month">
                            <div className="monthhead">35 ДНЕЙ</div>
                            <p className="monthtxt">использования CRM</p>
                        </div>
                    </div>
                    <div className="adaptive">
                        <div className="audit"> <hr className="line"/> <span className="adapskype">skype аудит</span></div>
                        <div className="adapt_vidjet"><hr className="line_vid"/> <span className="adaptvidjet">30 виджетов</span></div>
                        <div className="dashboard_adapt"><hr className="line_dash"/> <span className="adaptdashboard" >DASHBOARD</span></div>
                        <div className="amocrm"><hr className="linecrm" /> <span className="adaptmonth">Месяц аmoCRM</span></div>
                    </div>
                    <button className="getconsult">Получить консультацию</button>
                </div>
            </div>        
        </>

    )
}

export default Main;