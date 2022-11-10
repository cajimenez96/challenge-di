import React from 'react';
//React router dom
import { Link } from 'react-router-dom';
//React icons
import { FaAlignJustify } from "react-icons/fa";
//Component
import FormSearch from '../FormSearch/FormSearch';
//Image logo
import logo from '../../assets/images/logo.png';
//Styles module
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.containerNav}`}>
      <div className="container-fluid mt-0">
        <Link to="/">
          <img className={styles.titleNavbar} src={logo} alt="Star Wars" />
        </Link>
        <button className={`navbar-toggler ${styles.togglerBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle navigation">
          <FaAlignJustify className={styles.navbarTogglerIcon} />
        </button>
        <div className={`collapse navbar-collapse ${styles.collapseForm}`} id="navbarSearch">
          <FormSearch />
        </div>
      </div>
    </nav>
  )
}

export default Navbar