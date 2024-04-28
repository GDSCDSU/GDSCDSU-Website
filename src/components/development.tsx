import React from 'react';
import styles from '../styles/teams.module.css'; // Import the generated CSS file correctly using `styles`
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      
      <div className='QuoteDiv'>
        <img className={styles.Quoteimg} src='/developmentquote.svg' alt='' />
      </div>

          <div className="row">
      {developers.map((item, index) => (
        <div className="col-lg-4" key={index}>
          <div className={styles.Rectangle198}>
            <div className={styles.picheader}></div>
            <div className={styles.MaskGroup}>
            <img className={styles.dotimg} src='/dotbackground.svg' alt='' />
              <div className={styles.Ellipse44}></div>
              <img className={styles.image1} src={item.imageSrc} alt="placeholder" />
              <img className={styles.profilepic} src={item.imageSrc} alt="placeholder" />
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
