'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import eventsnav from '../styles/eventnav.module.css';
import Carousel from './Carousel';
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const AllEvents = dynamic(() => import('../components/allevents'), {
  ssr: false,
});

const Speaker = dynamic(() => import('../components/speakers'), {
  ssr: false,
});

const Events = () => {
  const [activeTab, setActiveTab] = useState('AllEvents');

  return (
    <>
      <div data-aos="fade-up">
        <img style={{maxWidth:'100%'}} src="/events-header.svg" alt="" />
      </div>

      <div data-aos="fade-up" className={eventsnav.EventsNavigation}>
        <div className={`${eventsnav.nav_border} ${activeTab === 'Founder' ? eventsnav.active : ''}`} />
        <div className={`${eventsnav.active_tab} ${activeTab === 'AllEvents' ? eventsnav.leftAllEvents : activeTab === 'Speaker' ? eventsnav.leftSpeaker : ''}`} />
        <button className={`${eventsnav.nav_button} ${eventsnav.Events} ${activeTab === 'AllEvents' ? eventsnav.active : ''}`} onClick={() => setActiveTab('AllEvents')}>All Events</button>
        <button className={`${eventsnav.nav_button} ${eventsnav.Speakers} ${activeTab === 'Speaker' ? eventsnav.active : ''}`} onClick={() => setActiveTab('Speaker')}>Speakers</button>
      </div>

      <section className={eventsnav.section_container}>
        <div data-aos="fade-up" className="full-page-content">
          <div className="d-flex flex-column align-items-center">
            <h1>
              <b>Our Top Events</b>
            </h1>
          </div>
          <br />
          <Carousel />
        </div>
        {activeTab === 'AllEvents' ? <AllEvents /> : <Speaker />}
      </section>

      <div>
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

export default Events;
