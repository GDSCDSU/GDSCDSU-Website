// Founder.js

import styles from '../styles/founder.module.css'; // Import the CSS module
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Founder() {

  const founders = [
    {
      name: 'Syed Ateeq',
      designation: 'GDSC@DSU Lead 2020-2021 & Founder',
      description: 'As a founder, he led over 100 students in coding bootcamps, tech conferences, and workshops. He also conducted more than 200 interviews each year to build a top-notch team of 10, whose talents have flourished at DSU. Moreover, he successfully secured sponsorship from the NYC-based startup Datacamp. His collaboration with Google injected a profound sense of excellence into these initiatives, paving the way for exponential career growth for those under his mentorship.',
      imageSrc: 'https://via.placeholder.com/238x238',
      socials: [
        { type: 'Rectangle' },
        { type: 'Rectangle' },
        { type: 'Email' },
        { type: 'Rectangle' }
      ]
    },
    {
      name: 'Dr. Ahmed Saeed Minhas',
      designation: 'GDSC@DSU Lead 2020-2021 & Founder',
      description: "Our club owes much of its success to the steadfast support of our faculty advisor, Pro-Vice-Chancellor Dr. Ahmad Saeed Minhas. His unwavering dedication and guidance have been pivotal in shaping our initiatives. Dr. Minhas's commitment to our club's mission has played a crucial role in our growth and influence within the university community. We are immensely grateful for his leadership and mentorship, which have been invaluable assets on our journey towards excellence.",
      imageSrc: 'https://via.placeholder.com/238x238',
      socials: [
        { type: 'Rectangle' },
        { type: 'Rectangle' },
      ]
    },
  ];

  const foundingmembers = [
    {
      name: 'tarun kumar',
      designation: 'TECH SAMURAI',
      description: "Like most passionate team-ups in Pakistan, the GDSC DSU Chapter started over a cup of chai and strong motivation of creating a developers-focused club. Inspired by courses like MIT's Missing Semester and Harvard CS50, the team was driven by providing quality sessions that will make them shine in their craft. Suffice to say, working with a set of resilient people who - through thick and thin - shared my ideology of selfless giving back was the highlight of 2020 for me.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Bahawal Baloch',
      designation: 'AL SHINOBI',
      description: "Best thing about GDCS@DSU 2020 is that Rather than going for one big event and then staying dormant for the rest of the year, we focused on smaller activities with big impact. These consistent events helped a lot of my peers throughout the year and I am glad to be part of this team through it's journey. would highly recommend for all students to join this exclusive team of geniuses to bring change and impact in our environment.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Abeer Shaikh',
      designation: 'VICE PRESIDENT',
      description: "Being a part of Google Developer Students Club for the tenure 2020 as a core team member was a honour for me, learned and taught so many new skills through the bootcamps and workshops held by us. It enhanced my skills and made me focused about my goals. I encourages everyone to be a part of this great club where we learn and grow. Throughout it was a reaily good experience.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Abeer Shaikh',
      designation: 'VICE PRESIDENT',
      description: "Being a part of Google Developer Students Club for the tenure 2020 as a core team member was a honour for me, learned and taught so many new skills through the bootcamps and workshops held by us. It enhanced my skills and made me focused about my goals. I encourages everyone to be a part of this great club where we learn and grow. Throughout it was a reaily good experience.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Abeer Shaikh',
      designation: 'VICE PRESIDENT',
      description: "Being a part of Google Developer Students Club for the tenure 2020 as a core team member was a honour for me, learned and taught so many new skills through the bootcamps and workshops held by us. It enhanced my skills and made me focused about my goals. I encourages everyone to be a part of this great club where we learn and grow. Throughout it was a reaily good experience.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Alishan',
      designation: 'FLUTTER NINJA',
      description: "The experience of serving as a Flutter Lead at GDSC DSU was worth remembering for me. I not only led the team but learnt many things as well from my team mates. It was the best working and learning experience for me and many others. / would recommend/ encourage students to take part in such initiatives to boost their learning and hands on.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Abdur Rauf Bughio',
      designation: 'CREATIVE DIRECTOR',
      description: "For me being a part of GDSC was a journey to find myself and grow my self, it was a great journey along with some of the best people who always encouraged me to do better and appreciated all my efforts. / feel like joining GDSC was one of the best decision I made, and I would encourage others to make this decision as well. I hope that the work I did here with that amazing team had some impact on people's lives because in the end that's what really matters.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Sarah Nasir',
      designation: 'DATOS DALI',
      description: "One of my best decisions was to apply for GDSC as a core team member. It encouraged me to learn more about emerging technologies and not only helped me in enhancing my skills but also how to utilize them effectively. Being a core team member, my ideas and work were always appreciated which boosted up my confidence and helped me in presenting the best version out of me.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Shifali Kalra',
      designation: 'FEMME TECH',
      description: "GDSC is an amazing platform for one who wants to learn. I got to know most of the extremely talented and open-minded people and the interaction with them made me learn most of the ideas that can make one's thinking vast. / will always be grateful to this platform for all of the experience and I would definitely recommend everyone to join GDSC and make a difference that is gonna count.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Muskan Karim',
      designation: 'MARKO TICS',
      description: "It was really an outstanding experience for me. I had the most memorable times in attending the meetings, and learning through the wider horizons. The moments experienced are priceless. My overall impression for this club can simply be termed as Epic.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Amina Kazim',
      designation: 'XANTARERS',
      description: "Working with GDSC has provided me with a collaborative forefront where like-minded people interacted and learned together. Hosting seminars and bootcamps on various topics has enhanced my learning passively and I am grateful for my team mates for always being supportive. GDSC is a forum for all those who want to learn and excel. I would definitely recommend everyone with the same mindset to join GDSC and help make a difference",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },
    {
      name: 'Nimra Ali',
      designation: 'DATOS DALI',
      description: "As a core team member, DSC has provided me with an excellent opportunity to meet other students, share ideas, skills, and experience in managing and speaking at workshops. The entire program helped me grow tremendously, both personally and technically. I have learned a lot and achieved a lot of things throughout GDSC tenure 2020. I would highly encourage students at DSU to join GDSC and improve themselves in a productive and positive learning environment.",
      image1Src: 'https://via.placeholder.com/94x94',
      image2Src: 'https://via.placeholder.com/109x94'
    },

  ];
  return (
    <>
    <div className='QuoteDiv'>
    <img className={styles.Quoteimg} src='/founderquote.svg' alt='' />
    </div>
    
    
    
    <div className="row">
  {founders.map((founder, index) => (
    <div key={index} className="col-lg-4">
      <div className={`${styles.header} ${index === 1 ? styles.facultyHeader : ''}`}>
          <h1>{index === 1 ? 'Faculty Advisor' : 'Founder'}</h1>
      </div>

      <div className={styles.card}>
        <img className={styles.dotimg} src='/dotbackground.svg' alt='' />

        <img className="1" style={{ width: 238, height: 238, left: 0, top: 0, position: 'absolute' }} src={founder.imageSrc} />
        <h2>{founder.name}</h2>
        <p>{founder.designation}</p>
        <p>{founder.description}</p>

        <div className={styles.group}>
          {founder.socials.map((social, index) => (
            <div className={styles.icon} key={index}>
              {social.type === 'Email' ? (
                <div className={styles.Email}>
                  <div className={styles.Vector} />
                  <div className={styles.Vector} />
                </div>
              ) : (
                <>
                  <div className={styles[social.type]} />
                  <div className={styles.Vector} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>


   

<div className="row">
      {foundingmembers.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <div className={styles.Ellipse} />
              <img className="1" src={item.image1Src} />
              <img className={styles.Img92921} src={item.image2Src} />
            </div>

            <div className={styles.name}>{item.name}</div>
            <div className={styles.designation}>{item.designation}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
