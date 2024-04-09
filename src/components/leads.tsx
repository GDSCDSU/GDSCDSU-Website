import React from 'react';
import styles from '../styles/leads.module.css'; // Import the generated CSS module
import Image from 'next/image';

export default function Leads() {

  const leads = [
    {
      name: 'Syed Ateeq',
      designation: 'GDSC@DSU Lead 2020-2021 & Founder',
      description: "A virtuoso in leadership, Ateeq has led the way as a GDSC Lead, driving the vision behind this club with the aim to instigate change, make an impact, and ignite passion. He orchestrated over fifty online bootcamps, leaving an indelible impact on thousands and sparking real change for aspiring developers. He has not only set but redefined standards of excellence in the dynamic tech landscape.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
    {
      name: 'Hassam Jawed',
      designation: 'GDSC@DSU Lead 2021-2022',
      description: "Building upon the foundation laid by the club's founder, Hassam has orchestrated a series of impactful initiatives aimed at bridging the gap between academia and industry. Under his guidance, GDSC has become a catalyst for change, empowering students to realize their potential and achieve personal and professional growth. Hassam led the Datacamp Donates Campaign, upskilling 250+ students nationwide in AI, Data Science, and Data Engineering. His dedication and vision have truly elevated the impact of GDSC, leaving a lasting legacy within the DSU community and beyond.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
    {
      name: 'Alisha Ahmed Shamsi',
      designation: 'GDSC@DSU Lead 2022-2023',
      description: "Alisha Ahmed Shamsi, as the first female lead, has shattered stereotypes and blazed a trail of empowerment at GDSC. Throughout her tenure, she has spearheaded over 30+ events, bootcamps, and workshops, showcasing her commitment to fostering innovation and inclusion in the tech community. Her leadership exemplifies resilience and vision, inspiring others to break barriers and pursue their passions fearlessly.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
    {
      name: 'Hira Fatima',
      designation: 'GDSC@DSU Lead 2023-2024',
      description: "Hira Fatima's ascent to the role of Lead without relying on a Google referral speaks volumes about her inherent potential and undeniable talent. With her natural aptitude and determination, she swiftly rose through the ranks, demonstrating her capability to lead effectively. Her ability to excel without external endorsements underscores her intrinsic leadership qualities and innate drive for success. Her journey serves as a testament to her resilience and aptitude, proving that with dedication and hard work, one can ascend to great heights regardless of initial support.",
      imageSrc: 'https://via.placeholder.com/94x94'
    },
  ];
  
  return (
    <>
      <div className={styles.container}>
        <img className={styles.Quoteimg} src='/leadsquote.svg' alt='' />
      </div>

      <div>
      <img className={styles.tenure} src='/timelinebar.svg' alt=''/> 
      </div>

      <div className={styles.Group827}>
        {leads.map((item, index) => (
          <div className={styles.rectangle198} key={index}>
            <img className='' src='/dotimgverticalred.svg' alt='' style={{position:'absolute' , height : '250px'}} />
            <div className={styles.maskGroup}>
              <div className={styles.ellipse44}></div>
              <img className={styles.image1} src={item.imageSrc} alt="placeholder" />
            </div>
            <div className={styles.syedAteeq}>{item.name}</div>
            <div className={styles.gdscDsuLead20202021Founder}>{item.designation}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.socials}>
          <div className={styles.group719}>
            <div className={styles.rectangle190}></div>
            <div className={styles.vector}></div>
          </div>
          <div className={styles.group718}>
            <div className={styles.rectangle191}></div>
            <div className={styles.vector}></div>
          </div>
          <div className={styles.email}>
            <div className={styles.rectangle190}></div>
            <div className={styles.group775}>
              <div className={styles.vector}></div>
              <div className={styles.vector}></div>
            </div>
          </div>
          <div className={styles.group716}>
            <div className={styles.rectangle193}></div>
            <div className={styles.vector}></div>
          </div>
        </div>
          </div>
        ))}
          
        
      </div>
    </>
  );
}
