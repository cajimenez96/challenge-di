import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
import getData from '../../config/getData';
import { initialPeoplesUrl } from '../../constants/index';

const People = () => {
  const [peopleList, setPeopleList] = useState();
  const [statusSpinner, setStatusSpinner] = useState(true);
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    const getActors = async () => {
      const result = await getData(initialPeoplesUrl);
      setPeopleList(result.results);
      setNextPage(result.next);
      setStatusSpinner(!statusSpinner);
    }
    getActors();
  }, []);


  const handleAddActors = async () => {
    if (nextPage) {
      const res = await getData(nextPage)
      setPeopleList([...peopleList, ...res.results])
      setNextPage(res.next)
    }
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  }
  
  return (
    <>
    {
      peopleList
      ? (
          <>
            <List list={peopleList} page="people" />
            {
              <div className="w-75 text-end my-3">
                {
                peopleList.length < 82 
                  ? (
                      <Button click={handleAddActors} text={"View more"}/>
                    ) 
                  : (
                      <Button click={handleScrollTop} text={"Back to top"}/>
                    )
                }
              </div>
            }
          </>
        )
      : (
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <Spinner status={statusSpinner}/>
          </div>
        )
    }
    </>
  )
}

export default People;
