import React from 'react';
import styles from '../styles/teams.module.css'; // Import the CSS file correctly using `styles`
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Operations() {
  const operators = [
    {
      name: 'Muhammad Ateeb',
      role: 'Operations Lead',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Khizar Saqib',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mirza Hamza Baig',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Gireesh Sachdev',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];
  return (
    <>
    <div className={styles.QuoteDiv}>
      <img className={styles.Quoteimg} src='/operationsquote.svg' alt=''  />
    </div>
        <div className="row">
      {operators.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className={styles.Rectangle198}>
            <div className={styles.picheader}></div>
            <img className={styles.dotimg} src='/dotimgreen.svg' alt='' />
            <div className={styles.MaskGroup}>
              <div className={styles.Ellipse44}></div>
              <img className={styles.image1} src={item.image1Src} alt="placeholder" />
              <img className={styles.profilepic} src={item.imageSrc} alt="placeholder" />
            </div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.Group718}>
              <div className={styles.Rectangle191}></div>
              <div className={styles.Vector}></div>
              <div className={styles.LinkedinProfile}>{item.linkedinProfile}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
