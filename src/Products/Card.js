/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/pages/Index.module.css';
import React, { useEffect, useState } from 'react';
import { dateParser, isEmpty } from '../../utils/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThumbsUp,
  faSpinner,
  faPhone,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faSpinner, faPhone, faHeart);

const Card = ({ post }) => {
  // console.log('🔺 POST DATA 🔺 ', doc);

  const [isLoading, setIsLoading] = useState(false);

  //! Le profil de l'auteur du post.

  // useEffect(() => {
  //   console.log("⭐ CompCard ===>  Le profil de l'auteur du post :", usersData);
  // }, [usersData]);

  //! --------------------------------------------------

  //! Stopper le isLoading.

  //! --------------------------------------------------

  return (
    <div className={styles.box}>
      <li className={styles.cards}>
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} />
        ) : (
          <div className={styles.saveurBox}>
            {/* Bloc Saveurs */}

            <div className={styles.saveurContenerBox}>
              <div className={styles.saveurImage}></div>

              <div className={styles.saveurData}>
                <div className={styles.saveurDataImageBox}>
                  {' '}
                  <img
                    className={styles.saveurDataImage}
                    src={post.imageUrl}
                    alt={''}
                  />
                </div>

                <div className={styles.saveurDataTitle} id="mangue-passion-Id">
                  {post.productName}
                </div>

                <div className={styles.saveurDataTitle} id="mangue-passion-Id">
                  {post.description}
                </div>

                <div className={styles.saveurDataPrix}>
                  <div className={styles.saveurDataTextItem}>{'Prix : '}</div>
                  <div
                    className={styles.saveurDataTextNumber}
                    id="mangue-passion-Prix"
                  >
                    {post.price}
                    {' €'}
                  </div>
                </div>

                <div className={styles.saveurDataQte}>
                  <div className={styles.saveurDataQteText}>
                    {'Lot de 10 unités : '}
                  </div>
                  <input
                    className={styles.saveurDataQteNumber}
                    type="number"
                    step="1"
                    id='id="mangue-passion-Qte"'
                  ></input>
                </div>

                <div className={styles.myCheckboxBox}>
                  <button onClick={'addToCart'}>Ajouter à mon panier</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    </div>
  );
};

export default Card;
