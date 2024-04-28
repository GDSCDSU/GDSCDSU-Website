import React from 'react';
import styles from '../styles/teams.module.css'; // Import the generated CSS module
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Marketing() {
  const marketers = [
    {
      name: 'Muhammad Bilal',
      role: 'Marketing Lead',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Sahil Bachani',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Taqwa Muhammad',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Radhika Rajwani',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Laiba Kamal Khan',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mahnoor Ahmed',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Amna Tariq',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    }
  ];
  return (
    <>
    <div className="QuoteDiv">
    <img className={styles.Quoteimg} src='/marketingquote.svg' alt='' />
    </div>

      <div className="row">
      {marketers.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className={styles.Rectangle198}>
            <div className={styles.picheader}></div>
            <div className={styles.MaskGroup}>
            <img className={styles.dotimg} src='/dotimgreen.svg' alt='' />
              <div className={styles.Ellipse44}></div>
              <img className={styles.image1} src={item.image1Src} alt="placeholder" />
            </div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.Group718}>
              <div className={styles.Rectangle191}></div>
              <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
              <div className={styles.LinkedinProfile}>{item.linkedinProfile}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};
