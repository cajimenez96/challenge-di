import React, { useState, useEffect } from 'react';
import getList from '../../logic/getList';
import { useParams } from 'react-router';
import Spinner from '../../components/Spinner/Spinner';
import styles from './detailActor.module.css';
import getData from '../../utils/getData';
import { baseUrl } from '../../constant';

const DetailActor = () => {
  const {id} = useParams();
  const [actor, setActor] = useState();
  const [starships, setStarships] = useState();
  const [films, setFilms] = useState();
  const [loading, setLoading] = useState(true);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const url = baseUrl+'people/'+id;

  useEffect(() => {
    const getActor = async () => {
      const dataActor = await getData(url)
      setActor(dataActor);
      const dataStarships = await getList(dataActor.starships)
      setStarships(dataStarships)
      const dataFilms = await getList(dataActor.films)
      setFilms(dataFilms)
      setDataIsLoading(false)
      setLoading(false);
    };
    getActor();
  },[])

    return (
    actor
      ?  <div className="container p-lg-5">
          <h3 className={styles.title}>{actor.name}</h3>
          <div className={`d-flex justify-content-evenly ${styles.containerActor}`}>
            <div>
              <p className={styles.info}>Height: {actor.height}</p>
              <p className={styles.info}>Mass: {actor.mass}</p>
              <p className={styles.info}>Hair color: {actor.hair_color}</p>
            </div>
            <div>
              <p className={styles.info}>Eye color: {actor.skin_color}</p>
              <p className={styles.info}>Birth year: {actor.birth_year}</p>
              <p className={styles.info}>Gender: {actor.gender}</p>
            </div>
          </div>
          <div className="mt-5">
          {
            starships && starships.length > 0 
            ?
              <>
                <h3 className={styles.title}>Starships</h3>
                {
                  <div className="d-flex justify-content-evenly">
                    {
                      starships.map((starship, index) => {
                        return (
                          <div className={`${styles.containerActor}`} key={index}>
                            <p className={`fs-5 ${styles.info}`}>Name: {starship.name}</p>
                            <p className={`fs-5 ${styles.info}`}>Model: {starship.model}</p>
                            <p className={`fs-5 ${styles.info}`}>Manufacturer: {starship.manufacturer}</p>
                            <p className={`fs-5 ${styles.info}`}>Class: {starship.starship_class}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                }
              </>
            :
              <div className="d-flex justify-content-center align-items-center">
                <Spinner status={dataIsLoading} />
              </div>
          }
          </div>
          <div className="mt-5">
          {
            films && films.length > 0 
            ?
              <>
                <h3 className={styles.title}>Films</h3>
                {
                  <div className="d-flex justify-content-evenly">
                    {
                      films.map((film, index) => {
                        return (
                          <div className={`${styles.containerActor}`} key={index}>
                            <p className={`fs-5 ${styles.info}`}>Title: {film.title}</p>
                            <p className={`fs-5 ${styles.info}`}>Director: {film.director}</p>
                            <p className={`fs-5 ${styles.info}`}>Release date: {film.release_date}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                }
              </>
            :
              <div className="d-flex justify-content-center align-items-center">
                <Spinner status={dataIsLoading} />
              </div>
          }
          </div>
        </div>
    : <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner status={loading} />
      </div>
  )
}

export default DetailActor;
