import React from 'react';
import '../index.css';

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

export default DescriptionCard;