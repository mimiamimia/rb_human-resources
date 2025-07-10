import React from 'react';
import '../index.css';

const RegistrationSection = () => {
    return (
        <section className="registration-section">
        <div className="container">
            <div className="registration-grid">
            <div className="registration-content">
                <h2>Como se cadastrar</h2>
                
                <div className="registration-options">
                <div className="registration-option">
                    <h3>Empresa</h3>
                    <p>
                    Cadastre sua empresa para publicar vagas e encontrar os melhores profissionais classificados para a sua vaga!
                    </p>
                </div>
                
                <div className="registration-option">
                    <h3>Profissional</h3>
                    <p>
                    Crie seu perfil como profissional e encontre as melhores oportunidades de carreira.
                    </p>
                </div>
                </div>

                <button className="access-btn">
                    Cadastre-se
                </button>
            </div>
            
            <div>
                <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Profissionais trabalhando"
                className="registration-image"
                />
            </div>
            </div>
        </div>
        </section>
    );
};

export default RegistrationSection;