/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from 'react';
import './globals.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'flowbite/dist/flowbite.css';
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { IoSend } from "react-icons/io5";

const Home = dynamic(() => import('../components/home'), { ssr: false });
const OurStory = dynamic(() => import('../components/our story'), { ssr: false });
const Events = dynamic(() => import('../components/events'), { ssr: false });
const Team = dynamic(() => import('../components/team'), { ssr: false });

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('Home');
    const [isLoading, setIsLoading] = useState(false);

    const handleTabClick = async (tab) => {
        if (tab === 'Contact') {
            document.getElementById('exampleModalBtn').click();
        } else {
            setActiveTab(tab);
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 0));
            setIsLoading(false);
        }
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
                return;
            default:
                return <Home />;
        }
    };

    return (
        <>
            {isLoading && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
                    <Image src='/Loading.gif' width={100} height={100} alt='' />
                </div>
            )}
            <Navbar rounded>
                <Navbar.Brand as={Link} href="/">
                    <Image src='/LOGO.svg' alt='' width={275} height={0} />
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
            <button id="exampleModalBtn" hidden={true} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <Label htmlFor="firstName" value="First Name" />
                                    <TextInput id="firstName" type="text" sizing="sm" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Label htmlFor="lastName" value="Last Name" />
                                    <TextInput id="lastName" type="text" sizing="sm" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <Label htmlFor="email" value="Your email" />
                                    <TextInput id="email" type="email" placeholder="name@gdsc.com" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <Label htmlFor="message" value="Your message" />
                                    <Textarea id="message" placeholder="Leave a comment..." required rows={4} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <p className="mb-0">Want to become our sponsor?</p>
                                <div className="d-flex gap-2">
                                    <Button color='blue' pill>Become Sponsor</Button>
                                    <Button color="blue" pill>
                                        <IoSend className="mr-2 h-5 w-5" />
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
