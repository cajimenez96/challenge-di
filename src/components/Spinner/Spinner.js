import React from 'react';
//Styles module
import styles from './spinner.module.css';

const Spinner = ({status}) => {
  //status -> State to render the component (true or false)
  return (
    <div
      className= {!status ? styles.viewSpinner : "d-flex justify-content-center align-items-center vh-100"}
    >
      <div className="spinner-border text-warning">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner;
