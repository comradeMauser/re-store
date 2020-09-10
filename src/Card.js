import React from 'react';
import "./card.css";


const Card = () => {
    return (
        <div className="card bg-dark mb-3">
            <div className="card-header">Card</div>
            <div className="card-body">
                <h4 className="card-title">Chewie, we`re home</h4>
                <p className="card-text">WYAAAAAA!</p>
            </div>
        </div>
    );
};

export default Card;