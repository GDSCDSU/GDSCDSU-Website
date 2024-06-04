import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/executives.module.css'; // Import the CSS module
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Executives() {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/teams?role=Executive-core-team-member')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setExecutives(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const executivesArray = Object.values(responseData);
          setExecutives(executivesArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching executives:', error));
  }, []);

  console.log(executives)
  return (
    <>
      {/* Quote Image */}
      <div data-aos="fade-up" className={styles.QuoteDiv}>
        <img className={styles.Quoteimg} src='/executivesquote.svg' alt=''/>
      </div>

      {/* Ensure executives is not empty before rendering */}
      {executives.length > 0 && (
        <>
          {/* Members Div 1 */}
          <div data-aos="fade-up" className={`row ${styles.customRow}`} style={{ marginLeft: '250px' }}>
            {executives[1].slice(0, 6).map((item, index) => (
              <div className={`col-md-5 ${styles.customCol}`} key={index}>
                <div className={styles.Rectangle198}>
                  <div className={styles.MaskGroup}>
                    <img className={styles.dotimg} src='/dotimgexecutive.svg' alt='' />
                    <div className={styles.Ellipse44}>
                      <img className={styles.profilepic} src={item.picture} alt="placeholder" />
                    </div>
                  </div>
                  <div className={styles.name}>{item.fullname}</div>
                  <div className={styles.role}>{item.tagline}</div>
                  <div className={styles.Description}>{item.bio}</div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={styles.Group718}>
                      <div className={styles.Rectangle191}></div>
                      <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                      <div className={styles.LinkedinProfile}>LinkedIn Profile</div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Members Div 2 */}
          <div data-aos="fade-up" className={`row justify-content-center ${styles.customRow2}`}>
            {executives[1].slice(6, 7).map((item, index) => (
              <div className={`col-md-4 ${styles.customCol2}`} key={index}>
                <div className={styles.Rectangle198}>
                  <div className={styles.MaskGroup}>
                    <img className={styles.dotimg} src='/dotimgexecutive.svg' alt='' />
                    <div className={styles.Ellipse44}>
                      <img className={styles.profilepic} src={item.picture} alt="placeholder" />
                    </div>
                  </div>
                  <div className={styles.name}>{item.fullname}</div>
                  <div className={styles.role}>{item.tagline}</div>
                  <div className={styles.Description}>{item.bio}</div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={styles.Group718}>
                      <div className={styles.Rectangle191}></div>
                      <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                      <div className={styles.LinkedinProfile}>LinkedIn Profile</div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
