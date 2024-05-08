import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/speakers.module.css';

const speakersData = [
  {
    id:1,
    name: "Michelle Curry",
    position: "CEO at TOQQA Global",
    event: "Speaker at",
    eventTitle: "TECH TALK: THE POWER OF WOMEN ENTREPRENEURSHIP",
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:2,
    name: "Michelle Curry",
    position: "CEO at TOQQA Global",
    event: "Speaker at",
    eventTitle: "TECH TALK: THE POWER OF WOMEN ENTREPRENEURSHIP",
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:3,
    name: "Ahmed Ayub",
    position: "Co-founder at Airlift Technologies",
    event: "Speaker at",
    eventTitle: "TECH TALK: HOW TO CHOOSE CAREER",
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:4,
    name: "Saad Hamid",
    position: "Growth Manager @Google",
    event: "Speaker at",
    eventTitle: "TECH TALK: HOW TO THINK 10X IDEAS",
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:5,
    name: "Umer Abdullah",
    position: "Software Engineer at Google",
    event: "Speaker at",
    eventTitle: "TECH TALK: GRAND LAUNCH EVENT OF GDSC AT DSU",
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:6,
    name: "Hisham Sarwar",
    position: "Founder at Being Guru",
    event: "Speaker at",
    eventTitle: "TECH TALK: GET SET FREELANCE",
    linkedinProfile: "LinkedIn Profile"
  },
];

export default function Speakers() {
  return (
    <div className="row">
        {speakersData.map(speaker => (
            <div key={speaker.id} className="col-lg-6">
            <div className={styles.card_container}>
                <img className={styles.image} src="https://via.placeholder.com/200x200" alt="Profile" />
                <div className={styles.name}>{speaker.name}</div>
                <div className={styles.position}>{speaker.position}</div>
                <div className={styles.event}>{speaker.event}</div>
                <div className={styles.eventTitle}>{speaker.eventTitle}</div>
                <div className={styles.group718}>
                <div className={styles.rectangle191}></div>
                <div className={styles.vector}></div>
                <div className={styles.Group718}>
              <div className={styles.Rectangle191}></div>
              <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
              <div className={styles.LinkedinProfile}>{speaker.linkedinProfile}</div>
            </div>
                </div>
            </div>
            </div>
        ))}
    </div>
  );
}