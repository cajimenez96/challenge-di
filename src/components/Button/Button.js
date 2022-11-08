import React from 'react'
import styles from './button.module.css';

const Button = ({text, click}) => {
  return (
    <button type="button" onClick={click} className={`btn ${styles.btnDark}`}>{text}</button>
  )
}

export default Button;
