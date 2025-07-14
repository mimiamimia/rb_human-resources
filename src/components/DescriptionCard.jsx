import React from 'react';
import '../index.css';

// Componente DescriptionCard
const DescriptionCard = ({ image, title, description }) => {
    return (
        <div className="description-card">
            <img 
                src={image} 
                alt={title}
            />
            <div className="description-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

// Componente DescriptionSection
const DescriptionSection = () => {
    const cards = [
        {
            image: "https://i.pinimg.com/1200x/35/cf/02/35cf02096e18866a9dc4d217794df5d4.jpg",
            title: "Inovação",
            description: "Utilizamos as mais modernas tecnologias e metodologias para conectar empresas e profissionais de forma eficiente."
        },
        {
            image: "https://i.pinimg.com/1200x/c8/43/8d/c8438dd30f7e98de64a9d4c32c598489.jpg",
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