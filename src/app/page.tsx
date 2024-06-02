/* eslint-disable @next/next/no-img-element */
'use client'
import { SetStateAction, useState, useEffect } from 'react';
import './globals.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'flowbite/dist/flowbite.css';
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Progress } from "flowbite-react";

  const Home = dynamic(() => import('../components/home'), {
    ssr: false,
  });
  const OurStory = dynamic(() => import('../components/our story'), {
    ssr: false,
  });
  const Events = dynamic(() => import('../components/events'), {
    ssr: false,
  });
  const Team = dynamic(() => import('../components/team'), {
    ssr: false,
  });
  const Contact = dynamic(() => import('../components/contact'), {
    ssr: false,
  });

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('Home');
    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleTabClick = async (tab) => {
        setActiveTab(tab);
        setIsLoading(true);
        setOpenModal(tab === 'Contact'); 
        await new Promise((resolve) => setTimeout(resolve, 0)); 
        setIsLoading(false);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setActiveTab('Home');
    };
    const renderComponent = () => {
        switch (activeTab) {
            case 'Home':
                return <Home />;
            case 'Our Story':
                return <OurStory />;
            case 'Events':
                return <Events />;
            case 'Team':
                return <Team />;
            case 'Contact':
                return <Contact openModal={openModal} onCloseModal={handleCloseModal} />; 
            default:
                return <Home />;
        }
    };

    return (
        <>
        {/* {isLoading && (
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
                <Image src='/Loading.gif' width={100} height={100} alt='' />
            </div>
        )} */}
        <Navbar rounded>
            <Navbar.Brand as={Link} href="/">
                <Image src='/LOGO.svg' alt='' width={275} height={0}/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <ul className="nav nav-underline">
                    {['Home', 'Our Story', 'Events', 'Team', 'Contact'].map((tab) => (
                        <li key={tab} className="nav-item">
                            <button
                                className='nav-link'
                                onClick={() => handleTabClick(tab)}
                                type="button"
                                role="tab"
                                >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </Navbar.Collapse>
        </Navbar>
            <div>
                {renderComponent()}
            </div>
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div> */}
        </>
    );
    
}
