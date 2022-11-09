import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button';
import List from '../../components/List/List';
import Spinner from '../../components/Spinner/Spinner';
import { baseUrl } from '../../constant';
import getData from '../../utils/getData';

const ViewElements = ({element}) => {
  const [listElements, setListElements] = useState();
  const [page, setPage] = useState();
  const [loading, setLoading] = useState();

  const getNewData = async () => {
    setLoading(true);
    setListElements();
    const dataResult = await getData(baseUrl+element);
    setListElements(dataResult.results);
    setPage(dataResult.next);
    setLoading(false);
  };

  useEffect(() => {
    const refetch = async () => {
      await getNewData(baseUrl);
    }
    refetch();
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
              <div className="text-center pb-4">
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
