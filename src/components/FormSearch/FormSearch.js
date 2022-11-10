import React from 'react';
//React router dom hook
import { useNavigate } from "react-router-dom";
//Component
import Button from '../Button/Button'; 
//Styles module
import styles from './formSearch.module.css';


const FormSearch = () => {
  //Initialize hook
  const navigate = useNavigate();

  const handleSearch = () => {
    //Get input value
    const element = document.getElementById("search").value;
    //Compare results
    if (element === 'planets' || element === 'starships' || element === 'vehicles' || element === 'peoples' || element === 'films' || element === 'species'){
      //Redirect to url
      navigate(`/${element}`);
    } else {
      //Alert error
      alert("Error in search, please try again");
    }
  }

  return (
    <div className="d-flex ms-auto mt-0 mt-sm-2 w-auto">
      <input className={`form-control ${styles.formSearch}`} type="text" placeholder="planets, starships, vehicles, peoples, films or species" id="search" />
      <Button click={handleSearch} text={'Search'} />
    </div>
  )
}

export default FormSearch;
