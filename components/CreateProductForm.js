/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from 'react';
import { timestampParser } from '../utils/Utils';
import styles from '../styles/components/CreateProduct.module.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../utils/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from '../utils/firebaseDada';

const CreateProduct = () => {
  //

  //! LES VARIABLES.

  //! -------------------------------------------------

  //! LES CONSTANTES.

  const productName = useRef();
  const price = useRef();
  const description = useRef();

  //! -------------------------------------------------

  //! LOGIQUE POUR LA MISE À JOUR D'UNE IMAGE.

  const [imageUpload, setimageUpload] = useState(null);
  const [postPicture, setPostPicture] = useState(null);

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0])); //* Prévisualisation.
    setimageUpload(e.target.files[0]); //* upload.
  };

  //! -------------------------------------------------

  //! LOGIQUE POUR LA CREATION D'UN PRODUIT.

  let date = new Date().getTime();
  let imageUrl;
  let data;
  let postDate = new Date();
  let userImageFileName;

  //? les fonctions.

  //* Création de l'image.

  function imageCreator() {
    return new Promise((resolve, reject) => {
      if (imageUpload == null) return;

      const imageRef = ref(storage, `images/${imageUpload.name + date}`);

      // console.log('imageRef : ', imageRef);

      uploadBytes(imageRef, imageUpload)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            //
            userImageFileName = snapshot.ref._location.path_;
            console.log(
              "✅ 1/2 %c SUCCÈS CreateProductForm ==> Création d'une image réussie : ",
              'color: green',
              url
            );
            imageUrl = url;
            resolve();
          });
        })
        .catch((error) => {
          console.log(
            "❌ 1/2 %c ERREUR UpdateProfile ==> Création d'une image échouée : ",
            'color: orange',
            error
          );

          reject();
        });
    });
  }

  //* -------------------------------------------------

  //* Création de la data.

  function dataCreator() {
    return new Promise((resolve, reject) => {
      if (imageUpload == null) return;

      try {
        const docRef = addDoc(collection(db, 'products'), {
          productName: productName.current.value,
          price: price.current.value,
          description: description.current.value,
          imageUrl,
        }).then((data) => {
          console.log(
            '✅ 2/2 %c SUCCÈS CreateProductForm ==> Création de la data réussie : ',
            'color: green',
            data._key.path.segments[1]
          );
        });

        resolve();
      } catch (e) {
        console.log(
          '❌ 2/2 %c ERREUR UpdateProfile ==> Création de la data échouée : ',
          'color: orange',
          e
        );
        reject();
      }
    });
  }

  //* -------------------------------------------------

  //? -------------------------------------------------

  //? Exécution des fonctions.

  async function handlePost(e) {
    e.preventDefault();

    // console.log('Nom du produit : ', productName.current.value);
    // console.log('Prix de produit : ', price.current.value);
    // console.log('Description du produit : ', description.current.value);
    // console.log("Nom de l'image du produit : ", imageUpload.name);

    try {
      //
      await imageCreator();

      await dataCreator();

      //
    } catch (err) {
      //
      console.log(
        "❌ %c Erreur dans l'éxécution des fonctions : ",
        'color: orange',
        err
      );
    }
  }

  //? -------------------------------------------------

  //! -------------------------------------------------

  return (
    <div className={styles.ComponentsBox}>
      <form onSubmit={(e) => handlePost(e)}>
        {/* '' */}
        <div className={styles.formInput}>
          <label className={styles.formInputLabel}>Nom produit</label>
          <div className={styles.formInputBox}>
            <input type="text" required ref={productName} />
          </div>
        </div>

        <div className={styles.formInput}>
          <label className={styles.formInputLabel}>Prix</label>
          <div className={styles.formInputBox}>
            <input type="number" step="0.01" required ref={price} />
          </div>
        </div>

        <div className={styles.formInput}>
          <label className={styles.formInputLabel}>Description</label>
          <textarea
            id="descriptionId"
            name="description"
            required
            ref={description}
            rows="4"
            cols="50"
          ></textarea>
        </div>

        {/** Image de l'article **/}
        <div className={styles.prewieuImageBox}>
          <div>
            <img className={styles.prewieuImage} src={postPicture} alt="" />
          </div>
        </div>

        <div className={styles.formInputImage}>
          <label className={styles.formInputLabelImage}>
            Télécharger une image
          </label>
          <div className={styles.formInputBoxFile}>
            <input
              className={styles.inputImage}
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handlePicture(e)}
            />
          </div>
        </div>

        <div className={styles.formInputButtonBox}>
          <input
            className={styles.formInputButton}
            type="submit"
            value="Créer le produit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
