import React, {useState} from "react";
import logoNav from "../../image/logoNav.svg";
import {NavList} from "./NavList.jsx";
import {MobileNavList} from "./MobileNavList.jsx";
import {NavButton} from "./NavButton.jsx";


export const NavBar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    return(
        <nav className="nav">
            <a href="" className="nav__logo">
                <img src={logoNav} alt="Лаборатория робототехники"/>
                <h2>Лаборатория робототехники</h2>
            </a>
            <NavList/>
            <NavButton active={mobileMenuActive} setActive={setMobileMenuActive}></NavButton>
            <MobileNavList active={mobileMenuActive}/>
        </nav>
    )
};