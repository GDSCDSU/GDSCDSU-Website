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
      <Image src='/teams-header.svg' alt='' width={400} height={400} />
      </section>

      <div className={styles.TeamNavigation}>
        <div className={styles.Rectangle196} />
        <div className={styles.Rectangle197} />
        <button className={`${styles.NavButton} ${styles.Founder}`} onClick={() => handleTabClick('Founder')}>Founder</button>
        <button className={`${styles.NavButton} ${styles.Leads}`} onClick={() => handleTabClick('Leads')}>Leads</button>
        <button className={`${styles.NavButton} ${styles.MarketingTeam}`} onClick={() => handleTabClick('Marketing')}>Marketing Team</button>
        <button className={`${styles.NavButton} ${styles.OperationsTeam}`} onClick={() => handleTabClick('Operations')}>Operations Team</button>
        <button className={`${styles.NavButton} ${styles.DevelopmentTeam}`} onClick={() => handleTabClick('Development')}>Development Team</button>
        <button className={`${styles.NavButton} ${styles.ExecutiveCoreTeam}`} onClick={() => handleTabClick('Executives')}>Executive Core Team</button>
      </div>
      <section>
        {renderComponent()}
      </section>
    </>
  );
}
