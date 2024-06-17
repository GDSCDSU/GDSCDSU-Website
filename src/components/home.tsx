/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect,useRef} from "react";
import Image from "next/image";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Toast } from "flowbite-react";
import { MdStars } from "react-icons/md";
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import CountUp from 'react-countup';

export default function Home(){
    
    const [showToast, setShowToast] = useState(false);
    const [partners, setPartners] = useState([]);
    const [highlights, setHighlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowToast(true);
        playMessageSound();
    }, 1000);

        return () => clearTimeout(timer);
    },[]);

    const playMessageSound = () => {
        const audio = new Audio('/message.mp3');
        audio.play().catch(error => console.error("Audio play failed:", error));
    };

        const logos = [
        "/Maskgroup.svg",
        "/datacamp.svg",
        "/zapdas.svg",
        "/geeks.svg",
        "/vivids.svg",
        ];
        const hrefs =[
            "https://bitrupt.co/",
            "https://www.datacamp.com/",
            "https://zapdas.co/",
            "https://geeksofkolachi.com/",
            "https://www.facebook.com/vividlabpk?_rdc=1&_rdr",
            ];
        const allHrefs = [...hrefs, ...hrefs];        
        const allLogos = [...logos, ...logos];
       
    
    
    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const response = await axios.get('https://gdscdsu.com/api/highlight');
                const responseData = response.data;
    
                // Check if responseData is an array or object
                if (Array.isArray(responseData)) {
                    setHighlights(responseData);
                } else if (typeof responseData === 'object') {
                    // Convert the object to an array
                    const highlightsArray = Object.values(responseData);
                    setHighlights(highlightsArray);
                } else {
                    console.error('Unexpected response format:', responseData);
                }
            } catch (error) {
                console.error('Error fetching highlights:', error);
            }
        };
    
        fetchHighlights();
    }, []);
    
    const [counters, setCounters] = useState([
        { target: 5, current: 0 },
        { target: 2000, current: 0 },
        { target: 80, current: 0 }
    ]);
    const [countersVisible, setCountersVisible] = useState(false);
    const countersRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                countersRef.current &&
                window.innerHeight + window.scrollY >= countersRef.current.offsetTop
            ) {
                setCountersVisible(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    useEffect(() => {
        if (countersVisible) {
            setCounters(prevCounters =>
                prevCounters.map(counter => ({ ...counter, current: counter.target }))
            );
        }
    }, [countersVisible]);
    

    
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        
    <>
    {/* Header Image: */}
    <div data-aos="fade-up" >
        <img className="img-fluid" src="/Header.svg" alt=""/>
    </div>
    <br/>
    {/* Upcoming Event Card:*/}
    {showToast && (
        <div className="scrollable-content" >
        <Toast className="m-2 toast-relative">
          <div className="flex items-start">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
              <MdStars className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-black dark:text-white">New Event</span>
              <div className="mb-2 text-sm font-normal text-gray"><b> Build with AI: Introduction to Gemini </b></div>
            </div>
            <Toast.Toggle />
          </div>
        </Toast>
        </div>
      )}
    <br/>
    {/* What is GDSC Portion: */}
    <div className="d-flex justify-content-center align-items-center full-page-content" data-aos='fade-up'>
        <div className="container" >
            <div className="row">
                <div className="col-md-6 mb-5">
                    <Image src="isGdsc.svg" alt="" height={1000} width={1000}/>
                </div>
                <div className="col-md-6 mb-5">
                    <Image
                        src="/what.svg"
                        height={600}
                        width={400}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
    {/* About Section: */}
    <div className="bg-image" data-aos="fade-up">
        <div className="d-flex justify-content-center align-items-center full-page-content" style={{height:'110%'}}  >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <Image
                            src="/dhaSuffa.svg"
                            height={600}
                            width={400}
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 mb-5">
                        <Image src="About.svg" alt="" height={1000} width={1000}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {/* Partners */} 
    <br/>
    <div className="m-5" >
        <div className="d-flex flex-column align-items-center" >
            <h2><b>Our Partners</b></h2>
        </div>
        <br/>
        <div className="logo-container">
            <div className="logo-slider">
                {allLogos.map((logo, index) => (
                <a className="logo-item" href={allHrefs[index]} key={index} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="" className="img-fluid" />
                </a>
                ))}
            </div>
        </div>
    </div>
    <br/>
    {/* What GDSC Does Portion: */}
    <div className="m-5" >
    <div className="d-flex flex-column align-items-center" >
        <h2><b>What we do</b></h2>
        <p>Our professional and smart team work together to deliver you</p>
    </div>
    <div className="row" >
        <div className="col-md-2 d-flex flex-column align-items-center" >
            <img className="img-fluid" src="/Dots.svg" alt=""/>
        </div>
        <br/>
        <div className="col-md-8" >
            <div className="row" >
                <div className="col-md-4 my-3" >
                <div className="shadow-sm p-3 rounded-lg Blue-hover-effect-container">
                    <div className="content-to-hide">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <img src='/worshopicon.svg' alt="" width={50} height={50} style={{display:'block' , margin:'0 auto'}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                <h5 className="text-primary"><b>WorkShops</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="m-1" >
                        GDSC conducts workshops and training on latest topics and technologies to boost students technical skills.
                    </p>
                    </div>
                </div>
                <br/>
                <div className="col-md-4 my-3" >
                    <div className="shadow-sm p-3 rounded-lg Success-hover-effect-container">
                        <div className="content-to-hide" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <img src='/codeicon.svg' alt="" width={50} height={50} style={{display:'block' , margin:'0 auto'}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <h5 className="text-success"><b>Hackathons</b></h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <p className="m-1" >
                        GDSC hosts hackathons and coding contests to enhance students teamwork, and problem-solving through real-world challenges.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="col-md-4 my-3" >
                    <div className="shadow-sm p-3 rounded-lg Danger-hover-effect-container align-middle">
                        <div className="content-to-hide" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <img src='/techtalkicon.svg' alt="" width={50} height={50} style={{display:'block' , margin:'0 auto'}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                <h5 className="text-danger"><b>Tech Talks</b></h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <p className="m-1" >
                        GDSC regularly invites industry experts for tech talks, offering students insights into technology trends and career advice.
                        </p>   
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-4 my-3" >
                    <div className="shadow-sm p-3 rounded-lg Success-hover-effect-container">
                        <div className="content-to-hide" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <img src='/bootcampsicon.svg' alt="" width={50} height={50} style={{display:'block' , margin:'0 auto'}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                <h5 className="text-success" ><b>BootCamps</b></h5>
                                </div>
                            </div>
                        </div>

                        </div>
                        <p className="m-1" >
                            GDSC offers targeted bootCamps and intensive training for rapid, hands-on skill mastery in specific technologies.
                        </p>    
                    </div>
                </div>
                <br/>
                <div className="col-md-4 my-3" >
                    <div className="shadow-sm p-3 rounded-lg Danger-hover-effect-container">
                        <div className="content-to-hide" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                    <img src='/studyjamsicon.svg' alt="" width={50} height={50} style={{display:'block' , margin:'0 auto'}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="row justify-content-center">
                                <div className="col text-center">
                                <h5 className="text-danger" ><b>Study Jams</b></h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        <p className="m-1" >
                            GDSC conducts study jams for collaborative learning on specific topics, promoting peer learning, teamwork, and knowledge exchange.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="col-md-4 my-3" >
                    <div className="shadow-sm p-3 rounded-lg Blue-hover-effect-container">
                        <div className="content-to-hide" >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col text-center">
                                        <img src='/careericon.svg' alt="" width={50} height={50} style={{display:'block' , margin:'0 auto'}}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col text-center">
                                    <h5 className="text-primary" ><b>Career Development</b></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="m-1" >
                        GDSC offers career development sessions focusing on resume building, interview skills, and networking, boosting employability and confidence.
                        </p>
                    </div>
                </div>
            </div>    
        </div>
        <div className="col-md-2 d-flex flex-column align-items-center" >
            <img className="img-fluid" src="/Boxes.svg" alt=""/>
        </div>
    </div>
</div>
    {/* Community Counter: */}
    
    <div id="counters-section" ref={countersRef}>
            <div className="full-page-content" data-aos="fade-up" data-aos-once="true">
                <div className="d-flex flex-column align-items-center">
                    <h1><b>The Community is Growing Everyday</b></h1>
                </div>
                <br />
                <div className="row d-flex justify-content-center text-center">
                    {counters.map((counter, index) => (
                        <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    src={index === 0 ? '/Years.svg' : index === 1 ? '/Attendees.svg' : '/events.svg'}
                                    alt=""
                                    className="img-fluid mb-3"
                                />
                                <h1>
                                    <b>
                                        <CountUp start={0} end={counter.target} duration={10} />
                                        +
                                    </b>
                                </h1>
                                <p className="text-secondary">
                                    {index === 0 ? 'YEARS' : index === 1 ? 'Attendees' : 'Events'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    {/* Highlights Carousel: */}
    <div className="full-page-content">
      <div className="d-flex flex-column align-items-center">
        <h1><b>Highlights</b></h1>
      </div>
      <br />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        {highlights.length > 0 ? (
          <Carousel>
            {highlights[1].map((highlight, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={highlight.picture}
                  alt={`Highlight ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No highlights available.</p>
        )}
      </div>
    </div>

    {/* Sponsor Form: */}
<div className="full-page-content" data-aos='fade-up' >
    <div className="shadow-sm p-5 rounded-lg" style={{backgroundColor:'#FEECEC'}} >
        <div className="row align-items-center">
            <div className="col-md-6">
                <h1 className="text-danger" ><b>Become our Sponsor</b></h1>
                <br />
                <p className="text-secondary" >Grow audience with GDSC@DSU sponsorships</p>
                <p className="text-secondary" >Learn more</p>
            </div>
            <div className="col-md-3">
                <Button className="custom-hover" color="failure" pill>
                Become Sponsor
                </Button>
            </div>
            <div className="col-md-3">
                <img src="/sponsor.svg" alt="" className="img-fluid" />
            </div>
        </div>
    </div>
</div>


{/* Footer: */}
<div className="" >
    <img src="/ColorBoxes.svg" className="img-fluid" alt="" />
</div>
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
)
}