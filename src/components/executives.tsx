import React from 'react';
import Image from 'next/image';
import styles from '../styles/executives.module.css'; // Import the generated CSS module
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Executives() {
  const executives = [
    {
      name: 'Asaad Mahmood',
      role: 'Media & Video Production Lead',
      description: "Asaad Mahmood, as our Video Editing and Media Production Lead, played a crucial role in shaping our content strategy and brand presence. His dedication to empowering others within the team and beyond reflected his commitment to excellence and innovation.",
      imageSrc: 'executives/asaad_mahmood.png',
      linkedinProfile: 'LinkedIn Profile'
    },
    {
      name: 'Mohib Ismail',
      role: 'Executive Core Team Member',
      description: "As a member of GDSC, Mohib Ismail played a crucial role in organizing and conducting the first web development workshop. Through his dedication and mentorship, he empowered students with practical skills essential for their journey in web development.",
      imageSrc: 'executives/mohib_ismail.png',
      linkedinProfile: 'LinkedIn Profile'
    },
    {
      name: 'Areeba Saleem',
      role: 'Executive Core Team Member',
      description: "Areeba Saleem, in her role as Content Writer, understood the critical importance of content as the first impression. With this in mind, she dedicated herself to ensuring top-notch content writing, consistently delivering the best quality work.",
      imageSrc: 'executives/areeba_saleem.png',
      linkedinProfile: 'LinkedIn Profile'
    },
    {
      name: 'Muhammad Arbaz Sohail',
      role: 'Executive Core Team Member',
      description: "Muhammad Arbaz Sohail, a GDSC member, led the Flutter Bootcamp, sharing his expertise in mobile app development to teach participants Flutter skills. This event sparked interest among many students, inspiring them to start their journey as app developers.",
      imageSrc: 'executives/muhammad_arbaz.png',
      linkedinProfile: 'LinkedIn Profile'
    },
    {
      name: 'Muhammad Bilal',
      role: 'Marketing Lead',
      description: "Muhammad Bilal, our Marketing Lead, brought creativity into our strategies and fresh ideas that changed our approach. His innovative contributions boosted our marketing efforts to new heights.",
      imageSrc: 'executives/muhammad_bilal.png',
      linkedinProfile: 'LinkedIn Profile'
    },
    {
      name: 'Muhammad Ateeb',
      role: 'Operations Lead',
      description: "Muhammad Ateeb, Operations Lead, is known for his excellent work ethic, punctuality. He ensured tasks are completed on time and with precision. Ateeb serves as the backbone of all events, guaranteeing smooth operations and efficiency.",
      imageSrc: 'executives/muhammad_ateeb.png',
      linkedinProfile: 'LinkedIn Profile'
    },
    {
      name: 'Wardha Haider',
      role: 'Team Management Lead',
      description: "Wardha Haider demonstrated great organization and coordination skills as the Event Management Lead. Her experience guaranteed flawless execution of events. At DevFest Karachi 2021, she made history as the first female winner from DHA Suffa University, securing a prize in the Women's Online Safety Hackathon.",
      imageSrc: 'executives/wardha_haider.png',
      linkedinProfile: 'LinkedIn Profile'
    },
  ];

  return (
    <>
    {/* Quote Image */}
      <div data-aos="fade-up" className={styles.QuoteDiv}>
        <img className={styles.Quoteimg} src='/executivesquote.svg' alt=''/>
      </div>

      {/* Members Div 1 */}
      <div data-aos="fade-up" className={`row ${styles.customRow}`} style={{ marginLeft: '250px' }}>
        {executives.slice(0, 6).map((item, index) => (
          <div className={`col-md-5 ${styles.customCol}`} key={index}>
            <div className={styles.Rectangle198}>
              <div className={styles.MaskGroup}>
                <img className={styles.dotimg} src='/dotimgexecutive.svg' alt='' />
                <div className={styles.Ellipse44}>
                  <img className={styles.profilepic} src={item.imageSrc} alt="placeholder" />
                </div>
              </div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.Description}>{item.description}</div>
              <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <div className={styles.Group718}>
                  <div className={styles.Rectangle191}></div>
                  <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                  <div className={styles.LinkedinProfile}>{item.linkedinProfile}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

        {/* Members Div 2 */}
      <div data-aos="fade-up" className={`row justify-content-center ${styles.customRow2}`}>
        {executives.slice(6, 7).map((item, index) => (
          <div className={`col-md-4 ${styles.customCol2}`} key={index}>
            <div className={styles.Rectangle198}>
              <div className={styles.MaskGroup}>
                <img className={styles.dotimg} src='/dotimgexecutive.svg' alt='' />
                <div className={styles.Ellipse44}>
                  <img className={styles.profilepic} src={item.imageSrc} alt="placeholder" />
                </div>
              </div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
              <div className={styles.Description}>{item.description}</div>
              <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <div className={styles.Group718}>
                  <div className={styles.Rectangle191}></div>
                  <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                  <div className={styles.LinkedinProfile}>{item.linkedinProfile}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
