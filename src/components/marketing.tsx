import React from 'react';
import styles from '../styles/teams.module.css'; // Import the generated CSS module
import Image from 'next/image';

export default function Marketing() {
  return (
    <>
    <div className="QuoteDiv">
    <Image src='/marketingquote.svg' alt='' width={400} height={400} />
    </div>
      <div className={styles.Rectangle198}>
        <div className={styles.picheader}></div>
        <div className={styles.MaskGroup}>
          <div className={styles.Ellipse44}></div>
          <img className={styles.image1} src="https://via.placeholder.com/94x94" alt="placeholder" />
          <img className={styles.image} src="https://via.placeholder.com/94x94" alt="placeholder" />
        </div>  
        <div className={styles.name}>Muhammad Bilal</div>
        <div className={styles.role}>Marketing Lead</div>
        <div className={styles.Group718}>
          <div className={styles.Rectangle191}></div>
          <div className={styles.Vector}></div>
          <div className={styles.LinkedinProfile}>LinkedIn Profile</div>
        </div>  
      </div>      
    </>
  );
};
