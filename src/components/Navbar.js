import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <section>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
        </section>
    )
}