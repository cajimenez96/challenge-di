import React from 'react'

const Category = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Films</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">People</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Planets</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Species</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Starships</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Vehicles</a>
      </li>
    </ul>
  )
}

export default Category