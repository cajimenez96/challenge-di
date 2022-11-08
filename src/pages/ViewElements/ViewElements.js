import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
// import { clientAxios } from '../../config/clientAxios';

const ViewElements = ({element}) => {
  const [listElements, setListElements] = useState();
  const [page, setPage] = useState();
  const [loading, setLoading] = useState();

  let baseUrl = process.env.REACT_APP_SWAPI_API_URL+element;

  const getNewData = (baseUrl) => {
    setLoading(true);
    setListElements();
    axios.get(baseUrl)
    .then(response => {
      setListElements(response.data.results);
      setPage(response.data.next);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setLoading(!loading))
  };

  useEffect(() => {
    const getData = () => {
      getNewData(baseUrl);
    }
    getData();
  }, [element]);

  const handleAddActors = async () => {
    if (page) {
      getNewData(page);
    }
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        listElements
        ? <>
            <List list={listElements} page={element} />
            {
              <div className="text-end w-75">
                {listElements.length === 10
                ? (
                  <Button click={handleAddActors} text={'View more'}/>
                )
                : (
                  <Button click={handleScrollTop} text={'Back to top'}/>
                )}
              </div>
            }
          </>
        : <div className="vh-100 d-flex justify-content-center align-items-center">
            <Spinner status={loading} />
          </div>
      }
    </>
  )
}

export default ViewElements;
