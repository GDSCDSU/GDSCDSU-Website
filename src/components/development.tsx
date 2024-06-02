import React, { useEffect, useState } from 'react';
import teams from '../styles/teams.module.css'; // Import the generated CSS file correctly using `teams`
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Development() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api//teams?team=development')
      .then(response => response.json())
      .then(data => {
        setDevelopers(data);
        console.log(data)
      })
      .catch(error => console.error('Error fetching development team:', error));
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="QuoteDiv">
        <img className={teams.Quoteimg} src='/developmentquote.svg' alt='' />
      </div>

      {/* Members Div 1 */}
      <div data-aos="fade-up" className={`row ${teams.customRow}`}>
        {developers.slice(0, 3).map((item, index) => (
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
      <div data-aos="fade-up" className={`row ${teams.customRow}`}>
        <div className={`col-md-2 offset-md-1 ${teams.customCol}`}>
          <div className={teams.member_card}>
            <div className={teams.picheader}></div>
            <div className={teams.card_content}>
              <img className={teams.dotimg} src='/blueverticalbar.svg' alt='' />
              <div className={teams.image_div}>
                <img className={teams.profilepic} src={developers[3]?.picture} alt={developers[3]?.fullname} />
              </div>
            </div>
            <div className={teams.name}>{developers[3]?.fullname}</div>
            <div className={teams.role}>{developers[3]?.tagline}</div>
            <a href={developers[3]?.linkedin} target="_blank" rel="noopener noreferrer">
              <div className={teams.member_button}>
                <div className={teams.btn_border}></div>
                <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                <div className={teams.btn_text}>LinkedIn Profile</div>
              </div>
            </a>
          </div>
        </div>
        {/* Members Div 3 */}
        <div data-aos="fade-up" className={`col-md-4 ${teams.customCol}`}>
          <div className={teams.member_card}>
            <div className={teams.picheader}></div>
            <div className={teams.card_content}>
              <img className={teams.dotimg} src='/blueverticalbar.svg' alt='' />
              <div className={teams.image_div}>
                <img className={teams.profilepic} src={developers[4]?.picture} alt={developers[4]?.fullname} />
              </div>
            </div>
            <div className={teams.name}>{developers[4]?.fullname}</div>
            <div className={teams.role}>{developers[4]?.tagline}</div>
            <a href={developers[4]?.linkedin} target="_blank" rel="noopener noreferrer">
              <div className={teams.member_button}>
                <div className={teams.btn_border}></div>
                <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                <div className={teams.btn_text}>LinkedIn Profile</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
