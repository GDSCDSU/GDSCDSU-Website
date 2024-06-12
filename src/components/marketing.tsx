import React, { useEffect, useState } from 'react';
import axios from 'axios';
import teams from '../styles/teams.module.css'; // Import the CSS module
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Marketing() {
  const [marketers, setMarketers] = useState([]);

  useEffect(() => {
    axios.get(process.env.BASE_URL_API+'/teams?team=marketing')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setMarketers(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const marketersArray = Object.values(responseData);
          console.log(response.data);
          setMarketers(marketersArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching marketing team:', error));
  }, []);

  // Log the marketers array for debugging purposes
  console.log(marketers);

  return (
    <>
      {/* Quote Image */}
      <div data-aos="fade-up" className="QuoteDiv">
        <img className={teams.Quoteimg} src='/marketingquote.svg' alt='' />
      </div>

      {/* Ensure marketers is not empty before rendering */}
      {marketers.length > 0 && (
        <>
          {/* Members Div 1 */}
          <div data-aos="fade-up" className={`row ${teams.customRow}`}>
            {marketers[1].slice(0, 3).map((item, index) => (
              <div className={`col-md-2 ${teams.customCol}`} key={index}>
                <div className={teams.member_card}>
                  <div className={teams.picheader}></div>
                  <div className={teams.card_content}>
                    <img className={teams.dotimg} src='/dotimgreen.svg' alt='' />
                    <div className={teams.image_div}>
                      <img className={teams.profilepic} src={item.picture} alt={item.fullname} />
                    </div>
                  </div>
                  <div className={teams.name}>{item.fullname}</div>
                  <div className={teams.role}>{item.tagline || 'Role not specified'}</div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={teams.member_button}>
                      <div className={teams.btn_border}></div>
                      <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                      <div className={teams.btn_text}>Linkedin Profile</div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Members Div 2 */}
          <div data-aos="fade-up" className={`row ${teams.customRow}`}>
            {marketers[1].slice(3, 6).map((item, index) => (
              <div className={`col-md-2 ${teams.customCol}`} key={index}>
                <div className={teams.member_card}>
                  <div className={teams.picheader}></div>
                  <div className={teams.card_content}>
                    <img className={teams.dotimg} src='/dotimgreen.svg' alt='' />
                    <div className={teams.image_div}>
                      <img className={teams.profilepic} src={item.picture} alt={item.fullname} />
                    </div>
                  </div>
                  <div className={teams.name}>{item.fullname}</div>
                  <div className={teams.role}>{item.tagline || 'Role not specified'}</div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={teams.member_button}>
                      <div className={teams.btn_border}></div>
                      <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                      <div className={teams.btn_text}>Linkedin Profile</div>
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
