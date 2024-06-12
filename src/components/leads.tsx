import React, { useEffect, useState } from 'react';
import styles from '../styles/leads.module.css'; // Import the generated CSS module
import { Timeline } from "flowbite-react";
import axios from 'axios';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://gdscdsu-website.vercel.app/api/teams?role=lead`)
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setLeads(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const leadsArray = Object.values(responseData);
          setLeads(leadsArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => console.error('Error fetching leads:', error));
      console.log("ENV CHECK" + process.env.BASE_URL_API);
      
  }, []);

  // Function to generate tenures
  const generateTenures = () => {
    const tenures = [];
    for (let year = 2020; year <= 3000; year++) {
      tenures.push(year);
    }
    tenures.push('Current'); // Add 'Current' for the last tenure
    return tenures;
  };

  return (
    <>
      {/* Quote Image */}
      <div data-aos="fade-up" className="QuoteDiv">
        <img className={styles.Quoteimg} src='/leadsquote.svg' alt='' />
      </div>

      {/* Leads Div */}
      <div data-aos="fade-up" className={styles.Leads}>
        {loading ? (
          <p></p>
        ) : (
          <Timeline>
            {leads[1].map((lead, index) => (
              <Timeline.Item key={index}>
                <Timeline.Content>
                  <Timeline.Time>{generateTenures()[index]}</Timeline.Time>
                  <Timeline.Body>
                    <div className={styles.rectangle198}>
                      <img className={styles.verticalimg} src='/dotimgverticalred.svg' alt=''  />
                      <div className={styles.maskGroup}>
                        <img className={styles.profileimage} src={lead.picture} alt="placeholder" />
                      </div>
                      <div className={`d-flex flex-row ${styles.socials}`}>
                          <a href={lead.email} target="_blank" rel="noopener noreferrer" className="me-2">
                            <img className={styles.icon} src="./EmailIcon1.svg" alt="Email icon" />
                          </a>
                          <a href={lead.facebook} target="_blank" rel="noopener noreferrer" className="me-2">
                            <img className={styles.icon} src="./FbIcon1.svg" alt="Facebook icon" />
                          </a>
                          <a href={lead.instagram} target="_blank" rel="noopener noreferrer" className="me-2">
                            <img className={styles.icon} src="./InstaIcon1.png" alt="Instagram icon" />
                          </a>
                          <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="me-2">
                            <img className={styles.icon} src="./LinkedInIcon1.svg" alt="LinkedIn icon" />
                          </a>
                      </div>
                      <div className={styles.name}>{lead.fullname}</div>
                      <div className={styles.designation}>{lead.tagline}</div>
                      <div className={styles.description}>{lead.bio}</div>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        )}
      </div>
    </>
  );
}
