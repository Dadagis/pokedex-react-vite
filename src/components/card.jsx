import React from 'react';
import '../styles/card.css';

function card({ size, label, ...props }) {
  const cardSize = size === 'large' ? 'card--large' : 'card--normal';
  return (
    <div className={['card', cardSize].join(' ')}>
      <p>{label}</p>
    </div>
  );
}

export default card;
