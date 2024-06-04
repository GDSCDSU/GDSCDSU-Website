import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/events.module.css';
import axios from 'axios';

export default function AllEvents() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/event?topEvent=true')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setEventData(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const eventArray = Object.values(responseData);
          setEventData(eventArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  console.log(eventData);
  return (
    <>
      <h1 className={styles.heading} data-aos="fade-up">
        <b>All Events</b>
      </h1>
      <img className={styles.vectorimg1} src='/orngcircle.svg' alt='' />
      <img className={styles.vectorimg2} src='/leftboxes.svg' alt='' />
      
      {/* Events Div */}
      <div className="row" data-aos="fade-up">
        {loading ? (
          <p>Loading...</p>
        ) : (
          eventData.length > 0 && eventData[1].slice(0,20).map(event => (
            <div key={event.id} className="col-md-4 offset-md-0">
              <div className={styles.event_card}>
                <img className={styles.image} src={event.picture} alt="Event" />
                <div className={styles.name}>{event.name}</div>
                <div className={styles.event_type}>{event.title}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
