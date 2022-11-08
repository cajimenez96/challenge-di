import React from 'react'
import Card from '../Card/Card'

const List = ({list, page}) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      { list && page &&
          page === 'films'
        ?  list.map((films, index) => {
            return (
              <Card name={films.title} info={films.opening_crawl} page={page} key={index}/>
            );
          })
        : list.map((element, index) => {
            return (
              <Card name={element.name} page={page} key={index}/>
            )
          })
      }
    </div>
  )
}

export default List;
