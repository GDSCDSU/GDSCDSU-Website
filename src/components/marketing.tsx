import React from 'react';
import teams from '../styles/teams.module.css'; // Import the generated CSS module
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Marketing() {
  const marketers = [
    {
      name: 'Sahil Bachani',
      role: 'Graphics and Design Lead',
      imageSrc: 'marketing/sahil.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mahnoor Ahmed',
      role: 'Data Camp Lead',
      imageSrc: 'marketing/mahnoor.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Amna Tariq',
      role: 'Content Lead',
      imageSrc: 'marketing/amna.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Taqwa Muhammad',
      role: 'Core Team Member',
      imageSrc: 'marketing/taqwa.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Radhika Rajwani',
      role: 'Core Team Member',
      imageSrc: 'marketing/radhika.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Laiba Kamal Khan',
      role: 'Core Team Member',
      imageSrc: 'marketing/laiba.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Amna Tariq',
      role: 'Core Team Member',
      imageSrc: 'marketing/amna.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    }
  ];

  return (
    <>
      {/* Quote Image */}
      <div data-aos="fade-up" className="QuoteDiv">
        <img className={teams.Quoteimg} src='/marketingquote.svg' alt='' />
      </div>

      {/* Members Div 1 */}
      <div data-aos="fade-up" className={`row ${teams.customRow}`}>
        {marketers.slice(0, 3).map((item, index) => (
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
      <div data-aos="fade-up" className={`row ${teams.customRow}`}>
        {marketers.slice(3, 6).map((item, index) => (
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
    </>
  );
}
