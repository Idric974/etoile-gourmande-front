import React from 'react';
import styles from '../styles/components/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.footerBox}>
        <a href="#">
          <i className="fa-brands fa-facebook duration-300 hover:opacity-30 cursor-pointer"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
        </a>
      </div>
    </div>
  );
}
