import React from 'react';
import styles from '../styles/teams.module.css'; // Import the generated CSS file correctly using `styles`
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Development() {
  const developers = [
    {
      name: 'Muhammad Amish Toor',
      role: 'Web Lead',
      imageSrc: 'Development/amish_toor.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Ali Osaid',
      role: 'Core Team Member',
      imageSrc: 'Development/ali_osaid.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Haris Muhammad Imran',
      role: 'Core Team Member',
      imageSrc: 'Development/muhammad_haris.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Bisharat Ali',
      role: 'Core Team Member',
      imageSrc: 'Development/bisharat_ali.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Qirrat Azam',
      role: 'Core Team Member',
      imageSrc: 'Development/qirrat_azam.png',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];

  return (
    <>
      <div data-aos="fade-up" className="QuoteDiv">
        <img className={styles.Quoteimg} src='/developmentquote.svg' alt='' />
      </div>

      <div data-aos="fade-up" className="row">
        {developers.slice(0, 3).map((item, index) => (
          <div className="col-md-2" key={index}>
            <div className={styles.Rectangle198}>
              <div className={styles.picheader}></div>
              <div className={styles.MaskGroup}>
                <img className={styles.dotimg} src='/blueverticalbar.svg' alt='' />
                <div className={styles.Ellipse44}>
                  <img className={styles.profilepic} src={item.imageSrc} alt="placeholder" />
                </div>
              </div>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.role}>{item.role}</div>
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

      <div data-aos="fade-up" className="row">
        <div className="col-md-2 offset-md-1">
          <div className={styles.Rectangle198}>
            <div className={styles.picheader}></div>
            <div className={styles.MaskGroup}>
              <img className={styles.dotimg} src='/blueverticalbar.svg' alt='' />
              <div className={styles.Ellipse44}>
                <img className={styles.profilepic} src={developers[3].imageSrc} alt="placeholder" />
              </div>
            </div>
            <div className={styles.name}>{developers[3].name}</div>
            <div className={styles.role}>{developers[3].role}</div>
            <a href={developers[3].linkedinProfile} target="_blank" rel="noopener noreferrer">
              <div className={styles.Group718}>
                <div className={styles.Rectangle191}></div>
                <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                <div className={styles.LinkedinProfile}>{developers[3].linkedinProfile}</div>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="col-md-3">
          <div className={styles.Rectangle198}>
            <div className={styles.picheader}></div>
            <div className={styles.MaskGroup}>
              <img className={styles.dotimg} src='/blueverticalbar.svg' alt='' />
              <div className={styles.Ellipse44}>
                <img className={styles.profilepic} src={developers[4].imageSrc} alt="placeholder" />
              </div>
            </div>
            <div className={styles.name}>{developers[4].name}</div>
            <div className={styles.role}>{developers[4].role}</div>
            <a href={developers[4].linkedinProfile} target="_blank" rel="noopener noreferrer">
              <div className={styles.Group718}>
                <div className={styles.Rectangle191}></div>
                <img className={styles.Vector} src='/LinkedINfilled.svg' alt='' />
                <div className={styles.LinkedinProfile}>{developers[4].linkedinProfile}</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="" >
    <img src="/ColorBoxes.svg" className="img-fluid" alt="" />
</div>
<div>
    <div className="shadow-sm p-3 rounded-lg">
        <div className="d-flex flex-column align-items-center text-center">
            <img src="LOGO.svg" alt="" className="img-fluid mb-3" />
            <div className="text-secondary mb-3"><b>Connect With Us</b></div>
            <div className="d-flex justify-content-center flex-wrap">
                <div className="p-2"><Footer.Icon href="https://www.facebook.com/GoogleDeveloperStudentClubDHASuffaUniversity/" icon={BsFacebook} /></div>
                <div className="p-2"><Footer.Icon href="https://github.com/GDSCDSU/" icon={BsGithub} /></div>
                <div className="p-2"><Footer.Icon href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gdscdsu@gmail.com" icon={IoMdMail} /></div>
                <div className="p-2"><Footer.Icon href="https://www.instagram.com/googledev.dsu/" icon={BsInstagram} /></div>
                <div className="p-2"><Footer.Icon href="https://www.linkedin.com/company/developer-student-club-dsu-powered-by-google-developers/" icon={BsLinkedin} /></div>
                <div className="p-2"><Footer.Icon href="https://www.youtube.com/@GoogleDSCatDHASuffaUniversity" icon={BsYoutube} /></div>
            </div>
            <Footer.Divider />         
        </div>
        <div>
            <div className="row">
                <div className="col-md-10 col-12 text-secondary">
                    ©2024 GDSC@DSU
                </div>
                <div className="col-md-2 col-12 text-end text-secondary">
                    <a href="https://www.dsu.edu.pk/">DHA Suffa University</a>
                </div>
            </div>
        </div>   
    </div>
</div>

    </>
  );
};
