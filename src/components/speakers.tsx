import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/eventsandspeakers.module.css';

const speakersData = [
  {
    name: "Michelle Curry",
    position: "CEO at TOQQA Global",
    event: "Speaker at",
    eventTitle: "TECH TALK: THE POWER OF WOMEN ENTREPRENEURSHIP",
    linkedinProfile: "Linked In Profile URL"
  },
  {
    name: "Michelle Curry",
    position: "CEO at TOQQA Global",
    event: "Speaker at",
    eventTitle: "TECH TALK: THE POWER OF WOMEN ENTREPRENEURSHIP",
    linkedinProfile: "Linked In Profile URL"
  },
  {
    name: "Ahmed Ayub",
    position: "Co-founder at Airlift Technologies",
    event: "Speaker at",
    eventTitle: "TECH TALK: HOW TO CHOOSE CAREER",
    linkedinProfile: "Linked In Profile URL"
  },
  {
    name: "Saad Hamid",
    position: "Growth Manager @Google",
    event: "Speaker at",
    eventTitle: "TECH TALK: HOW TO THINK 10X IDEAS",
    linkedinProfile: "Linked In Profile URL"
  },
  {
    name: "Umer Abdullah",
    position: "Software Engineer at Google",
    event: "Speaker at",
    eventTitle: "TECH TALK: GRAND LAUNCH EVENT OF GDSC AT DSU",
    linkedinProfile: "Linked In Profile URL"
  },
  {
    name: "Hisham Sarwar",
    position: "Founder at Being Guru",
    event: "Speaker at",
    eventTitle: "TECH TALK: GET SET FREELANCE",
    linkedinProfile: "Linked In Profile URL"
  },
];

export default function Speakers() {
  return (
    <div className="row">
        {speakersData.map(speaker => (
            <div key={speaker.id} className="col-lg-6">
            <div className={styles.cardContainer}>
                <img className={styles.profileImage} src="https://via.placeholder.com/200x200" alt="Profile" />
                <div className={styles.name}>{speaker.name}</div>
                <div className={styles.position}>{speaker.position}</div>
                <div className={styles.event}>{speaker.event}</div>
                <div className={styles.eventTitle}>{speaker.eventTitle}</div>
                <div className={styles.group718}>
                <div className={styles.rectangle191}></div>
                <div className={styles.vector}></div>
                <div className={styles.linkedinProfile}>{speaker.linkedinProfile}</div>
                </div>
            </div>
            </div>
        ))}
    </div>
  );
}
