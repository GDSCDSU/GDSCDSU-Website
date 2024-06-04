import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/speakers.module.css';
import axios from 'axios';

export default function Speakers() {
  const [speakersData, setSpeakersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/event?topEvent=true')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setSpeakersData(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const speakersArray = Object.values(responseData);
          setSpeakersData(speakersArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching speakers:', error);
        setLoading(false);
      });
  }, []);

  console.log(speakersData);

  return (
    <>
      <h1 className={styles.heading} data-aos="fade-up">
        <b>Speakers</b>
      </h1>
      {/* Colour Boxes Image */}
      <img className={styles.vectorimg1} src='/shapes.svg' alt='' />
      {/* Golden Ring Image */}
      <img className={styles.vectorimg2} src='/leftboxes.svg' alt='' />

      {/* Speakers */}
      <div data-aos="fade-up" className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          speakersData.length > 0 ? (
            speakersData[1].map(speaker => (
              speaker.speaker !== "NA" && (
                <div key={speaker.id} className="col-lg-5">
                  <div className={styles.card_container}>
                    <img className={styles.image} src={speaker.speakerImage} alt="Profile" />
                    <div className={styles.name}>{speaker.speaker}</div>
                    <div className={styles.position}>{speaker.SpeakerBio}</div>
                    <div className={styles.event}>{speaker.name}</div>
                    <div className={styles.eventTitle}>{speaker.title}</div>
                    <div className={styles.group718}>
                      <a href={speaker.speakerLinkedln} target="_blank" rel="noopener noreferrer">
                        <div className={styles.Group718}>
                          <div className={styles.Rectangle191}></div>
                          <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                          <div className={styles.LinkedinProfile}>LinkedIn Profile</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )
            ))
          ) : (
            <p>No speakers data available.</p>
          )
        )}
      </div>
    </>
  );
}
