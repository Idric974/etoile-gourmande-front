/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/components/Card.module.css';
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

  //! Affichage de l'iamge de l'emballage.

  const [emballage, setEmballage] = useState('');
  const [imageEmballage, setImageEmballage] = useState('');

  let emballageImage;

  useEffect(() => {
    if (emballage == 'Sélectionnez votre emballage') {
      return;
    } else if (emballage == '0') {
      setImageEmballage(
        'https://firebasestorage.googleapis.com/v0/b/l-etoile-a-gourmandise.appspot.com/o/images%2FEmballage%2Femballage_1.jpg?alt=media&token=fc887128-98af-43bc-b7b3-d53daf1a71e5'
      );
    } else if (emballage == '1.5') {
      setImageEmballage(
        'https://firebasestorage.googleapis.com/v0/b/l-etoile-a-gourmandise.appspot.com/o/images%2FEmballage%2Femballage_2.jpg?alt=media&token=4ab053d6-97c2-4622-b4ad-bc3626170831'
      );
    } else if (emballage == '2.5') {
      setImageEmballage(
        'https://firebasestorage.googleapis.com/v0/b/l-etoile-a-gourmandise.appspot.com/o/images%2FEmballage%2Femballage_3.jpg?alt=media&token=16adfbd6-8fd2-4d90-98c3-1e8277318a8b'
      );
    }
  }, [emballage]);

  //! --------------------------------------------------

  //! Le profil de l'auteur du post.

  // useEffect(() => {
  //   console.log("⭐ CompCard ===>  Le profil de l'auteur du post :", usersData);
  // }, [usersData]);

  //! --------------------------------------------------

  async function addToCart(e) {
    e.preventDefault();
    console.log('Test button');
  }

  return (
    <div className={styles.box}>
      <li className={styles.cards}>
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} />
        ) : (
          <div className={styles.saveurBox}>
            {/* Bloc Saveurs */}

            <div className={styles.saveurBoxImage}>
              {' '}
              <img
                className={styles.saveurImage}
                src={post.imageUrl}
                alt={''}
              />
            </div>

            <div className={styles.saveurBoxData}>
              <div className={styles.saveurDataTitle} id="mangue-passion-Id">
                {post.productName}
              </div>

              <div
                className={styles.saveurDataDescription}
                id="mangue-passion-Id"
              >
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

                <div className={styles.saveurDataQteNumber}>
                  <input
                    className={styles.saveurDataQteNumber}
                    type="number"
                    step="1"
                    id='id="mangue-passion-Qte"'
                  ></input>
                </div>
              </div>

              <div className={styles.saveurDataEmaballage}>
                <select
                  className={styles.saveurDataEmaballageSelect}
                  type="select"
                  id="emballageId"
                  name="emballage"
                  onChange={(e) => setEmballage(e.target.value)}
                >
                  <optgroup>
                    <option>{'Sélectionnez votre emballage'}</option>
                    <option value="0">{'Box à partager (OFFERTE)'}</option>
                    <option value="1.5">{'Sachet à offrir 1,50€'}</option>
                    <option value="2.5">
                      {'Box à offrir à partir de 2,50€'}
                    </option>
                  </optgroup>
                </select>
              </div>

              <div className={styles.saveurDataEmaballageVisu}>
                {' '}
                <img
                  className={styles.saveurImageVisu}
                  src={imageEmballage}
                  alt={''}
                />
              </div>

              <div className={styles.addToCardButtonBox}>
                <button className={styles.addToCardButton} onClick={addToCart}>
                  Ajouter à mon panier
                </button>
              </div>
            </div>
          </div>
        )}
      </li>
    </div>
  );
};

export default Card;
