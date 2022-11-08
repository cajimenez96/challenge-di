import React from 'react';
import styles from './cards.module.css';

const Cards = () => {
  return (
    <div className={`card ${styles.cardContainer}`}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default Cards
