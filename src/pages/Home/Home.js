import React from 'react';
import styles from './home.module.css';

const Home = ({title, info}) => {
  //Render the Home component showing the props
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.containerHome}`}>
      <div className={`${styles.containerHero}`}>
        <span className={styles.title}>{title}</span>
        <div className="ms-auto">
          <p className={`${styles.info}`}>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
