import React from 'react';
import styles from './CardContainer.module.scss';
import Card from './Card';

function CardContainer() {
  return (
      <div className={styles.main}>
      <h1>stuff i built</h1>
      <div className={styles.cards}>
        <Card title={'quiz'} />
        <Card title={'space x'} />
        <Card title={'notes'} />

      </div>
      </div>
  );
}

export default CardContainer;
