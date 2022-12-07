import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Function GET
import getData from '../../utils/getData';
import getList from '../../logic/getList';
//Props of element to API
import { actorsList, filmsList, starshipsVehicleList, speciesList, planetsList } from '../../data';
//Formatter
import formatListNames from '../../utils/formatListNames';
//Components 
import Alert from '../../components/Alert/Alert';
import Spinner from '../../components/Spinner/Spinner';
//Base URL of API
import { baseUrl } from '../../constant';
//CSS Module
import styles from './detailElement.module.css';
import MiniCard from '../../components/MiniCard/MiniCard';

const DetailElement = ({element}) => {
  //Params
  const {id} = useParams();

  //State of error get API
  const [error, setError] = useState();

  //State of data attributes
  const [listElement, setListElements] = useState();

  //State of data from API
  const [item, setItem] = useState();

  //State of other API data
  const [films, setFilms] = useState();
  const [planets, setPlanets] = useState();
  const [species, setSpecies] = useState();
  const [actors, setActors] = useState();
  const [starships, setStarships] = useState();

  //State to spinner
  const [loading, setLoading] = useState(true);
  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    //URL API
    const url = baseUrl+element+id;

    const getElement = async () => {   
      //Obtain element to API
      const dataElement = await getData(url);

      //Check status of connection
      if(dataElement.status){
        setError(dataElement)
      } else {
        setItem(dataElement);
      }

      //Obtain other element to API
      if (element === 'films/') {
        setListElements(filmsList);
        const dataPlanets = await getList(dataElement.planets)
        setPlanets(dataPlanets);
        const dataSpecies = await getList(dataElement.species)
        setSpecies(dataSpecies);

      } else if (element === 'people/') {
        setListElements(actorsList);
        const dataStarships = await getList(dataElement.starships);
        setStarships(dataStarships);
        const dataFilms = await getList(dataElement.films);
        setFilms(dataFilms);
      } else if (element === 'planets/') {
        setListElements(planetsList);
        const dataFilms = await getList(dataElement.films);
        setFilms(dataFilms);
      } else if (element === 'species/') {
        setListElements(speciesList);
        const dataFilms = await getList(dataElement.films);
        setFilms(dataFilms);
        const dataActors = await getList(dataElement.people);
        setActors(dataActors);
      } else {
        setListElements(starshipsVehicleList);
        const dataFilms = await getList(dataElement.films);
        setFilms(dataFilms);
      }

      //Change state of spinner
      setDataIsLoading(false);
      setLoading(false);
    }

    //Invocation to function
    getElement();
  
  },[]);


  return (
    error
    ? <Alert message={error.message} />
    : <div className={`container ${styles.containerDetail}`}>
      {//Render element from APO
        item 
        ? <div className="my-5">
            <h2 className={styles.title}>{item.name}{item.title}</h2>
            <div className={styles.containerItem}>
              {//Render props to element
                listElement.map((name, index) => {
                  if (name === 'name' | name === 'title') {
                    return (
                      <div key={index}></div>
                    )
                  } else {
                    return (
                      <p className={styles.info} key={index}>
                        {formatListNames(name)}: {item[name]}
                      </p>
                    )
                    }
                  })
                }
              </div>
          </div>
        : <Spinner status={loading} />
      }
      {//Render starships only if they exist
        starships && starships.length > 0
        ? <MiniCard title={'STARSHIPS'} listItems={starships} nameList={starshipsVehicleList} />
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render planets only if they exist
        planets && planets.length > 0
        ? <MiniCard title={'PLANETS'} listItems={planets} nameList={planetsList} />
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render species only if they exist
        species && species.length > 0
        ? <MiniCard title={'SPECIES'} listItems={species} nameList={speciesList} />
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render films only if they exist
        films && films.length > 0
        ? <MiniCard title={'FILMS'} listItems={films} nameList={filmsList} />
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render actors only if they exist
        actors && actors.length > 0
        ? <MiniCard title={'ACTORS'} listItems={actors} nameList={actorsList} /> 
        : <Spinner status={dataIsLoading} /> 
      }
    </div>
  )
}

export default DetailElement;
