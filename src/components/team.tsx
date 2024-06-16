'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const components = {
  Founder: dynamic(() => import('../components/founder'), { ssr: false }),
  Leads: dynamic(() => import('../components/leads'), { ssr: false }),
  Operations: dynamic(() => import('../components/operations'), { ssr: false }),
  Executives: dynamic(() => import('../components/executives'), { ssr: false }),
  Marketing: dynamic(() => import('../components/marketing'), { ssr: false }),
  Development: dynamic(() => import('../components/development'), { ssr: false }),
};

const tabsData = [
  { id: 1, title: 'Founder', color: 'border-blue-500 bg-blue-500' },
  { id: 2, title: 'Leads', color: 'border-red-500 bg-red-500' },
  { id: 3, title: 'Operations', color: 'border-green-500 bg-green-500' },
  { id: 4, title: 'Development', color: 'border-blue-500 bg-blue-500' },
  { id: 5, title: 'Marketing', color: 'border-green-500 bg-green-500' },
  { id: 6, title: 'Executives', color: 'border-blue-500 bg-blue-500' },
];

const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Founder');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const ActiveComponent = components[activeTab];

  const activeTabData = tabsData.find(tab => tab.title === activeTab);
  const activeTabBorderColor = activeTabData ? activeTabData.color.split(' ')[0] : 'border-gray-100';
  const activeTabBgColor = activeTabData ? activeTabData.color.split(' ')[1] : 'bg-gray-100';

  return (
    <main className="min-h-screen bg-white">
      <div className="flex justify-center items-center">
        <Image src="/teams-header.svg" alt="" width={1600} height={100} />
      </div>
      <ul className={`grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 text-center text-gray-400 bg-white h-20 rounded-full border-4 ${activeTabBorderColor}`} style={{ marginBottom: 0 }}>
        {tabsData.map((tab) => (
          <li key={tab.id} className="m-1" style={{ marginBottom: 0 }}>
            <p
              onClick={() => handleTabClick(tab.title)}
              className={`py-3 text-xs md:text-lg cursor-pointer ${
                activeTab === tab.title ? `${activeTabBgColor} text-white rounded-full shadow` : 'rounded-full'
              }`}
              style={{ marginBottom: 0 }}
            >
              {tab.title}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-5 p-5">
        {ActiveComponent ? <ActiveComponent /> : <div>No Component Found</div>}
      </div>
    </main>
  );
};

export default Team;
