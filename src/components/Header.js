import React, { useState } from "react";
import "./css/Header.css";


export function Header() {
    const [ state, setState ] = useState({
        isMobile: false,
        isExpanded: false
    });

    let logo = state.isMobile ? "logoMobile logo" : "logoDesktop logo" ;
    return (
        <section className="headerBanner">
            <div className={logo} alt="Arwyk Logo">
                <h1>Arwyk</h1>
                <p>Luthierie & Woodcraft</p>
            </div>
            {/* <button className="expandNav">
                <span className="navIcon"></span>
                <img src={require("../assets/icons/menu_icon.svg")}></img>
            </button> */}
        </section>
    )
}