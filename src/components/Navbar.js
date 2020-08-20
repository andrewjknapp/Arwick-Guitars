import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export function Navbar() {
    return (
        <nav className="navbar">
                <div className="links">
                    <Link className="linkItem" to="/">About</Link>
                    <Link className="linkItem" to="/Gallery">Gallery</Link>
                    <Link className="linkItem" to="/Contact">Contact</Link>
                </div>
            </nav>
    )
}