import React from 'react';
import styles from './home.module.css';

const Home = ({title, info}) => {
  //Render the Home component showing the props
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.containerHome}`}>
      <div className={`text-center ${styles.containerHero}`}>
        <span className={styles.title}>{title}</span>
        <p className={`p-3 ${styles.info}`}>{info}</p>
      </div>
    </div>
  )
}

export default Home;
