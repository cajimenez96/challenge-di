import React from 'react';
//React router dom
import { Link } from 'react-router-dom';
//React icons
import { FaUserAlt as People, FaRocket as Starships, FaGlobe as Planets, FaVideo as Films, FaTransgenderAlt as Species, FaTruckMonster as Vehicles } from "react-icons/fa";
//Component
import Button from '../Button/Button';
//Styles module
import styles from './cards.module.css';

const Card = ({url, name, info, page}) => {
  //url -> id of page
  //name -> name of element
  //info -> info of element
  //page -> params of page

  //Render icon function
  const renderIcon = () => {
    switch (page) {
      case 'people':
        return <People />;
      case'starships':
        return <Starships />;
      case 'planets':
        return <Planets />;
      case 'films':
        return <Films />;
      case'species':
        return <Species />;
      default:
         return <Vehicles />;
    }
  }


  return (
    <div className={`card ${styles.cardContainer}`}>
      <div className={`card-body ${styles.cardBody}`}>
        <div className={`d-flex ${styles.cardTitle}`}>
          {//Render icons
            renderIcon()
          }
          <h5 className="card-title ms-3">{name}</h5>
        </div>
        {//Render info of element
          info &&
            <p className={`card-text ${styles.cardText}`}>{info}</p>
        }
        {/* Render button to view element */}
        <div className="text-end">
          <Link to={`/${page}/${(url).match(/[0-9]+/)}`}>
            <Button text={'View'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
