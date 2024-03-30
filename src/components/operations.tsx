// Operations.js

import React from 'react';
import '../styles/teams.module.css'; // Import the CSS file
import Image from 'next/image';

export default function Operations() {
  const operators = [
    {
      name: 'Muhammad Ateeb',
      role: 'Operations Lead',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Khizar Saqib',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mirza Hamza Baig',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Gireesh Sachdev',
      role: 'Core Team Member',
      image1Src: 'https://via.placeholder.com/94x94',
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
  ];
  return (
    <>
    <div className="QuoteDiv">
    <Image src='/operatiomnsquote.svg' alt='' width={400} height={400} />
    </div>
    <div>
      {operators.map((item, index) => (
        <div className="Rectangle198" key={index}>
          <div className="picheader"></div>
          <div className="MaskGroup">
            <div className="Ellipse44"></div>
            <img className="image1" src={item.image1Src} alt="placeholder" />
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
    </div>
    </>
  );
};
