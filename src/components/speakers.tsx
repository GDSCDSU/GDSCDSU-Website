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
    imageSrc:'speakers/michelle_curry.png',
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:3,
    name: "Ahmed Ayub",
    position: "Co-founder at Airlift Technologies",
    event: "Speaker at",
    eventTitle: "TECH TALK: HOW TO CHOOSE CAREER",
    imageSrc:'speakers/ahmed_ayub.png',
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:4,
    name: "Saad Hamid",
    position: "Growth Manager @Google",
    event: "Speaker at",
    eventTitle: "TECH TALK: HOW TO THINK 10X IDEAS",
    imageSrc:'speakers/saad_hamid.png',
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:5,
    name: "Umer Abdullah",
    position: "Software Engineer at Google",
    event: "Speaker at",
    eventTitle: "TECH TALK: GRAND LAUNCH EVENT OF GDSC AT DSU",
    imageSrc:'speakers/umer_abdullah.png',
    linkedinProfile: "LinkedIn Profile"
  },
  {
    id:6,
    name: "Hisham Sarwar",
    position: "Founder at Being Guru",
    event: "Speaker at",
    eventTitle: "TECH TALK: GET SET FREELANCE",
    imageSrc:'speakers/hisham_sarwar.png',
    linkedinProfile: "LinkedIn Profile"
  },
];

export default function Speakers() {
  return (
    <>
    <img className={styles.vectorimg1} src='/shapes.svg' alt='' />
    <img className={styles.vectorimg2} src='/leftboxes.svg' alt='' />
    <div className="row">
        {speakersData.map(speaker => (
            <div key={speaker.id} className="col-lg-5">
            <div className={styles.card_container}>
                <img className={styles.image} src={speaker.imageSrc} alt="Profile" />
                <div className={styles.name}>{speaker.name}</div>
                <div className={styles.position}>{speaker.position}</div>
                <div className={styles.event}>{speaker.event}</div>
                <div className={styles.eventTitle}>{speaker.eventTitle}</div>
                <div className={styles.group718}>
                <div className={styles.rectangle191}></div>
                <div className={styles.vector}></div>
                <a href={speaker.linkedinProfile} target="_blank" rel="noopener noreferrer">
                  <div className={styles.Group718}>
                    <div className={styles.Rectangle191}></div>
                    <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                    <div className={styles.LinkedinProfile}>{speaker.linkedinProfile}</div>
                  </div>
                </a>
                </div>
            </div>
            </div>
        ))}
    </div>
    </>
  );
}
