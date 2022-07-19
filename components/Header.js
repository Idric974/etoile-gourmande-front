/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Header.module.css';
import Modal from './Modal';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className={styles.box}>
        <img
          className={styles.saveurDataImage}
          src={
            'https://firebasestorage.googleapis.com/v0/b/l-etoile-a-gourmandise.appspot.com/o/images%2FHeader%2FLogo_Alternative_L_Etoile_a_gourmandise_200x.webp?alt=media&token=56e33729-8dc4-4466-bf39-a7c9a4bdeab6'
          }
          alt={''}
        />
        <i onClick={() => setOpenModal(true)}></i>
      </div>
    </div>
  );
}
