/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useEffect } from 'react';
import '../globals.css';
import 'flowbite/dist/flowbite.css';
import Navbar from '../../components/Navbar';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
export default function Contact() {
    const [activeTab, setActiveTab] = useState('Contact');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const pathname = window.location.pathname;
        const tab = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);
        setActiveTab(tab === '' ? 'Team' : tab);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Navbar activeTab={activeTab} />
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-grow text-primary me-2" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success me-2" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger me-2" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto px-4 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1 flex flex-col justify-center items-center p-8">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                            <p className="text-gray-700 mb-6">Let's talk about how we can help you.</p>
                            <div className="flex items-center mb-6">
                                <HiOutlineMail className="text-primary mr-4" size={24} />
                                <span className="text-gray-700 text-lg">info@example.com</span>
                            </div>
                            <div className="flex items-center mb-6">
                                <HiOutlinePhone className="text-primary mr-4" size={24} />
                                <span className="text-gray-700 text-lg">+123 456 7890</span>
                            </div>
                            <div className="flex items-center">
                                <HiOutlineLocationMarker className="text-primary mr-4" size={24} />
                                <span className="text-gray-700 text-lg">123 Main St, City, Country</span>
                            </div>
                        </div>
                    </div>

                        <div className="col-span-2">
                            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
                            <form className="max-w-lg mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                                    <textarea id="message" name="message" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                                </div>
                                <div className="flex justify-end mb-4">
                                    <button type="submit" className="inline-block px-4 py-2 text-white bg-primary rounded-full hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                                        <HiOutlineMail className="inline-block mr-2" /> Send
                                    </button>
                                    <span className="text-gray-500 self-center mx-4">OR</span>
                                    <button type="button" className="inline-block px-4 py-2 text-white bg-secondary rounded-full hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
                                        Become a Partner
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
}