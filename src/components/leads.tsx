import React from 'react';
import styles from '../styles/leads.module.css'; // Import the generated CSS module
import { Timeline } from "flowbite-react";

export default function Leads() {

  const leads = [
    {
      name: 'Syed Ateeq',
      year:'2020-2021',
      designation: 'GDSC@DSU Lead 2020-2021 & Founder',
      description: "A virtuoso in leadership, Ateeq has led the way as a GDSC Lead, driving the vision behind this club with the aim to instigate change, make an impact, and ignite passion. He orchestrated over fifty online bootcamps, leaving an indelible impact on thousands and sparking real change for aspiring developers. He has not only set but redefined standards of excellence in the dynamic tech landscape.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
    {
      name: 'Hassam Jawed',
      year:'2021-2022',
      designation: 'GDSC@DSU Lead 2021-2022',
      description: "Building upon the foundation laid by the club's founder, Hassam has orchestrated a series of impactful initiatives aimed at bridging the gap between academia and industry. Under his guidance, GDSC has become a catalyst for change, empowering students to realize their potential and achieve personal and professional growth. Hassam led the Datacamp Donates Campaign, upskilling 250+ students nationwide in AI, Data Science, and Data Engineering. His dedication and vision have truly elevated the impact of GDSC, leaving a lasting legacy within the DSU community and beyond.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
    {
      name: 'Alisha Ahmed Shamsi',
      year:'2022-2023',
      designation: 'GDSC@DSU Lead 2022-2023',
      description: "Alisha Ahmed Shamsi, as the first female lead, has shattered stereotypes and blazed a trail of empowerment at GDSC. Throughout her tenure, she has spearheaded over 30+ events, bootcamps, and workshops, showcasing her commitment to fostering innovation and inclusion in the tech community. Her leadership exemplifies resilience and vision, inspiring others to break barriers and pursue their passions fearlessly.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
    {
      name: 'Hira Fatima',
      year:'2022-2023',
      designation: 'GDSC@DSU Lead 2023-2024',
      description: "Hira Fatima's ascent to the role of Lead without relying on a Google referral speaks volumes about her inherent potential and undeniable talent. With her natural aptitude and determination, she swiftly rose through the ranks, demonstrating her capability to lead effectively. Her ability to excel without external endorsements underscores her intrinsic leadership qualities and innate drive for success. Her journey serves as a testament to her resilience and aptitude, proving that with dedication and hard work, one can ascend to great heights regardless of initial support.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
  ];
  
  return (
    <>
      <div className="QuoteDiv">
        <img className={styles.Quoteimg} src='/leadsquote.svg' alt='' />
      </div>

      <div className={styles.Group827}>
        <Timeline>
          {leads.map((lead, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>{lead.year}</Timeline.Time>
                <Timeline.Body>
                  <div className={styles.rectangle198}>
                    <img className='' src='/dotimgverticalred.svg' alt='' style={{position:'absolute' , height : '250px'}} />
                    <div className={styles.maskGroup}>
                      <div className={styles.ellipse44}></div>
                      <img className={styles.image1} src={lead.imageSrc} alt="placeholder" />
                    </div>
                    <div className={`d-flex flex-column flex-wrap ${styles.socials}`}>
                      <div className={styles.rectangle191}></div>
                      <div className={styles.rectangle191}></div>
                      <div className={styles.rectangle191}></div>
                      <div className={styles.rectangle191}></div>
                    </div>
                    <div className={styles.syedAteeq}>{lead.name}</div>
                    <div className={styles.gdscDsuLead20202021Founder}>{lead.designation}</div>
                    <div className={styles.description}>{lead.description}</div>
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </>
  );
}
