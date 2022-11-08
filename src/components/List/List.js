import React from 'react'
import Card from '../Card/Card'

const List = ({list, page}) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      { list &&
        list.map((people, index) => {
          return (
            <Card name={people.name} page={page}/>
          )
        })
      }
    </div>
  )
}

export default List;
