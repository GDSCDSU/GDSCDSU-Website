'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

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
        <img src="/team-section.svg" alt="" className="w-full h-32 lg:h-64" />
      </div>
      <ul className={`flex justify-center text-center text-gray-500 bg-white-100 rounded-full p-1 border-4 ${activeTabBorderColor}`}>
        {tabsData.map((tab) => (
          <li key={tab.id} className="flex-1">
            <p
              onClick={() => handleTabClick(tab.title)}
              className={`flex justify-center items-center py-4 text-xs md:text-lg cursor-pointer ${
                activeTab === tab.title ? `${activeTabBgColor} text-white rounded-full shadow` : 'bg-white-100 rounded-full'
              }`}
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
