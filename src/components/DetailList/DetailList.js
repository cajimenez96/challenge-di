import React from 'react'
import formatListNames from '../../utils/formatListNames'
import styles from './detailList.module.css';

const DetailList = ({list, names}) => {
  return (
    <div className={`d-flex justify-content-evenly flex-wrap ${styles.containerDetail}`}>
      {
        list.map((item, index) => {
          return (
            <div key={index} className={styles.containerInfo}>
              {
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
