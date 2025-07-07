import React from 'react';
import '../index.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
        <div className="container">
            <div className="hero-grid">
            <div className="hero-content">
                <h1>Sobre a RB recursos humanos</h1>
                <p>
                Facilite, mova e inove sua empresa. Oferecemos soluções completas para a gestão de pessoas.
                </p>
            </div>
            <div className="hero-image-container">
                <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipe de negócios em reunião"
                className="hero-image"
                />
            </div>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;