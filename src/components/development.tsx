import React from 'react';
import styles from '../styles/teams.module.css'; // Import the generated CSS file correctly using `styles`
import Image from 'next/image';

export default function Development() {
  const developers = [
    {
      name: 'Muhammad Arbaz Sohail',
      role: 'Executive Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Ali Osaid',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Muhammad Amish Toor',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Haris Muhammad Imran',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Bisharat Ali',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Qirrat Azam',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];
  return (
    <>
      <div className={styles.QuoteDiv}>
        <Image src='/developmentquote.svg' alt='' width={400} height={400} />
      </div>
      {developers.map((item, index) => (
        <div className={styles.Rectangle198} key={index}>
          <div className={styles.picheader}></div>
          <div className={styles.MaskGroup}>
            <div className={styles.Ellipse44}></div>
            <img className={styles.image1} src={item.imageSrc} alt="placeholder" />
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
      ))}
    </>
  );
};
