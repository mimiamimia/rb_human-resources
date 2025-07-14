
import React from 'react';
import '../index.css';

const FounderSection = () => {
    return (
        <section className="founder-section">
        <div className="container">
            <div className="founder-grid">
            <div>
                <h2 className='founder-title'>Fundadora</h2>
                <img 
                src="../assets/elizabeth_gomes.jpg" 
                alt="Fundadora da empresa"
                className="founder-image"
                />
            </div>
            <div className="founder-content">
                
                <h3>Elizabeth Gomes</h3>
                <p className="position">CEO</p>
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