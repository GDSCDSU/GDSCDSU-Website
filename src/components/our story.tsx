/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React,{useEffect} from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";
import { Avatar, Button, FooterDivider, Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import AOS from 'aos';
import { MdEvent } from "react-icons/md";
import 'aos/dist/aos.css';

const people = [
    {
      id: 1,
      name: "Syed Ateeq",
      designation: "GDSC@DSU Founder",
      image:
        "/Ateeq.svg",
    },
    {
      id: 2,
      name: "Abeer Shaikh",
      designation: "Vice President",
      image:
      "/Abeer.svg"    },
    {
      id: 3,
      name: "Tarun Kumar",
      designation: "Tech Samurai",
      image:
      "/Tarun.svg"    },
    {
      id: 4,
      name: "Alishan",
      designation: "Flutter Ninja",
      image:
      "/Alishan.svg"    },
    {
      id: 5,
      name: "Nimra Ali",
      designation: "Daten Sanders",
      image:
      "/Nimra.svg"    },
  ];
export default function OurStory(){
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        {/* Header Image */}
        <div data-aos="fade-up" >
            <img className="img-fluid" src="/OurStory.svg" alt=""/>
        </div>
        {/* Story Landing Page Starts */}
        <div className="m-5" data-aos="fade-up">
        <div className="d-flex flex-column align-items-center">
            <h1><b>The <span className="text-danger">Journey Begins</span></b></h1>
        </div>
        <br />
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
            <div className="card" style={{ borderColor: 'transparent' }}>
                <div className="card-body">
                <p className="text-secondary">
                    This was the best moment of my life. I received an email selecting me as the Google DSC Lead for my university. It felt like a dream come true, especially since I was the first applicant. With all the excitement, I also understood the significant responsibilities that came with the role.
                </p>
                <p className="text-secondary">
                    GDSC addressed the need for structured learning paths for specific technologies. For example, we held an online Flutter bootcamp with guidance from experienced alumni, providing a clear roadmap for those interested in front-end development. We reached out to all engineering departments at our university, emphasizing the value of software development, and are proud to see most of them now actively involved in learning software.
                </p>
                <p className="text-secondary">
                    The first time Google DSC arrived on campus, everything was going well until the COVID-19 outbreak impacted us all. Educational institutions closed, forcing us to shelve plans for tech events, talks, and bootcamps. However, GDSC embraced the challenge and successfully moved all activities online using Google Meet.
                </p>
                </div>
            </div>
            <br />
            <FooterDivider />
            </div>
            <div className="col-md-6">
            <CardContainer className="inter-var">
                <CardBody>
                <CardItem translateZ="100" className="w-96">
                    <Image
                    src="/journeybegins.svg"
                    height="0"
                    width="0"
                    className="img-fluid imgResponsive"
                    alt="thumbnail"
                    />
                </CardItem>
                </CardBody>
            </CardContainer>
            </div>
        </div>
        </div>
        <div className="m-5" data-aos="fade-up">
        <div className="d-flex flex-column align-items-center">
            <h1><b>The <span className="text-success">Best Team</span></b></h1>
        </div>
        <br />
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
            <div className="card" style={{ borderColor: 'transparent' }}>
                <div className="card-body">
                <p className="text-secondary">
                    The formation of a team is always the problem, the right talent and team can do wonders for your character. Our Recruitment process was strictly based on merit and the right talent where the talent quota was made to recruit five males and five females to be in the team. The same ratio of gender diversity can make your team more successful as compared to teams with less gender diversity.
                </p>
                <p className="text-secondary">
                    In computer science industry, there is very less amount of women's working and the problem is that they are not encouraged and motivated to work in the tech, we broke that stereotype, made it compulsory for every core team member to attend which resulted in female students discover Flutter and felt in love with the technology, now their vision is more clear and they aim to become Flutter Developers after graduation.
                </p>
                </div>
            </div>
            <br />
            <FooterDivider />
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
                <Button color="blue" className="custom-hover" pill>
                <RiTeamFill />
                View Team
                </Button>
            </div>
            </div>
            <div className="col-md-6">
                <CardContainer className="inter-var">
                    <CardBody>
                    <CardItem translateZ="100" className="w-100">
                        <Image
                        src="/theTeam.svg"
                        layout="responsive"
                        height="0"
                        width="0"
                        className="img-fluid imgpadding"
                        alt="thumbnail"
                        />
                    </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
        </div>

        <br/>
        <div className="m-5" data-aos="fade-up" >
            <div className="row" >
                <div className="col-md-3" >
        
                </div>
                <div className="col-md-6" >
                    <div className="d-flex flex-column text-center align-items-center" >
                        {/* <h5 style={{fontFamily:'Alice'}} >
                        <b>“No nation can ever be worthy of its existence that cannot take its women along with the men. No struggle can ever succeed without women participating side by side with men. There are two powers in the world; one is the sword and the other is the pen. There is a great competition and rivalry between the two. There is a third power stronger than both, that of the women.”
                        </b></h5>
                        <br/>
                        <h6 className="text-secondary" >~ Mohammad Ali Jinnah</h6> */}
                        <img src="/Quote.svg" alt="" className="" />
                    </div>
                </div>
                <div className="col-md-3" >

                </div>
            </div>
        </div>
        <br/>
        <div className="m-5" data-aos="fade-up" >
            <br/>
            <div className="row" >
                <div className="col-md-2" >
                    <img src="flutter.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-4" >
                    <div className="card" style={{borderColor:'transparent'}} >
                        <div className="card-heading" >
                            <h1><b>Flutter Bootcamp</b></h1>
                        </div>
                        <div className="card-body">
                            <p className="text-secondary" >
                            Flutter bootcamp was the first online bootcamp in DSC Pakistan which used to be held on weekend days like Friday, Saturday and Sunday at 9:00PM, which became an ideal time for students where we had attendance of more than 90+ students in a single class. After bootcamp, Gave paid internships to top three performers. 
                            </p>

                            <p className="text-secondary">
                            A student from India, reached out since Urdu and Hindi are similar. The journey became easier to learn Flutter in Urdu. Later we built a team to continue the legacy (here's Palivi joining the team virtually from india)
                            </p>
                        </div>   
                    </div>
                    <br/>
                    <FooterDivider/>
                </div>
                <div className="col-md-6" >
                    <CardContainer className="inter-var">
                        <CardBody >
                            <CardItem translateZ="100" className="w-full">
                            <Image
                                src="/flutterbootcamps.svg"
                                height="1000"
                                width="1000"
                                className="imgpadding"
                                alt="thumbnail"
                            />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </div>
        <div className="m-5" data-aos="fade-up" >
            <br/>
            <div className="row" >
                <div className="col-md-2" >
                    <img src="python.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-4" >
                    <div className="card" style={{borderColor:'transparent'}} >
                        <div className="card-heading" >
                            <h1><b>Python Bootcamp</b></h1>
                        </div>
                        <div className="card-body">
                            <p className="text-secondary" >
                            But teaching Data Science, which is new in Pakistan with very few opportunities, was still a long procedure, because it has requirements to be fulfilled and a bigger roadmap than any other technology. We understood the problem and made a decision to make a bootcamp completely focused on learning Python and planned later to start Data Science Bootcamp.
                            </p>
                            <p className="text-secondary" >
                            A series on interactive study jam on Python, where the core focus was to teach Development and Automation conducted by top-notch freelancers from DHA Suffa University in which concepts related to real-world programming were focused by core team members Tarun Kumar and Bahawal Baloch.
                            </p>
                            <p className="text-secondary">
                            Python Bootcamp was a huge success with more than 100 participants, who joined class on weekends, not only from DHA Suffa University but all the universities in Karachi collaborated.
                            </p>
                        </div>   
                    </div>
                    <br/>
                    <FooterDivider/>
                </div>
                <div className="col-md-6" >
                    <CardContainer className="inter-var">
                        <CardBody >
                            <CardItem translateZ="100" className="w-full">
                            <Image
                                src="/python1.svg"
                                height="1000"
                                width="1000"
                                className="imgpadding"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <br/>
                            <CardItem translateZ="100" className="w-full">
                            <Image
                                src="/python2.svg"
                                height="1000"
                                width="1000"
                                className="imgpadding"
                                alt="thumbnail"
                            />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </div>
        <br/>
        <div className="m-5" data-aos="fade-up" >
            <br/>
            <div className="row" >
                <div className="col-md-2" >
                    <img src="datacamplogo.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-4" >
                    <div className="card" style={{borderColor:'transparent'}} >
                        <div className="card-heading" >
                            <h1><b>Sponsored By Datacamp</b></h1>
                        </div>
                        <div className="card-body">
                            <p className="text-secondary" >
                            We also got sponsored by Silicon valley based Edtech startup DataCamp with 500 accounts. one account cost 60K PKR making us the only chapter to get this sponsorship.
                            </p>
                            <p className="text-secondary" >
                            Find Pakistan :) <a href="https://www.datacamp.com/donates" >Datacamp</a> 
                            </p>

                        </div>   
                    </div>
                    <br/>
                    <FooterDivider/>
                </div>
                <div className="col-md-6" >
                    <CardContainer className="inter-var">
                        <CardBody >
                            <CardItem translateZ="100" className="w-full">
                            <Image
                                src="/datacamp1.svg"
                                height="1000"
                                width="1000"
                                className="imgpadding"
                                alt="thumbnail"
                            />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                    
                </div>
            </div>
        </div>
        <div className="m-5" data-aos="fade-up" >
            <br/>
            <div className="row" >
                <div className="col-md-2" >
                    <img src="cyber.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-4" >
                    <div className="card" style={{borderColor:'transparent'}} >
                        <div className="card-heading" >
                            <h1><b>Cyber Security Bootcamp</b></h1>
                        </div>
                        <div className="card-body">
                            <p className="text-secondary" >
                            In a world full of cyber security threats, we need defenders who can help us save the world for good, so our last bootcamp was focused on cyber security teaching people fundamentals and to ace their technical interviews.</p>
                        </div>   
                    </div>
                    <br/>
                    <FooterDivider/>
                </div>
                <div className="col-md-6" >
                    <CardContainer className="inter-var">
                        <CardBody >
                            <CardItem translateZ="100" className="w-full">
                            <Image
                                src="/cyber1.svg"
                                height="1000"
                                width="1000"
                                className="imgpadding"
                                alt="thumbnail"
                            />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                    
                </div>
            </div>
        </div>
        <div className="m-5" data-aos="fade-up" >
            <br/>
            <div className="row" >
                <div className="col-md-2" >
                    <img src="git.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-4" >
                    <div className="card" style={{borderColor:'transparent'}} >
                        <div className="card-heading" >
                            <h1><b>GIT Crash Course</b></h1>
                        </div>
                        <div className="card-body">
                            <p className="text-secondary" >
                            Breaking Records and Creating History was the main vision in which we also identified a major issue where students were not implementing the concepts of version control system, in which an ultimate guide series was made in native urdu language to educate students. (we taught github basically :D)                            </p>
                        </div>   
                    </div>
                    <br/>
                    <FooterDivider/>
                </div>
                <div className="col-md-6" >
                    <CardContainer className="inter-var">
                        <CardBody >
                            <CardItem translateZ="100" className="w-full">
                            <Image
                                src="/git1.svg"
                                height="1000"
                                width="1000"
                                className="imgpadding"
                                alt="thumbnail"
                            />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                    
                </div>
            </div>
        </div>
        <div className="m-5" data-aos="fade-up" >
            <br/>
            <div className="row" >
                <div className="col-md-2" >
                    <img src="toys.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-10" >
                    <div className="card" style={{borderColor:'transparent'}} >
                        <div className="card-heading" >
                            <div className="row" >
                                <div className="col-md-8" >
                                    <h3><b>More events & webinars that we conducted</b></h3>
                                </div>
                                <div className="col-md-4" >
                                <Button className="custom-hover" color="blue" pill>
                                    <MdEvent className="m-1" />
                                    View All
                                </Button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="card-body d-flex flex-column align-items-center text-center">
                          <div className="row" >
                            <div className="col-md-2 my-3" >
                                <img className="img-fluid" src="/event1.svg" alt="" />
                            </div>
                            <div className="col-md-2 my-3" >
                            <img className="img-fluid" src="/event2.svg" alt="" />
                            </div>
                            <div className="col-md-2 my-3" >
                            <img className="img-fluid" src="/event3.svg" alt="" />
                            </div>
                            <div className="col-md-2 my-3" >
                            <img className="img-fluid" src="/event4.svg" alt="" />
                            </div>
                            <div className="col-md-2 my-3" >
                            <img className="img-fluid" src="/event5.svg" alt="" />
                            </div>
                          </div>                              
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img className="img-fluid" src="/TheEnd.svg" alt=""/>      
        </div>
        {/* Story Landing Page Ends */}
        <div>
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
        </div>
        </>
      );
}