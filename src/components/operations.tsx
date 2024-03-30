// Operations.js

import React from 'react';
import '../styles/teams.module.css'; // Import the CSS file
import Image from 'next/image';

export default function Operations() {
  return (
    <>
    <div className="QuoteDiv">
    <Image src='/operatiomnsquote.svg' alt='' width={400} height={400} />
    </div>
      <div className="Rectangle198">
        <div className="picheader"></div>
        <div className="MaskGroup">
          <div className="Ellipse44"></div>
          <img className="image1" src="https://via.placeholder.com/94x94" alt="placeholder" />
          <img className="profilepic" src="https://via.placeholder.com/94x94" alt="placeholder" />
        </div>  
        <div className="name">Muhammad Ateeb</div>
        <div className="role">Operations Lead</div>
        <div className="Group718">
          <div className="Rectangle191"></div>
          <div className="Vector"></div>
          <div className="LinkedinProfile">LinkedIn Profile</div>
        </div>  
      </div>      
    </>
  );
};
