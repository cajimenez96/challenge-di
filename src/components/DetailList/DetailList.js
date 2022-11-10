import React from 'react';
//Formatter text
import formatListNames from '../../utils/formatListNames'
//Styles module
import styles from './detailList.module.css';

const DetailList = ({list, names}) => {
  //list -> list of element of data API
  //names -> element attributes
  return (
    <div className={`d-flex justify-content-evenly flex-wrap ${styles.containerDetail}`}>
      {//Render the list
        list.map((item, index) => {
          return (
            <div key={index} className={styles.containerInfo}>
              {//Render elements based on their attributes
                names.map((name, index) => {
                  if (name === 'name' | name === 'title') {
                    return (
                      <p className={styles.info} key={index}>{item.name}</p>
                    )
                  } else {
                    return (
                      <p className={styles.info} key={index}>
                        {formatListNames(name)}: {item[name]}
                      </p>
                    )
                  }
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default DetailList;
