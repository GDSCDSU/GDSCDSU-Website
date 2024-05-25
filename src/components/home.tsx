/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect,useRef} from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Toast } from "flowbite-react";
import { MdStars } from "react-icons/md";

export default function Home(){
    
    const [showToast, setShowToast] = useState(false);

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
    const allLogos = [...logos, ...logos];
    const allHrefs = [...hrefs, ...hrefs];

    useEffect(() => {
        AOS.init();
    }, []);

    const countingRef = useRef(null);

    useEffect(() => {
        AOS.init();
        const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(countingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = () => {
    const counters = document.querySelectorAll(".count");
    const speed = 400;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

    return (
        
    <>
    <div data-aos="fade-up" >
        <img className="img-fluid" src="/Header.svg" alt=""/>
    </div>
    <br/>
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
    <div ref={countingRef}>
        <div className="full-page-content" data-aos="fade-up">
            <div className="d-flex flex-column align-items-center" >
                <h1><b> The Community is Growing Everyday</b></h1>
            </div>
            <br/>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                    <img src="/Years.svg" alt="" className="img-fluid mb-3" />
                    <h1>
                        <b>
                        <span className="count" data-target="5">
                            0
                        </span>
                        +
                        </b>
                    </h1>
                    <p className="text-secondary">YEARS</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                    <img src="/Attendees.svg" alt="" className="img-fluid mb-3" />
                    <h1>
                        <b>
                        <span className="count" data-target="2000">
                            0
                        </span>
                        +
                        </b>
                    </h1>
                    <p className="text-secondary">Attendees</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                    <img src="/events.svg" alt="" className="img-fluid mb-3" />
                    <h1>
                        <b>
                        <span className="count" data-target="80">
                            0
                        </span>
                        +
                        </b>
                    </h1>
                    <p className="text-secondary">Events</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="full-page-content" >
        <div className="d-flex flex-column align-items-center" >
            <h1><b>Highlights</b></h1>
        </div>
        <br/>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src="/carousel1.svg" alt="..." />
                <img src="/carousel2.svg" alt="..." />
                <img src="/carousel3.svg" alt="..." />
                <img src="/carousel4.svg" alt="..." />
                <img src="/carousel5.svg" alt="..." />
                <img src="/carousel6.svg" alt="..." />
            </Carousel>
        </div>
    </div>
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