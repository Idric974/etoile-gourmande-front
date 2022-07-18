/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../../styles/components/ThreadProducts.module.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../utils/Utils';
import Card from './Card';

const ThreadProducts = () => {
  // const { todos, setTodos, loading, error } = useFetchTodos();

  const posts = useSelector((state) => state.productCRUDReducer);
  console.log('⭐ CompThread ===>  Les produit :', posts);

  // let product = posts.data();
  // console.log('product : ', product);

  return (
    <div className={styles.box}>
      <ul className={styles.postBoxDiv}>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post.postDate} />;
          })}
      </ul>
    </div>
  );
};

export default ThreadProducts;
