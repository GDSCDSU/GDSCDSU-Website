import React from 'react';
import Image from 'next/image';

const founders = [
  {
    name: 'Syed Ateeq',
    designation: 'GDSC@DSU Lead 2020-2021 & Founder',
    description: 'As a founder, he led over 100 students in coding bootcamps, tech conferences, and workshops. He also conducted more than 200 interviews each year to build a top-notch team of 10, whose talents have flourished at DSU. Moreover, he successfully secured sponsorship from the NYC-based startup Datacamp. His collaboration with Google injected a profound sense of excellence into these initiatives, paving the way for exponential career growth for those under his mentorship.',
    imageSrc: '/founders/syed_ateeq.png',
    socials: [
      { type: 'Facebook', image: 'FbIcon1.svg', link: 'https://www.facebook.com/profile.php?id=100004870847670&mibextid=ibOpuV' },
      { type: 'LinkedIn', image: 'LinkedInIcon1.svg', link: 'https://www.linkedin.com/in/syedateeq160/' },
      { type: 'Email', image: 'EmailIcon1.svg', link: 'mailto:syedateeq1000@gmail.com' },
      { type: 'Instagram', image: 'InstaIcon1.png', link: 'https://www.instagram.com/thesoftwarebatman/' },
    ]
  },
  {
    name: 'Dr. Ahmed Saeed Minhas',
    designation: 'Pro Vice Chancellor',
    description: "Our club owes much of its success to the steadfast support of our faculty advisor, Pro-Vice-Chancellor Dr. Ahmad Saeed Minhas. His unwavering dedication and guidance have been pivotal in shaping our initiatives. Dr. Minhas's commitment to our club's mission has played a crucial role in our growth and influence within the university community. We are immensely grateful for his leadership and mentorship, which have been invaluable assets on our journey towards excellence.",
    imageSrc: '/founders/dr_minhas.png',
    socials: [
      { type: 'Facebook', image: 'FbIcon1.svg', link: 'https://www.facebook.com/saeedminhas.ahmed?mibextid=ibOpuV' },
      { type: 'Email', image: 'EmailIcon1.svg', link: 'mailto:saeedminhas.ahmed@dsu.edu.pk' },
    ]
  },
];

