'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
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
        <Image src="/teams-header.svg" alt="" width={2000} height={400} />
      </div>
      <ul className={`flex justify-center text-center text-gray-500 bg-white-100 rounded-full p-1 border-4 ${activeTabBorderColor}`} style={{ marginBottom: 0 }}>
        {tabsData.map((tab) => (
          <li key={tab.id} className="flex-1" style={{ marginBottom: 0 }}>
            <p
              onClick={() => handleTabClick(tab.title)}
              className={`flex justify-center items-center py-3 px-1 text-xs xs:text-lg md:text-lg cursor-pointer ${
                activeTab === tab.title ? `${activeTabBgColor} text-white rounded-full shadow` : 'bg-white-100 rounded-full'
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

      <div>
        <Image src="/ColorBoxes.svg" className="img-fluid" alt="Color Boxes" width={500} height={500} />
      </div>
      <div>
        <div className="shadow-sm p-3 rounded-lg">
          <div className="d-flex flex-column align-items-center text-center">
            <img src="LOGO.svg" alt="Logo" className="img-fluid mb-3" />
            <div className="text-secondary mb-3"><b>Connect With Us</b></div>
            <div className="flex justify-center flex-wrap">
              <div className="p-2"><Footer.Icon href="https://www.facebook.com/GoogleDeveloperStudentClubDHASuffaUniversity/" icon={BsFacebook} /></div>
              <div className="p-2"><Footer.Icon href="https://github.com/GDSCDSU/" icon={BsGithub} /></div>
              <div className="p-2"><Footer.Icon href="mailto:gdscdsu@gmail.com" icon={IoMdMail} /></div>
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
    </main>
  );
};

export default Team;
