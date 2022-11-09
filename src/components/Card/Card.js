import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cards.module.css';
import { FaUserAlt, FaRocket, FaGlobe, FaVideo, FaTransgenderAlt, FaTruckMonster } from "react-icons/fa";
import Button from '../Button/Button';

const Card = ({name, info, page}) => {
  return (
    <div className={`card ${styles.cardContainer}`}>
      <div className={`card-body ${styles.cardBody}`}>
        <div className={`d-flex ${styles.cardTitle}`}>
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
        <p className={`card-text ${styles.cardText}`}>{info}</p>
        <div className="text-end">
          <Link to='/'>
            <Button text={'View'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
