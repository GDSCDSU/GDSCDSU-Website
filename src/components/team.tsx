'use client';
import styles from "../styles/teamsnav.module.css";
import { useState } from "react";
import dynamic from 'next/dynamic';
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Founder = dynamic(() => import('../components/founder'), {
  ssr: false,
});
const Leads = dynamic(() => import('../components/leads'), {
  ssr: false,
});
const Operations = dynamic(() => import('../components/operations'), {
  ssr: false,
});
const Executives = dynamic(() => import('../components/executives'), {
  ssr: false,
});
const Marketing = dynamic(() => import('../components/marketing'), {
  ssr: false,
});
const Development = dynamic(() => import('../components/development'), {
  ssr: false,
});

export default function Team() {
  const [activeTab, setActiveTab] = useState('Founder');

  const handleTabClick = (tab) => {
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
     
      <div data-aos="fade-up">
        <img className="img-fluid" src="/teams-header.svg" alt="" />
      </div>
    
      <div className="container">
      <div data-aos="fade-up" className={styles.TeamNavigation}>
        <div
          className={`${styles.Rectangle196} ${
            activeTab === 'Leads'
              ? styles.redBorder
              : activeTab === 'Marketing' || activeTab === 'Operations'
              ? styles.greenBorder
              : styles.blueBorder
          }`}
        />
        <div
          className={`${styles.Rectangle197} ${
            activeTab === 'Founder'
              ? styles.leftFounder
              : activeTab === 'Leads'
              ? styles.leftLeads
              : activeTab === 'Marketing'
              ? styles.leftMarketing
              : activeTab === 'Development'
              ? styles.leftDevelopment
              : activeTab === 'Operations'
              ? styles.leftOperations
              : activeTab === 'Executives'
              ? styles.leftExecutives
              : ''
          } ${
            activeTab === 'Leads'
              ? styles.redBackground
              : activeTab === 'Marketing' || activeTab === 'Operations'
              ? styles.greenBackground
              : styles.blueBackground
          }`}
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
          }`}
          onClick={() => handleTabClick('Marketing')}
        >
          Marketing
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
          className={`${styles.NavButton} ${styles.OperationsTeam} ${
            activeTab === 'Operations' ? styles.active : ''
          }`}
          onClick={() => handleTabClick('Operations')}
        >
          Operations
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
      </div>

      <section>{renderComponent()}</section>
      
      <div className="" >
        <img src="/ColorBoxes.svg" className="img-fluid" alt="" />
      </div>


      <div className="shadow-sm p-3 rounded-lg">
        <div className="d-flex flex-column align-items-center text-center">
            <img src="LOGO.svg" alt="" className="img-fluid mb-3" />
            <div className="text-secondary mb-3"><b>Connect With Us</b></div>
            <div className="d-flex justify-content-center flex-wrap">
                <div className="p-2"><Footer.Icon href="https://www.facebook.com/GoogleDeveloperStudentClubDHASuffaUniversity/" icon={BsFacebook} /></div>
                <div className="p-2"><Footer.Icon href="https://github.com/GDSCDSU/" icon={BsGithub} /></div>
                <div className="p-2"><Footer.Icon href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gdscdsu@gmail.com" icon={IoMdMail} /></div>
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
  

    </>
  );
}