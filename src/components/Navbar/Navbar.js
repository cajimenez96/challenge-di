import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { FaAlignJustify } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

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
          <form className="d-flex ms-auto mt-0 mt-sm-2 w-auto" role="search">
            <input className="form-control me-2 w-100" type="search" placeholder="Planets, Spaceships, Vehicles, People, Films or Species" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar