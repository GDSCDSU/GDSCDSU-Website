import React, { useEffect, useState } from 'react';
import axios from 'axios';
import teams from '../styles/teams.module.css'; // Import the CSS module
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Development() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios.get('https://gdscdsu-website.vercel.app/api/teams?team=development')
      .then(response => {
        const responseData = response.data;
  
        if (Array.isArray(responseData)) {
          setDevelopers(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const developersArray = Object.values(responseData);
          setDevelopers(developersArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching development team:', error));
  }, []);

  // Log the developers array for debugging purposes
  console.log(developers);

  return (
    <>
      <div data-aos="fade-up" className="QuoteDiv">
        <img className={teams.Quoteimg} src='/developmentquote.svg' alt='' />
      </div>

      {/* Ensure developers[1] exists before rendering */}
      {developers[1] && (
        <>
          {/* Members Div 1 */}
          <div data-aos="fade-up" className={`row ${teams.customRow}`}>
            {developers[1].slice(0, 3).map((item, index) => (
              <div className={`col-md-2 ${teams.customCol}`} key={index}>
                <div className={teams.member_card}>
                  <div className={teams.picheader}></div>
                  <div className={teams.card_content}>
                    <img className={teams.dotimg} src='/blueverticalbar.svg' alt='' />
                    <div className={teams.image_div}>
                      <img className={teams.profilepic} src={item.picture} alt={item.fullname} />
                    </div>
                  </div>
                  <div className={teams.name}>{item.fullname}</div>
                  <div className={teams.role}>{item.tagline}</div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={teams.member_button}>
                      <div className={teams.btn_border}></div>
                      <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                      <div className={teams.btn_text}>LinkedIn Profile</div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Members Div 2 */}
          <div data-aos="fade-up" className={`row ${teams.customrowDev}`} >
            {developers[1].slice(3, 5).map((item, index) => (
              <div className={`col-md-2 offset-md-0 ${teams.customcolDev}`}  key={index}>
                <div className={teams.member_card}>
                  <div className={teams.picheader}></div>
                  <div className={teams.card_content}>
                    <img className={teams.dotimg} src='/blueverticalbar.svg' alt='' />
                    <div className={teams.image_div}>
                      <img className={teams.profilepic} src={item.picture} alt={item.fullname} />
                    </div>
                  </div>
                  <div className={teams.name}>{item.fullname}</div>
                  <div className={teams.role}>{item.tagline}</div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className={teams.member_button}>
                      <div className={teams.btn_border}></div>
                      <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                      <div className={teams.btn_text}>LinkedIn Profile</div>
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
