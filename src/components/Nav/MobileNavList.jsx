import React from "react";

export const MobileNavList = ({active}) => {
    return(
        <ul className={active ? "nav-mobile__active" : "nav-mobile"}>
            <li><a href="">О лаборатории</a></li>
            <li><a href="">Учебная деятельность</a></li>
            <li><a href="">Научная деятельность</a></li>
            <li><a href="">Новости</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
    );
}