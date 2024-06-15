import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

const AllEventsComponent = dynamic(() => import('../components/allevents'), { ssr: false });
const SpeakersComponent = dynamic(() => import('../components/speakers'), { ssr: false });

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Events');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const TabData = [
    { id: 1, title: 'Events', color: 'border-blue-500 bg-blue-500' },
    { id: 2, title: 'Speakers', color: 'border-blue-500 bg-blue-500' },
  ];

  const activeTabData = TabData.find(tab => tab.title === activeTab);
  const activeTabBorderColor = activeTabData ? activeTabData.color.split(' ')[0] : 'border-gray-100';
  const activeTabBgColor = activeTabData ? activeTabData.color.split(' ')[1] : 'bg-gray-100';

  return (
    <>
      <div data-aos="fade-up">
        <img style={{ maxWidth: '100%' }} src="/events-header.svg" alt="Events Header" />
      </div>

      <div data-aos="fade-up" className="flex justify-center items-center">
        <img src="/team-section.svg" alt="" className="w-full h-32 lg:h-64" />
      </div>

      <ul className={`flex justify-center text-center text-gray-500 bg-gray-100 rounded-full p-1 border-4 ${activeTabBorderColor}`}>
        {TabData.map((tab) => (
          <li key={tab.id} className="flex-1">
            <p
              onClick={() => handleTabClick(tab.title)}
              className={`flex justify-center items-center py-4 text-xs md:text-lg cursor-pointer ${
                activeTab === tab.title ? `${activeTabBgColor} text-white rounded-full shadow` : 'bg-gray-100 rounded-full'
              }`}
            >
              {tab.title}
            </p>
          </li>
        ))}
      </ul>

      <section className="section_container">
        <div data-aos="fade-up" className="full-page-content">
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              <b>Our Top Events</b>
            </h1>
          </div>
        </div>

        {activeTab === 'Events' ? <AllEventsComponent /> : <SpeakersComponent />}
      </section>

      <div>
        <img src="/ColorBoxes.svg" className="img-fluid" alt="Color Boxes" />
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
    </>
  );
};

export default Events;
