import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/events.module.css'

const eventData = [
  {
    id:1,
    title: 'Cloud Seekho Workshop Series',
    type: 'Workshop',
    imageUrl: 'events/cloud_seekho.png',
  },
  {
    id:2,
    title: 'Figma Design Competition',
    type: 'Competition',
    imageUrl: 'events/figma_design.png',
  },
  {
    id:3,
    title: 'Machine Learning:Getting into AI',
    type: 'Awareness Session',
    imageUrl: 'events/machine_learning.png',
  },
  {
    id:4,
    title: 'Angular Workshop',
    type: 'Workshop',
    imageUrl: 'events/angular_workshop.png',
  },
  {
    id:5,
    title: 'Tech Baithak',
    type: 'Awareness Session',
    imageUrl: 'events/tech_baithak.png',
  },
  {
    id:6,
    title: 'Personal Brand Content',
    type: 'Awareness Session',
    imageUrl: 'events/personal_brand.png',
  },
  {
    id:7,
    title: 'Flutter Bootcamp',
    type: 'Workshop',
    imageUrl: 'events/flutter_bootcamp.png',
  },
  {
    id:8,
    title: 'The Tajurba Show',
    type: 'Event',
    imageUrl: 'events/tajurba_show.png',
  },
  {
    id:9,
    title: 'Code Refactor 360',
    type: 'Workshop',
    imageUrl: 'events/code_refactor.png',
  },
  {
    id:10,
    title: 'Google Solution Challenge',
    type: 'Awareness Session',
    imageUrl: 'events/google_solution.png',
  },
  {
    id:11,
    title: 'Applications Of Machine Learning',
    type: '',
    imageUrl: 'events/application_ml.png',
  },
  {
    id:12,
    title: 'When Is the Right Time To Rise The Investment',
    type: '',
    imageUrl: 'events/investment.png',
  },
  {
    id:13,
    title: 'How To Choose Career?',
    type: '',
    imageUrl: 'events/choose_career.png',
  },
  {
    id:14,
    title: 'Masters Abroad',
    type: 'Awareness Session',
    imageUrl: 'events/masters_abroad.png',
  },
  {
    id:15,
    title: 'How to Edit Youtube Videos',
    type: 'Awareness Session',
    imageUrl: 'events/edit_videos.png',
  },
  {
    id:16,
    title: 'Hackathon',
    type: 'Event',
    imageUrl: 'events/hackathon.png',
  },
  {
    id:17,
    title: 'Get Set Freelance',
    type: 'Workshop',
    imageUrl: 'events/getset_freelance.png',
  },
  {
    id:18,
    title: 'Python Bootcamp',
    type: 'Workshop',
    imageUrl: 'events/python_bootcamp.png',
  },
  {
    id:19,
    title: 'Android Seekho',
    type: 'Workshop',
    imageUrl: 'events/android_seekho.png',
  },
  {
    id:20,
    title: 'Launch Event',
    type: 'Event',
    imageUrl: 'events/launch_event.png',
  },
  {
    id:21,
    title: 'Cyber Security Bootcamp',
    type: 'Workshop',
    imageUrl: 'events/cyber_security.png',
  },
];

export default function AllEvents() {
  return (
    <>
    <h1 className={styles.heading}>
    <b>All Events</b>
    </h1>
    <img className={styles.vectorimg1} src='/orngcircle.svg' alt='' />
    <img className={styles.vectorimg2} src='/leftboxes.svg' alt='' />
    
    <div className="row">
      {eventData.map(event => (
            <div key={event.id} className="col-md-4 offset-md-0">
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
