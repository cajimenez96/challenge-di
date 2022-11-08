import React from 'react'
import Card from '../Card/Card'

const List = ({list, page}) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      { list &&
          page === 'films'
          ?  list.map((films, index) => {
              return (
                  <Card name={films.title} info={films.opening_crawl} page={page} key={index}/>
              );
          })
          
          : page === 'people'
          ?  list.map((people, index) => {
              return (
                <Card name={people.name} page={page}  key={index}/>
              );
            })
          : <>Proximamente</>
      }
    </div>
  )
}

export default List;
