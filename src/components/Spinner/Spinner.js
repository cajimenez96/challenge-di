import React from 'react';
import styles from './spinner.module.css';

const Spinner = ({status}) => {
  return (
    <div className={!status && styles.viewSpinner}>
      <div className="spinner-border text-warning">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner;
