'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/eventnav.module.css';
import Carousel from './Carousel';

const AllEvents = dynamic(() => import('../components/allevents'), {
  ssr: false,
});

const Speaker = dynamic(() => import('../components/speakers'), {
  ssr: false,
});

const Events = () => {
  const [activeTab, setActiveTab] = useState('AllEvents');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'AllEvents':
        return <AllEvents />;
      case 'Speaker':
        return <Speaker />;
      default:
        return <AllEvents />;
    }
  };

  return (
    <>
      <div data-aos="fade-up">
        <img className="img-fluid" src="/events-header.svg" alt="" />
      </div>

      

      <div data-aos="fade-up" className={styles.EventsNavigation}>
        <div className={`${styles.Rectangle196} ${activeTab === 'Founder' ? styles.active : ''}`} />
        <div className={styles.Rectangle197} style={{ left: `${activeTab === 'AllEvents' ? '10px' : activeTab === 'Speaker' ? '480px' : '0px'}` }} />
        <button className={`${styles.NavButton} ${styles.Events} ${activeTab === 'AllEvents' ? styles.active : ''}`} onClick={() => handleTabClick('AllEvents')}>All Events</button>
        <button className={`${styles.NavButton} ${styles.Speakers} ${activeTab === 'Speaker' ? styles.active : ''}`} onClick={() => handleTabClick('Speaker')}>Speakers</button>
      </div>
      
      <div data-aos="fade-up" className="full-page-content">
        <div className="d-flex flex-column align-items-center">
          <h1>
            <b>Our Top Events</b>
          </h1>
        </div>
        <br />
        <Carousel/>
      </div>

      <section>
        {renderComponent()}
      </section>
    </>
  );
};

export default Events;
