import React, { useEffect, useState } from 'react'
import getData from '../../config/getData';
import { initialPeoplesUrl } from '../../constants/index';

const People = () => {
  const [peopleList, setPeopleList] = useState();

  useEffect(() => {
    const getActors = async () => {
      const result = await getData(initialPeoplesUrl)
      setPeopleList(result.results)
    }
    getActors();
  }, []);

  console.log(peopleList);
  
  return (
    <div className="d-flex justify-content-evenly flex-wrap">
      List of people
    </div>
  )
}

export default People