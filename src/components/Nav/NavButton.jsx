import React from "react";

export const NavButton = ({ active, setActive }) => {
    return(
        <div className={active ? "nav-button nav-button__active" :"nav-button"} onClick={() => setActive(!active)}>
            <span></span>
        </div>
    )
}