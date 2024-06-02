import React from 'react';
import teams from '../styles/teams.module.css'; // Import the CSS file correctly using `teams`
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Operations() {
  const operators = [
    {
      name: 'Muhammad Ateeb',
      role: 'Operations Lead',
      imageSrc: 'executives/muhammad_ateeb.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Gireesh Sachdev',
      role: 'Outreach Lead',
      imageSrc: 'operations/gireesh.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Khizar Saqib',
      role: 'Event Management Lead',
      imageSrc: 'operations/khizar_saqib.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mirza Hamza Baig',
      role: 'Core Team Member',
      imageSrc: 'operations/hamza_baig.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];

  return (
    <>
      {/* Quote Image */}
      <div data-aos="fade-up" className={teams.QuoteDiv}>
        <img className={teams.Quoteimg} src='/operationsquote.svg' alt='' />
      </div>

      {/* Members Div 1 */}
      <div data-aos="fade-up" className={`row ${teams.customRow}`}>
        {operators.slice(0, 3).map((item, index) => (
          <div className={`col-md-2 ${teams.customCol}`} key={index}>
            <div className={teams.member_card}>
              <div className={teams.picheader}></div>
              <div className={teams.card_content}>
                <img className={teams.dotimg} src='/dotimgreen.svg' alt='' />
                <div className={teams.image_div}>
                  <img className={teams.profilepic} src={item.imageSrc} alt="placeholder" />
                </div>
              </div>
              <div className={teams.name}>{item.name}</div>
              <div className={teams.role}>{item.role}</div>
              <a href={item.linkedinProfile} target="_blank" rel="noopener noreferrer">
                <div className={teams.member_button}>
                  <div className={teams.btn_border}></div>
                  <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                  <div className={teams.btn_text}>{item.linkedinProfile}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Members Div 2 */}
      <div data-aos="fade-up" className={`row justify-content-center ${teams.customRow}`}>
        <div className={`col-md-2 ${teams.customCol2}`} style={{ marginLeft: '650px' }}>
          <div className={teams.member_card}>
            <div className={teams.picheader}></div>
            <div className={teams.card_content}>
              <img className={teams.dotimg} src='/dotimgreen.svg' alt='' />
              <div className={teams.image_div}>
                <img className={teams.profilepic} src={operators[3].imageSrc} alt="placeholder" />
              </div>
            </div>
            <div className={teams.name}>{operators[3].name}</div>
            <div className={teams.role}>{operators[3].role}</div>
            <a href={operators[3].linkedinProfile} target="_blank" rel="noopener noreferrer">
              <div className={teams.member_button}>
                <div className={teams.btn_border}></div>
                <img className={teams.icon} src='/LinkedINfilled.svg' alt='' />
                <div className={teams.btn_text}>{operators[3].linkedinProfile}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
