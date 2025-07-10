import React from 'react';
import { Star, Users, Building, Award } from 'lucide-react';
import StatItem from './StatItem';
import '../index.css';

const StatsSection = () => {
    const stats = [
        { icon: Users, number: "500+", label: "Clientes" },
        { icon: Building, number: "1000+", label: "Vagas" },
        { icon: Award, number: "95%", label: "Sucesso" },
        { icon: Star, number: "15", label: "Anos" }
    ];

    return (
        <section className="stats-section">
        <div className="container">
            <h2>RB Recursos Humanos</h2>
            
            <div className="stats-grid">
            {stats.map((stat, index) => (
                <StatItem 
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                />
            ))}
            </div>
        </div>
        </section>
    );
};

export default StatsSection;