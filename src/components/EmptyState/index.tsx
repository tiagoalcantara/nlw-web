import React from 'react';

import './styles.css';

function EmptyState(){
    return (
        <div className="empty-state-container">
            <h1>Sem resultados <span role="img" aria-label="emoji-triste">😔</span></h1>
            <p>Não encontramos proffys disponíveis... </p>
        </div>
    );
}

export default EmptyState;