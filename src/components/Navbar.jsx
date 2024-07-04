import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/" className="logo"><h1>Mundo limpio</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" href="/">Inicio</Link></li>
                <li><Link className="menu-link" href="#">Productos</Link></li>
                <li><Link className="menu-link" href="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" href="#">Contacto</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;