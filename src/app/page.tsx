'use client'
import { SetStateAction, useState } from 'react';
import './globals.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-5 rtl:space-x-reverse mx-5">
                        <Image src='/LOGO.svg' alt='' style={{marginLeft:'10%'}} width={300} height={0} />
                    </a>
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-600 dark:hover:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`${
                        isMenuOpen ? 'flex' : 'hidden'
                    } md:flex md:items-center w-full md:w-auto`}>
                        <ul className="flex flex-row md:flex-row space-x-4 mt-4 md:mt-0 text-sm font-medium">
                            {['Home', 'OurStory', 'Events', 'Team', 'Contact'].map((tab) => (
                                <li key={tab} className="md:me-2" role="presentation">
                                    <button
                                        className={`inline-block p-2 md:p-5 border-b-2 md:border-b-0 rounded-t-lg transition-colors duration-300 ease-in-out ${
                                            activeTab === tab
                                            ? 'text-blue-500 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-500 border-blue-500 dark:border-blue-500'
                                            : 'dark:border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300  dark:hover:text-blue-300'
                                        }`}
                                        onClick={() => handleTabClick(tab)}
                                        type="button"
                                        role="tab"
                                        >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                {renderComponent()}
            </div>
        </>
    );
    
}
