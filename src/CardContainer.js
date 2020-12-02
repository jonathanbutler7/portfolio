import React from 'react';
import styles from './CardContainer.module.scss';
import Card from './Card'

function CardContainer() {
  return (
    <div className={styles.main}>
      <Card title={'project 1'}/>
      <Card title={'project 2'}/>
      <Card title={'project 3'}/>
    </div>
  );
}

export default CardContainer;
