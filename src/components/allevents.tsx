import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/events.module.css'

const eventData = [
  {
    id:1,
    title: 'Cloud Seekho Workshop Series',
    type: 'Workshop',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    id:2,
    title: 'Figma Design Competition',
    type: 'Competition',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    id:3,
    title: 'Machine Learning:Getting into AI',
    type: 'Awareness Session',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    id:4,
    title: 'Angular Workshop',
    type: 'Workshop',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    id:5,
    title: 'Tech Baithak',
    type: 'Awareness Session',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    id:6,
    title: 'Personal Brand Content',
    type: 'Awareness Session',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
];

export default function AllEvents() {
  return (
    <>
    <img className={styles.vectorimg1} src='/orngcircle.svg' alt='' />
    <img className={styles.vectorimg2} src='/leftboxes.svg' alt='' />
    <div className="row">
      {eventData.map(event => (
            <div key={event.id} className="col-lg-5">
            <div className={styles.card_container}>
                <img className={styles.image} src={event.imageUrl} alt="Event" />
                <div className={styles.name}>{event.title}</div>
                <div className={styles.eventType}>{event.type}</div>
            </div>
            </div>
        ))}
    </div>
    </>
  );
}
