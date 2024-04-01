'use client';
import styles from "../../styles/teamsnav.module.css";
import { useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";

const Founder = dynamic(() => import('./founder'), {
  ssr: false,
});
const Leads = dynamic(() => import('./leads'), {
  ssr: false,
});
const Operations = dynamic(() => import('./operations'), {
  ssr: false,
});
const Executives = dynamic(() => import('./executives'), {
  ssr: false,
});
const Marketing = dynamic(() => import('./marketing'), {
  ssr: false,
});
const Development = dynamic(() => import('./development'), {
  ssr: false,
});

export default function Team() {
  const [activeTab, setActiveTab] = useState('Founder');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'Founder':
        return <Founder />;
      case 'Leads':
        return <Leads />;
      case 'Executives':
        return <Executives />;
      case 'Operations':
        return <Operations />;
      case 'Marketing':
        return <Marketing />;
      case 'Development':
        return <Development />;
      default:
        return <Founder />;
    }
  };

  return (
    <>
      <section className="TeamsHeader">
      <Image src='/teams-header.svg' alt='' width={1890} height={300} />
      </section>

      <div className={styles.TeamNavigation}>
        <div className={`${styles.Rectangle196} ${activeTab === 'Founder' ? styles.active : ''}`} />
        <div className={styles.Rectangle197} style={{ left: `${activeTab === 'Founder' ? '20px' : activeTab === 'Leads' ? '165px' : activeTab === 'Marketing' ? '305px' : activeTab === 'Operations' ? '450px' : activeTab === 'Development' ? '618px' : activeTab === 'Executives' ? '790px'  : '520px'}` }} />
        <button className={`${styles.NavButton} ${styles.Founder} ${activeTab === 'Founder' ? styles.active : ''}`} onClick={() => handleTabClick('Founder')}>Founder</button>
        <button className={`${styles.NavButton} ${styles.Leads} ${activeTab === 'Leads' ? styles.active : ''}`} onClick={() => handleTabClick('Leads')}>Leads</button>
        <button className={`${styles.NavButton} ${styles.MarketingTeam} ${activeTab === 'Marketing' ? styles.active : ''} `} onClick={() => handleTabClick('Marketing')}>Marketing</button>
        <button className={`${styles.NavButton} ${styles.OperationsTeam} ${activeTab === 'Operations' ? styles.active : ''}`} onClick={() => handleTabClick('Operations')}>Operations</button>
        <button className={`${styles.NavButton} ${styles.DevelopmentTeam} ${activeTab === 'Development' ? styles.active : ''}`} onClick={() => handleTabClick('Development')}>Development</button>
        <button className={`${styles.NavButton} ${styles.ExecutiveCoreTeam} ${activeTab === 'Executives' ? styles.active : ''}`} onClick={() => handleTabClick('Executives')}>Executive</button>
      </div>
      <section>
        {renderComponent()}
      </section>
    </>
  );
}
