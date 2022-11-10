import React, { useEffect, useState } from 'react';
//Function GET
import getData from '../../utils/getData';
//Components
import Button from '../../components/Button/Button';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
//Base URL of API
import { baseUrl } from '../../constant';

const ViewElements = ({element}) => {
  //State of elements
  const [listElements, setListElements] = useState();
  //State of next page
  const [page, setPage] = useState();
  //State of spinner
  const [loading, setLoading] = useState();

  //Function to obtain data from API
  const getNewData = async () => {
    setLoading(true);
    setListElements();
    const dataResult = await getData(baseUrl+element);
    setListElements(dataResult.results);
    setPage(dataResult.next);
    setLoading(false);
  };

  //Hook to obtain new data page from API
  useEffect(() => {
    const refetch = async () => {
      await getNewData(baseUrl);
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
    window.scrollTo(0, 0)
  }

  return (
    <>
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
