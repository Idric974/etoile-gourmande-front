/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import styles from '../styles/components/CreateProduct.module.css';

const CreateProduct = () => {
  //

  //! les variables.

  //! -------------------------------------------------

  //! Les constantes.

  const productName = useRef();
  const price = useRef();
  const description = useRef();

  //! -------------------------------------------------

  //! Logique pour la création de l'image.

  const [imageUpload, setimageUpload] = useState(null);
  const [postPicture, setPostPicture] = useState(null);

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0])); //* Prévisualisation.
    setimageUpload(e.target.files[0]); //* upload.
  };

  //! -------------------------------------------------

  async function handleRegister(e) {
    e.preventDefault();

    console.log('Nom du produit : ', productName.current.value);
    console.log('Prix de produit : ', price.current.value);
    console.log('Description du produit : ', description.current.value);
    console.log('Image du produit : ', imageUpload);
  }

  return (
    <div className={styles.ComponentsBox}>
      <form onSubmit={(e) => handleRegister(e)}>
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
