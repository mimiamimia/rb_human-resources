import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-grid">
            <div className="footer-section">
                <h3>RB Recursos Humanos</h3>
                <p className="footer-description">
                Conectando talentos e empresas para garantir serviços de qualidade e humanizado.
                </p>
            </div>
            
            <div className="footer-section">
                <h4>Links Úteis</h4>
                <ul className="footer-links">
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Vagas</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h4>Contato</h4>
                <div className="contact-info">
                <div className="contact-item">
                    <Phone className="contact-icon" />
                    <span>(12) 99999-9999</span>
                </div>
                <div className="contact-item">
                    <Mail className="contact-icon" />
                    <span>contato@rbrecursoshumanos.com.br</span>
                </div>
                <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <span>Taubaté, SP</span>
                </div>
                </div>
            </div>
            </div>
            
            <div className="footer-bottom">
            <p>&copy; 2024 RB Recursos Humanos. Todos os direitos reservados.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;