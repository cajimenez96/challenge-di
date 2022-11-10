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
import DetailList from '../../components/DetailList/DetailList';
import Spinner from '../../components/Spinner/Spinner';
//Base URL of API
import { baseUrl } from '../../constant';
//CSS Module
import styles from './detailElement.module.css';

const DetailElement = ({element}) => {
  //Params
  const {id} = useParams();

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
      setItem(dataElement);

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
    <div className={`container ${styles.containerDetail}`}>
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
        ? <div className="my-5">
            <h3 className={styles.title}>STARSHIPS</h3>
            <DetailList list={starships} names={starshipsVehicleList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render planets only if they exist
        planets && planets.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>PLANETS</h3>
            <DetailList list={planets} names={planetsList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render species only if they exist
        species && species.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>SPECIES</h3>
            <DetailList list={species} names={speciesList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render films only if they exist
        films && films.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>FILMS</h3>
            <DetailList list={films} names={filmsList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {//Render actors only if they exist
        actors && actors.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>ACTORS</h3>
            <DetailList list={actors} names={actorsList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
    </div>
  )
}

export default DetailElement;
