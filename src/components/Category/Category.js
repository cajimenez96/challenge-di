import React from 'react';
//React router dom
import { Link } from 'react-router-dom';
//Styles module
import styles from './category.module.css';

const Category = () => {
  return (
    <ul className="nav justify-content-center">
      {/* Render list of data from API */}
      <li className="nav-item">
        <Link className={`nav-link ${styles.linkCategory}`} aria-current="page" to="/films">Films</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${styles.linkCategory}`} to="/peoples">Actors</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${styles.linkCategory}`} to="/planets">Planets</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${styles.linkCategory}`} to="/species">Species</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${styles.linkCategory}`} to="/starships">Starships</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${styles.linkCategory}`} to="/vehicles">Vehicles</Link>
      </li>
    </ul>
  )
}

export default Category