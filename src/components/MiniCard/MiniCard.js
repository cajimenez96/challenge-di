import React from 'react';
//Components 
import DetailList from '../../components/DetailList/DetailList';
//CSS Module
import styles from './miniCard.module.css';


const MiniCard = ({title , listItems, nameList}) => {
  return (
    <div className="my-5">
      <h3 className={styles.title}>{title}</h3>
      <DetailList list={listItems} names={nameList} />
    </div>
  )
}

export default MiniCard;