const foundingmembers = [
  {
    name: 'Tarun Kumar',
    designation: 'TECH SAMURAI',
    description: "Like most passionate team-ups in Pakistan, the GDSC DSU Chapter started over a cup of chai and strong motivation of creating a developers-focused club. Inspired by courses like MIT's Missing Semester and Harvard CS50, the team was driven by providing quality sessions that will make them shine in their craft. Suffice to say, working with a set of resilient people who - through thick and thin - shared my ideology of selfless giving back was the highlight of 2020 for me.",
    imageSrc: '/founders/tarun_kumar.png',
  },
  {
    name: 'Bahawal Baloch',
    designation: 'AL SHINOBI',
    description: "Best thing about GDCS@DSU 2020 is that Rather than going for one big event and then staying dormant for the rest of the year, we focused on smaller activities with big impact. These consistent events helped a lot of my peers throughout the year and I am glad to be part of this team through its journey. I would highly recommend all students to join this exclusive team of geniuses to bring change and impact in our environment.",
    imageSrc: '/founders/bahawal_baloch.png',
  },
  {
    name: 'Abeer Shaikh',
    designation: 'VICE PRESIDENT',
    description: "Being a part of Google Developer Students Club for the tenure 2020 as a core team member was an honor for me. I learned and taught so many new skills through the bootcamps and workshops held by us. It enhanced my skills and made me focused about my goals. I encourage everyone to be a part of this great club where we learn and grow. Throughout it was a really good experience.",
    imageSrc: '/founders/abeer_shaikh.png',
  },
  {
    name: 'Alishan',
    designation: 'FLUTTER NINJA',
    description: "The experience of serving as a Flutter Lead at GDSC DSU was worth remembering for me. I not only led the team but learnt many things as well from my teammates. It was the best working and learning experience for me and many others. I would recommend and encourage students to take part in such initiatives to boost their learning and hands-on experience.",
    imageSrc: '/founders/alishan.png',
  },
  {
    name: 'Abdur Rauf Bughio',
    designation: 'CREATIVE DIRECTOR',
    description: "For me being a part of GDSC was a journey to find myself and grow myself. It was a great journey along with some of the best people who always encouraged me to do better and appreciated all my efforts. I feel like joining GDSC was one of the best decisions I made, and I would encourage others to make this decision as well. I hope that the work I did here with that amazing team had some impact on people's lives because in the end, that's what really matters.",
    imageSrc: '/founders/abdur_rauf_bughio.png',
  },
  {
    name: 'Sarah Nasir',
    designation: 'DATOS DALI',
    description: "One of my best decisions was to apply for GDSC as a core team member. It encouraged me to learn more about emerging technologies and not only helped me in enhancing my skills but also how to utilize them effectively. Being a core team member, my ideas and work were always appreciated which boosted up my confidence and helped me in presenting the best version of myself.",
    imageSrc: '/founders/sarah_nasir.png',
  },
  {
    name: 'Shifali Kalra',
    designation: 'FEMME TECH',
    description: "GDSC is an amazing platform for one who wants to learn. I got to know most of the extremely talented and open-minded people and the interaction with them made me learn most of the ideas that can make one's thinking vast. I will always be grateful to this platform for all of the experience and I would definitely recommend everyone to join GDSC and make a difference that is going to count.",
    imageSrc: '/founders/shifali_kalra.png',
  },
  {
    name: 'Muskan Karim',
    designation: 'MARKO TICS',
    description: "It was really an outstanding experience for me. I had the most memorable times in attending the meetings, and learning through the wider horizons. The moments experienced are priceless. My overall impression of this club can simply be termed as Epic.",
    imageSrc: '/founders/muskan_karim.png',
  },
  {
    name: 'Amina Kazim',
    designation: 'XANTARERS',
    description: "Working with GDSC has provided me with a collaborative forefront where like-minded people interacted and learned together. Hosting seminars and bootcamps on various topics has enhanced my learning passively and I am grateful for my teammates for always being supportive. GDSC is a forum for all those who want to learn and excel. I would definitely recommend everyone with the same mindset to join GDSC and help make a difference",
    imageSrc: '/founders/amina_kazim.png',
  },
  {
    name: 'Nimra Ali',
    designation: 'DATOS DALI',
    description: "As a core team member, DSC has provided me with an excellent opportunity to meet other students, share ideas, skills, and experience in managing and speaking at workshops. The entire program helped me grow tremendously, both personally and technically. I have learned a lot and achieved a lot of things throughout GDSC tenure 2020. I would highly encourage students at DSU to join GDSC and improve themselves in a productive and positive learning environment.",
    imageSrc: '/founders/nimra_ali.png',
  },
];

export default function Founder() {
  return (
    <main className="flex flex-col gap-10 min-h-screen bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {founders.map((member, index) => (
          <div key={index} className="flex flex-col h-40 mb-4 w-full bg-white shadow-2xl rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col items-center p-5">
              <div className="w-full h-10 mb-4 bg-green-50 flex items-center justify-center">
                <h1 className="text-black">Founder</h1>
              </div>
              <Image src="/dotbackground.svg" alt="" width={100} height={100} className="absolute w-80  opacity-5" />
              <Image src={member.imageSrc} alt={member.name} width={160} height={160} className="relative rounded-full mb-4" />
              <h2 className="font-bold text-lg text-gray-900">{member.name}</h2>
              <p className="text-black">{member.designation}</p>
              <p className="text-black text-justify mt-2">{member.description}</p>
              <div className="flex gap-2 mt-4">
                {member.socials.map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-black opacity-60 transition-opacity hover:opacity-100">
                    <Image src={`/${social.image}`} alt={social.type} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        {foundingmembers.map((member, index) => (
          <div key={index} className="flex flex-col h-40 mb-4 bg-white shadow-2xl rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col items-center p-5">
              <div className="w-full h-10 mb-4  flex items-center justify-left">
                <Image src="/dotimgvertical.svg" alt="" width={100} height={100} />
              </div>
              <Image src={member.imageSrc} alt={member.name} width={100} height={100} className="rounded-full mb-4" />
              <h2 className="font-bold text-lg text-gray-900">{member.name}</h2>
              <p className="text-black">{member.designation}</p>
              <p className="text-black text-justify mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
