import React from 'react';
import styles from './cards.module.css';
import { FaUserAlt, FaRocket, FaGlobe, FaVideo, FaTransgenderAlt, FaTruckMonster } from "react-icons/fa";

const Cards = ({name, model, page}) => {
  return (
    <div className={`card ${styles.cardContainer}`}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          { page === 'films'
           ? <FaVideo />
           : page === 'people'
              ? <FaUserAlt />
              : page === 'planets'
                ? <FaGlobe />
                : page === 'species'
                  ? <FaTransgenderAlt />
                  : page === 'starships'
                    ? <FaRocket />
                    : <FaTruckMonster />
          }
          <h5 className="card-title ms-3">{name}</h5>
        </div>
        <p className="card-text p-2">{model}</p>
        <div className="text-end">
          <a href='/' className="btn btn-secondary">View more</a>
        </div>
      </div>
    </div>
  )
}

export default Cards
