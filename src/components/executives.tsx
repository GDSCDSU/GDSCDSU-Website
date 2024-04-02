import React from 'react';
import '../styles/executives.module.css'; // Import the generated CSS file
import Image from 'next/image';

export default function Executives() {

  const executives = [
    {
      name: 'Asaad Mahmood',
      role: 'Media & Video Production Lead',
      description: "Asaad Mahmood, as our Video Editing and Media Production Lead, played a crucial role in shaping our content strategy and brand presence. His dedication to empowering others within the team and beyond reflected his commitment to excellence and innovation.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' // Assuming this link will be redirected somewhere
    },
    {
      name: 'Mohib Ismail',
      role: 'Executive Core Team Member',
      description: "As a member of GDSC, Mohib Ismail played a crucial role in organizing and conducting the first web development workshop. Through his dedication and mentorship, he empowered students with practical skills essential for their journey in web development.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' 
    },
    {
      name: 'Areeba Saleem',
      role: 'Executive Core Team Member',
      description: "Areeba Saleem, in her role as Content Writer, understood the critical importance of content as the first impression. With this in mind, she dedicated herself to ensuring top-notch content writing, consistently delivering the best quality work.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' 
    },
    {
      name: 'Muhammad Arbaz Sohail',
      role: 'Executive Core Team Member',
      description: "Muhammad Arbaz Sohail, a GDSC member, led the Flutter Bootcamp, sharing his expertise in mobile app development to teach participants Flutter skills. This event sparked interest among many students, inspiring them to start their journey as app developers.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' 
    },
    {
      name: 'Muhammad Bilal',
      role: 'Marketing Lead',
      description: "Muhammad Bilal, our Marketing Lead, brought creativity into our strategies and fresh ideas that changed our approach. His innovative contributions boosted our marketing efforts to new heights.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' 
    },
    {
      name: 'Muhammad Ateeb',
      role: 'Operations Lead',
      description: "Muhammad Ateeb, Operations Lead, is known for his excellent work ethic, punctuality. He ensured tasks are completed on time and with precision. Ateeb serves as the backbone of all events, guaranteeing smooth operations and efficiency.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' 
    },
    {
      name: 'Wardha Haider',
      role: 'Team Management Lead',
      description: "Wardha Haider demonstrated great organization and coordination skills as the Event Management Lead. Her experience guaranteed flawless execution of events. At DevFest Karachi 2021, she made history as the first female winner from DHA Suffa University, securing a prize in the Women's Online Safety Hackathon.",
      imageSrc: 'https://via.placeholder.com/94x94',
      linkedinProfile: 'LinkedIn Profile' 
    },
  ];

  return (
    <>
    <div className="QuoteDiv">
      <Image src='/executivesquote.svg' alt='' width={400} height={400}/>
    </div>

    {executives.map((item, index) => (
      <div className="Rectangle198" key={index}>
        <div className="MaskGroup">
          <div className="Ellipse44"></div>
          <img className="image1" src={item.imageSrc} alt="placeholder" />
          <img className="profilepic" src={item.imageSrc} alt="placeholder" />
        </div>
        <div className="name">{item.name}</div>
        <div className="role">{item.role}</div>
        <div className="Description">{item.description}</div>
        <div className="Group718">
          <div className="Rectangle191"></div>
          <div className="Vector"></div>
          <div className="LinkedinProfile">{item.linkedinProfile}</div>
        </div>
      </div>
    ))}
    </>
  );
}
