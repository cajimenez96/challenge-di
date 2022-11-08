import React from 'react';
import styles from './home.module.css';

const Home = ({title, info}) => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.containerHome}`}>
      <div className="text-center">
        <h1>{title}</h1>
        <p className="p-3">{info}</p>
      </div>
    </div>
  )
}

export default Home;
