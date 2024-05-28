import React from 'react';
import styles from '../styles/teams.module.css'; // Import the CSS file correctly using `styles`
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Operations() {
  const operators = [
    {
      name: 'Muhammad Ateeb',
      role: 'Operations Lead',
      imageSrc: 'executives/muhammad_ateeb.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Khizar Saqib',
      role: 'Event Management Lead',
      imageSrc: 'operations/khizar_saqib.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mirza Hamza Baig',
      role: 'Core Team Member',
      imageSrc: 'operations/hamza_baig.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Gireesh Sachdev',
      role: 'Core Team Member',
      imageSrc: 'operations/gireesh.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];

  return (
    <>
      <div className={styles.QuoteDiv}>
        <img className={styles.Quoteimg} src='/operationsquote.svg' alt='' />
      </div>

      <div className="row">
        {operators.slice(0, 3).map((item, index) => (
          <div className="col-md-2" key={index}>
            <div className={styles.Rectangle198}>
              <div className={styles.picheader}></div>
              <div className={styles.MaskGroup}>
                <Image  src='/dotimgreen.svg' alt='' width={700} height={400} style={{position:'absolute'}}/>
                <div className={styles.Ellipse44}>
                  <img className={styles.profilepic} src={item.imageSrc} alt="placeholder" />
                </div>
              </div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
              <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <div className={styles.Group718}>
                  <div className={styles.Rectangle191}></div>
                  <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                  <div className={styles.LinkedinProfile}>{item.linkedinProfile}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="row justify-content-center">
        <div style={{marginLeft:'650px'}}>
          <div className={styles.Rectangle198}>
            <div className={styles.picheader}></div>
            <div className={styles.MaskGroup}>
              <img  src='/dotimgreen.svg' alt='' />
              <div className={styles.Ellipse44}>
                <img className={styles.profilepic} src={operators[3].imageSrc} alt="placeholder" />
              </div>
            </div>
            <div className={styles.name}>{operators[3].name}</div>
            <div className={styles.role}>{operators[3].role}</div>
            <a href={operators[3].linkedinProfile} target="_blank" rel="noopener noreferrer">
              <div className={styles.Group718}>
                <div className={styles.Rectangle191}></div>
                <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                <div className={styles.LinkedinProfile}>{operators[3].linkedinProfile}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
