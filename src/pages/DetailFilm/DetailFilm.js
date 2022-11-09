import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getData from '../../utils/getData';
import Spinner from '../../components/Spinner/Spinner';
import { baseUrl } from '../../constant';
import styles from './detailFilm.module.css';

const DetailFilm = () => {
  const {id} = useParams();
  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(true);
  const url = baseUrl+'films/'+id;

  useEffect(() => {
    const getFilm = async () => {
      setLoading(true);
      const dataFilm = await getData(url);
      setFilm(dataFilm);
      setLoading(!loading);
    }
    getFilm();
  },[])

  return (
    film
    ? <div className="container p-lg-5">
        <h3 className={styles.title}>{film.title}</h3>
        <div className={styles.containerActor}>
          <p className={styles.info}>Episode ID: {film.episode_id}</p>
          <p className={styles.info}>Director: {film.director}</p>
          <p className={styles.info}>Producer: {film.producer}</p>
          <p className={styles.info}>Release date: {film.release_date}</p>
          <p className={styles.info}>Opening crawl: {film.opening_crawl}</p>
        </div>
      </div>
    : <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner status={loading} />
      </div>
  )
}

export default DetailFilm;
