import React, { useEffect, useState } from 'react'
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
import { clientAxios } from '../../config/clientAxios';

const ViewElements = ({element}) => {
  const [listElements, setListElements] = useState();
  const [nextPage, setNextPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clientAxios.get(`${element}`)
    .then(response => {
      setListElements(response.data.results);
      setNextPage(response.data.next);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setLoading(!loading))
  }, []);

  return (
    <>
      {
        listElements
        ? <>
            <List list={listElements} page={element} />
          </>
        : <div className="vh-100 d-flex justify-content-center align-items-center">
            <Spinner status={loading} />
          </div>
      }
    </>
  )
}

export default ViewElements;
