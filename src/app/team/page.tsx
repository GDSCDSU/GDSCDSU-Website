'use client';
import styles from "../../styles/teamsnav.module.css";
import { useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";

const Founder = dynamic(() => import('../../components/founder'), {
  ssr: false,
});
const Leads = dynamic(() => import('../../components/leads'), {
  ssr: false,
});
const Operations = dynamic(() => import('../../components/operations'), {
  ssr: false,
});
const Executives = dynamic(() => import('../../components/executives'), {
  ssr: false,
});
const Marketing = dynamic(() => import('../../components/marketing'), {
  ssr: false,
});
const Development = dynamic(() => import('../../components/development'), {
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
      <div
  className={styles.Rectangle196}
  style={{
    borderColor:
      activeTab === 'Leads'
        ? 'red'
        : activeTab === 'Marketing'
        ? 'green'
        : activeTab === 'Operations'
        ? 'green'
        : activeTab === 'Development' || activeTab === 'Executives'
        ? '#3b82f6'
        : '#3b82f6', 
    borderWidth: '2px', 
    borderStyle: 'solid' 
  }}
/>


  <div
    className={styles.Rectangle197}
    style={{
      left: `${
        activeTab === 'Founder'
          ? '30px'
          : activeTab === 'Leads'
          ? '175px'
          : activeTab === 'Marketing'
          ? '315px'
          : activeTab === 'Operations'
          ? '460px'
          : activeTab === 'Development'
          ? '623px'
          : activeTab === 'Executives'
          ? '790px'
          : '520px'
      }`,
      backgroundColor:
        activeTab === 'Leads'
          ? 'red'
          : activeTab === 'Marketing'
          ? 'green'
          : activeTab === 'Operations'
          ? 'green'
          : activeTab === 'Development'
          ? '#3b82f6'
          : activeTab === 'Executives'
          ? '#3b82f6'
          : ''
    }}
  />
  <button
    className={`${styles.NavButton} ${styles.Founder} ${
      activeTab === 'Founder' ? styles.active : ''
    }`}
    onClick={() => handleTabClick('Founder')}
  >
    Founder
  </button>
  <button
    className={`${styles.NavButton} ${styles.Leads} ${
      activeTab === 'Leads' ? styles.active : ''
    }`}
    onClick={() => handleTabClick('Leads')}
  >
    Leads
  </button>
  <button
    className={`${styles.NavButton} ${styles.MarketingTeam} ${
      activeTab === 'Marketing' ? styles.active : ''
    } `}
    onClick={() => handleTabClick('Marketing')}
  >
    Marketing
  </button>
  <button
    className={`${styles.NavButton} ${styles.OperationsTeam} ${
      activeTab === 'Operations' ? styles.active : ''
    }`}
    onClick={() => handleTabClick('Operations')}
  >
    Operations
  </button>
  <button
    className={`${styles.NavButton} ${styles.DevelopmentTeam} ${
      activeTab === 'Development' ? styles.active : ''
    }`}
    onClick={() => handleTabClick('Development')}
  >
    Development
  </button>
  <button
    className={`${styles.NavButton} ${styles.ExecutiveCoreTeam} ${
      activeTab === 'Executives' ? styles.active : ''
    }`}
    onClick={() => handleTabClick('Executives')}
  >
    Executive
  </button>
</div>


      <section>
        {renderComponent()}
      </section>
    </>
  );
}
