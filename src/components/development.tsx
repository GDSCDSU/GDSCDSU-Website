// Development.js

import React from 'react';
import '../styles/teams.module.css'; // Import the generated CSS file
import Image from 'next/image';

export default function Development() {
  const developers = [
    {
      name: 'Muhammad Arbaz Sohail',
      role: 'Executive Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Ali Osaid',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Muhammad Amish Toor',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Haris Muhammad Imran',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Bisharat Ali',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Qirrat Azam',
      role: 'Core Team Member',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];
  return (
    <>

            <div className="QuoteDiv">
            <Image src='/developmentquote.svg' alt='' width={400} height={400}/>
            </div>
            {developers.map((item, index) => (
        <div className="Rectangle198" key={index}>
          <div className="picheader"></div>
          <div className="MaskGroup">
            <div className="Ellipse44"></div>
            <img className="image1" src={item.imageSrc} alt="placeholder" />
            <img className="profilepic" src={item.imageSrc} alt="placeholder" />
          </div>  
          <div className="name">{item.name}</div>
          <div className="role">{item.role}</div>
          <div className="Group718">
            <div className="Rectangle191"></div>
            <div className="Vector"></div>
            <div className="LinkedinProfile">{item.linkedinProfile}</div>
          </div>  
        </div>
      ))}      
    </>
  );
};
