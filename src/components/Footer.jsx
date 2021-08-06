import React from "react";
import footerLogo from "../image/footerLogo.svg";
import footerVk from "../image/vk.svg";
import footerFacebook from "../image/facebook.svg";
import footerInstagram from "../image/instagram.svg";
import footerTwitter from "../image/twitter.svg";


export const Footer = () => {
    return(
        <div className="footer-nav">
            <div className="footer-nav__container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-12">
                        <img src={footerLogo} className="footer-nav__logo" alt="Университет ИТМО"/>
                        <p>
                            Информация © 1993–2020  Университет ИТМО <br/>
                            Разработка © 2020 Управление по развитию и поддержке портала
                        </p>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12 my-3 my-md-0">
                        <ul className="footer-nav__list">
                            <li><a href="">Страница ректора</a></li>
                            <li><a href="">Институты и факультеты</a></li>
                            <li><a href="">Библиотека</a></li>
                            <li><a href="">Издания Университета</a></li>
                            <li><a href="">Приемная комиссия</a></li>
                            <li><a href="">Расписание занятий</a></li>
                            <li><a href="">Страница ректора</a></li>
                            <li><a href="">Институты и факультеты</a></li>
                            <li><a href="">Библиотека</a></li>
                            <li><a href="">Издания Университета</a></li>
                            <li><a href="">Приемная комиссия</a></li>
                            <li><a href="">Расписание занятий</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <p>г. Санкт-Петербург, Кронверкский пр., 49, ауд. 333</p>
                        <p>Тел: +7 (931) 538-01-70</p>
                        <p>E-mail: job@corp.ifmo.ru</p>
                        <div className="footer-social">
                            <h4>Мы в соцсетях:</h4>
                            <div className="footer-social__icons">
                                <a href=""><img src={footerVk} alt=""/></a>
                                <a href=""><img src={footerFacebook} alt=""/></a>
                                <a href=""><img src={footerTwitter} alt=""/></a>
                                <a href=""><img src={footerInstagram} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}