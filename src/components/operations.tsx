import React, { useEffect, useState } from 'react';
import axios from 'axios';
import teams from '../styles/teams.module.css'; // Import the CSS file correctly using `teams`
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Operations() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    axios.get(process.env.BASE_URL_API+'/teams?team=operation')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setOperators(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const operatorsArray = Object.values(responseData);
          setOperators(operatorsArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching operation team:', error));
  }, []);

  return (
    <>
      {/* Quote Image */}
      <div data-aos="fade-up" className={teams.QuoteDiv}>
        <img className={teams.Quoteimg} src='/operationsquote.svg' alt='' />
      </div>

      {/* Ensure operators is not empty before rendering */}
      {operators.length > 0 && (
        <>
          {/* Members Div 1 */}
          <div data-aos="fade-up" className={`row ${teams.customRow}`}>
            {operators[1].slice(1, 4).map((item, index) => (
              <div className={`col-md-2 ${teams.customCol}`} key={index}>
                <div className={teams.member_card}>
                  <div className={teams.picheader}></div>
                  <div className={teams.card_content}>
                    <img className={teams.dotimg} src='/dotimgreen.svg' alt='' />
                    <div className={teams.image_div}>
                      <img className={teams.profilepic} src={item.picture} alt="placeholder" />
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
          <div data-aos="fade-up" className={`row justify-content-center ${teams.customRow}`}>
            {operators[1].slice(4, 5).map((item, index) => (
              <div className={`col-md-2 ${teams.customCol2}`} style={{ marginLeft: '650px' }} key={index}>
                <div className={teams.member_card}>
                  <div className={teams.picheader}></div>
                  <div className={teams.card_content}>
                    <img className={teams.dotimg} src='/dotimgreen.svg' alt='' />
                    <div className={teams.image_div}>
                      <img className={teams.profilepic} src={item.picture} alt="placeholder" />
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
