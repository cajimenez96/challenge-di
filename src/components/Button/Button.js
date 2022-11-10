import React from 'react';
//Styles module
import styles from './button.module.css';

const Button = ({text, click}) => {
  //text -> text of button
  //click -> onClick function name
  return (
    <button type="button" onClick={click} className={`btn ${styles.btnDark}`}>{text}</button>
  )
}

export default Button;
