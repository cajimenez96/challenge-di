import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../utils/getData';
import getList from '../../logic/getList';
import { actorsList, filmsList, starshipsVehicleList, speciesList, planetsList } from '../../data';
import formatListNames from '../../utils/formatListNames'
import DetailList from '../../components/DetailList/DetailList';
import Spinner from '../../components/Spinner/Spinner';
import { baseUrl } from '../../constant';
import styles from './detailElement.module.css';

const DetailElement = ({element}) => {
  const {id} = useParams();
  const [listElement, setListElements] = useState();

  const [item, setItem] = useState();
  const [films, setFilms] = useState();
  const [planets, setPlanets] = useState();
  const [species, setSpecies] = useState();
  const [actors, setActors] = useState();
  const [starships, setStarships] = useState();

  const [loading, setLoading] = useState(true);
  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    const url = baseUrl+element+id;

    const getElement = async () => {   
      const dataElement = await getData(url);
      setItem(dataElement);

      if (element === 'films/') {
        setListElements(filmsList);
        const dataStarships = await getList(dataElement.starships);
        setStarships(dataStarships);
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
      }

      const dataFilms = await getList(dataElement.films);
      setFilms(dataFilms);

      setDataIsLoading(false);
      setLoading(false);
    }

    getElement();
  
  },[]);

  return (
    <div className={`container ${styles.containerDetail}`}>
      {item
      ? <div className="my-5">
          <h2 className={styles.title}>{item.name}{item.title}</h2>
          <div className={styles.containerItem}>
            {
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
      : <Spinner status={loading} />}
      {
        starships && starships.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>STARSHIPS</h3>
            <DetailList list={starships} names={starshipsVehicleList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {
        planets && planets.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>PLANETS</h3>
            <DetailList list={planets} names={planetsList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {
        species && species.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>SPECIES</h3>
            <DetailList list={species} names={speciesList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {
        films && films.length > 0
        ? <div className="my-5">
            <h3 className={styles.title}>FILMS</h3>
            <DetailList list={films} names={filmsList} />
          </div>
        : <Spinner status={dataIsLoading} /> 
      }
      {
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
