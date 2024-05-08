'use client';
import React from 'react';
import { useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import styles from '../../styles/eventnav.module.css';
import Eventsslider from '../../components/eventsslider';
export default function Events(){
    const AllEvents = dynamic(() => import('../../components/allevents'), {
        ssr: false,
      });
      const Speaker = dynamic(() => import('../../components/speakers'), {
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
        <section className={styles.TeamsHeader}>
        </section>


        
            <div className={styles.EventsNavigation}>
            <div className={`${styles.Rectangle196} ${activeTab === 'Founder' ? styles.active : ''}`} />
            <div className={styles.Rectangle197} style={{ left: `${activeTab === 'AllEvents' ? '10px' : activeTab === 'Speaker' ? '480px' : '0px'}` }} />
            <button className={`${styles.NavButton} ${styles.Events} ${activeTab === 'AllEvents' ? styles.active : ''}`} onClick={() => handleTabClick('AllEvents')}>All Events</button>
            <button className={`${styles.NavButton} ${styles.Speakers} ${activeTab === 'Speaker' ? styles.active : ''}`} onClick={() => handleTabClick('Speaker')}>Speakers</button>
            </div>

        <section>
            {renderComponent()}
        </section>    
    </>
    );
};
