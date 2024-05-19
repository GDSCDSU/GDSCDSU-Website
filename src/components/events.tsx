import React from 'react';
import { useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import styles from '../styles/eventnav.module.css';
import Eventsslider from './eventsslider';
export default function Events(){
    const AllEvents = dynamic(() => import('./allevents'), {
        ssr: false,
      });
      const Speaker = dynamic(() => import('./speakers'), {
        ssr: false,
      });
      
        const [activeTab, setActiveTab] = useState('AllEvents');
      
        const handleTabClick = (tab: string) => {
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
   
    return(
        <>
        <section className="TeamsHeader">
          <Image src='/events-header.svg' alt='' width={1890} height={250} />
        </section>

        <section>
            <Eventsslider/>
        </section>

            <div className={styles.EventsNavigation}>
            <div className={`${styles.Rectangle196} ${activeTab === 'Founder' ? styles.active : ''}`} />
            <div className={styles.Rectangle197} style={{ left: `${activeTab === 'All Events' ? '20px' : activeTab === 'Speakers' ? '200px'  : '720px'}` }} />
            <button className={`${styles.NavButton} ${styles.Events} ${activeTab === 'All Events' ? styles.active : ''}`} onClick={() => handleTabClick('All Events')}>All Events</button>
            <button className={`${styles.NavButton} ${styles.Speakers} ${activeTab === 'Leads' ? styles.active : ''}`} onClick={() => handleTabClick('Speakers')}>Speakers</button>
            </div>

        <section>
            {renderComponent()}
        </section>    
    </>
    );
};
