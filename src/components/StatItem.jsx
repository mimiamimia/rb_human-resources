import React from 'react';
import '../index.css';

const StatItem = ({ icon: Icon, number, label }) => {
    return (
        <div className="stat-item">
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
        </div>
    );
};

export default StatItem;