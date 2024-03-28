/* eslint-disable @next/next/no-img-element */
'use client'
import { SetStateAction, useState } from 'react';
import './globals.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'flowbite/dist/flowbite.css';
import Link from "next/link";
import { Navbar } from "flowbite-react";


  const Home = dynamic(() => import('../components/home'), {
    ssr: false,
  });
  const OurStory = dynamic(() => import('../components/ourstory'), {
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleTabClick = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
        setIsMenuOpen(false);
    };
    const renderComponent = () => {
        switch (activeTab) {
            case 'Home':
                return <Home />;
            case 'OurStory':
                return <OurStory />;
            case 'Events':
                return <Events />;
            case 'Team':
                return <Team />;
            case 'Contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <>
        <Navbar rounded>
            <Navbar.Brand as={Link} href="/">
                <img src='/LOGO.svg' alt='' className='img-fluid'/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <ul className="nav nav-underline">
                    {['Home', 'OurStory', 'Events', 'Team', 'Contact'].map((tab) => (
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
        </>
    );
    
}
