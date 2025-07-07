import React from 'react';
import '../index.css';

const Header = () => {
    return (
        <header className="header">
        <nav className="navbar">
            <div className="navbar-brand">
            <div className="logo">RB</div>
            <ul className="nav-links">
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Vagas</a></li>
            </ul>
            </div>
            <button className="contact-btn">
            Contato
            </button>
        </nav>
        </header>
    );
};

export default Header;