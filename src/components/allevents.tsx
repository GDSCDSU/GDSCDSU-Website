import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';

const eventData = [
  {
    title: 'Cloud Seekho Workshop Series',
    type: 'Workshop',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    title: 'Figma Design Competition',
    type: 'Competition',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    title: 'Machine Learning:Getting into AI',
    type: 'Awareness Session',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    title: 'Angular Workshop',
    type: 'Workshop',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    title: 'Tech Baithak',
    type: 'Awareness Session',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
  {
    title: 'Personal Brand Content',
    type: 'Awareness Session',
    imageUrl: 'https://via.placeholder.com/200x200',
  },
];

export default function AllEvents() {
  return (
    <div className="row">
        {eventData.map(event => (
            <div key={event.id} className="col-lg-4">
            <div className={styles.card-container}>
                <img className={styles.image} src={event.imageUrl} alt="Event" />
                <div className={styles.name}>{event.title}</div>
                <div className={styles.eventType}>{event.type}</div>
            </div>
            </div>
        ))}
    </div>
  );
}
