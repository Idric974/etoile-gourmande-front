import React from 'react';
import styles from '../styles/pages/Products.module.css';
import ComponentsBox from '../components/CreateProductForm';

const product = () => {
  return (
    <div className={styles.box}>
      <ComponentsBox></ComponentsBox>
    </div>
  );
};

export default product;
