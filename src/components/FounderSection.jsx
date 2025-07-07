
import React from 'react';
import '../index.css';

const FounderSection = () => {
    return (
        <section className="founder-section">
        <div className="container">
            <div className="founder-grid">
            <div>
                <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Fundadora da empresa"
                className="founder-image"
                />
            </div>
            <div className="founder-content">
                <h2>Fundadora</h2>
                <h3>Elizabeth</h3>
                <p className="position">CEO e Sócia-Diretora</p>
                <p className="description">
                Com mais de 15 anos de experiência em recursos humanos, Elizabeth fundou a RB 
                com o objetivo de transformar a gestão de pessoas nas empresas brasileiras.
                </p>
            </div>
            </div>
        </div>
        </section>
    );
};

export default FounderSection;