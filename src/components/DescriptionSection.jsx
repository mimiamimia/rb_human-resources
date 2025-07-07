
import React from 'react';
import DescriptionCard from './DescriptionCard';
import '../index.css';

const DescriptionSection = () => {
    const cards = [
        {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "Inovação",
        description: "Utilizamos as mais modernas tecnologias e metodologias para conectar empresas e profissionais de forma eficiente."
        },
        {
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "Transparência",
        description: "Mantemos total transparência em nossos processos, garantindo confiança e segurança para todas as partes."
        }
    ];

    return (
        <section className="description-section">
        <div className="container">
            <h2>Descrição</h2>
            
            <div className="description-grid">
            {cards.map((card, index) => (
                <DescriptionCard 
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                />
            ))}
            </div>
        </div>
        </section>
    );
};

export default DescriptionSection;