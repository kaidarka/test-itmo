import React from "react";
import generalLogo from "../image/generalLogo.svg";
import languageImg from "../image/languageImg.svg";


export const Header = () => {
    return(
        <div className="header">
            <a href="https://itmo.ru/ru/" className="header__logo"><img src={generalLogo} alt="Университет ИТМО"/></a>
            <div className="header__language">
                <span>En</span>
                <img src={languageImg} alt="Language"/>
            </div>
        </div>
    );
};