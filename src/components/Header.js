import React from "react";
import { Navbar } from "./Navbar";
import "./css/Header.css";

export function Header() {
    return (
        <section className="headerBanner">
            <div className="logoMobile logo" alt="Arwyk Logo">
                ''
            </div>
            <Navbar/>
        </section>
    )
}