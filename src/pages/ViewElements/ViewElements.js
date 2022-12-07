import React, { useEffect, useState } from 'react';
//Function GET
import getData from '../../utils/getData';
//Components
import Button from '../../components/Button/Button';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
//Base URL of API
import { baseUrl } from '../../constant';
import Alert from '../../components/Alert/Alert';

const ViewElements = ({element}) => {
  //State of elements
  const [listElements, setListElements] = useState();
  //State of next page
  const [page, setPage] = useState();
  //State of spinner
  const [loading, setLoading] = useState();
  //State of error get API
  const [error, setError] = useState();

  //Function to obtain data from API
  const getNewData = async (page) => {
    setLoading(true);
    setListElements();
    const dataResult = await getData(page ? page : baseUrl+element);
    //Check status of connection
    if(dataResult.status) {
      setError(dataResult);
    } else {
      setListElements(dataResult.results);
      setPage(dataResult.next);
    }
    setLoading(false);
  };

  //Hook to obtain new data page from API
  useEffect(() => {
    const refetch = async () => {
      await getNewData();
    }
    refetch();
  }, [element]);

  //Function to get the next data page
  const handleAddActors = async () => {
    if (page) {
      getNewData(page);
    }
  }
  //Function to get the next data page
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    error
    //Failed conection to API
    ? <Alert message={error.message} />
    //Conection to API
    :<>
      {//Render list of elements
        listElements
        ? <>
        
            <List list={listElements} page={element} />
            {
              <div className="text-center pb-4">
                {//Render buttons to next page or back to top page
                  listElements.length === 10
                  ? (
                    <Button click={handleAddActors} text={'View more'}/>
                  )
                  : (
                    <Button click={handleScrollTop} text={'Back to top'}/>
                  )
                }
              </div>
            }
          </>
        : <Spinner status={loading} />
      }
    </>
  )
}

export default ViewElements;
