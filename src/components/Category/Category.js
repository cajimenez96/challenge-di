import React from 'react';
import styles from './category.module.css';

const Category = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className={`nav-link ${styles.linkCategory}`} aria-current="page" href="#">Films</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.linkCategory}`} href="#">People</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.linkCategory}`} href="#">Planets</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.linkCategory}`} href="#">Species</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.linkCategory}`} href="#">Starships</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${styles.linkCategory}`} href="#">Vehicles</a>
      </li>
    </ul>
  )
}

export default Category