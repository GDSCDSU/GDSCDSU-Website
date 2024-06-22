import React from 'react';
import Image from 'next/image';
import '../styles/teams.css';

export default function Founder() {
  return (
    <main className="flex flex-col gap-10 min-h-screen bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
      <div data-aos="fade-up" className="flex w-full h-full justify-center py-8">
        <Image src='/founderquote.svg' className='quote-image' alt='' width={800} height={200} />
      </div>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col mb-4 w-full bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="relative w-full text-center py-2 rounded-t-xl bg-blue-500">
            <h1 className="text-white font-bold text-lg tracking-widest">FOUNDER</h1>
          </div>
          <div className="relative flex flex-col items-center p-3">
            <Image src="/dotbackground.svg" alt="" style={{ top: '-2%' }} width={462} height={300} className="absolute w-full opacity-5" />
            <Image src='/founders/syed_ateeq.png' alt='Syed Ateeq' width={160} height={160} className="relative rounded-full mb-4 border-4 border-white -mt-16" />
            <h3 className="font-bold text-xl text-gray-900">Syed Ateeq</h3>
            <p className="text-gray-600">GDSC@DSU Lead 2020-2021 & Founder</p>
            <p className="text-gray-700 text-sm text-justify mt-2">
              As a founder, he led over 100 students in coding bootcamps, tech conferences, and workshops. He also conducted more than 200 interviews each year to build a top-notch team of 10, whose talents have flourished at DSU. Moreover, he successfully secured sponsorship from the NYC-based startup Datacamp. His collaboration with Google injected a profound sense of excellence into these initiatives, paving the way for exponential career growth for those under his mentorship.
            </p>
            <div className="flex gap-1 mt-4">
              <a href='https://www.facebook.com/profile.php?id=100004870847670&mibextid=ibOpuV' target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all">
                <Image src='/FbIcon1.svg' alt='Facebook' width={30} height={30} />
              </a>
              <a href='https://www.linkedin.com/in/syedateeq160/' target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all">
                <Image src='/LinkedInIcon1.svg' alt='LinkedIn' width={30} height={30} />
              </a>
              <a href='mailto:syedateeq1000@gmail.com' target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all">
                <Image src='/EmailIcon1.svg' alt='Email' width={30} height={30} />
              </a>
              <a href='https://www.instagram.com/thesoftwarebatman/' target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all">
                <Image src='/InstaIcon1.png' alt='Instagram' width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4 w-full bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="relative w-full text-center py-2 rounded-t-xl bg-green-400">
            <h1 className="text-white font-bold text-lg tracking-widest">FACULTY ADVISOR</h1>
          </div>
          <div className="relative flex flex-col items-center p-3">
            <Image src="/dotbackground.svg" alt="" style={{ top: '-2%' }} width={462} height={300} className="absolute w-full opacity-5" />
            <Image src='/founders/dr_minhas.png' alt='Dr. Ahmed Saeed Minhas' width={160} height={160} className="relative rounded-full mb-4 border-4 border-white -mt-16" />
            <h3 className="font-bold text-xl text-gray-900">Dr. Ahmed Saeed Minhas</h3>
            <p className="text-gray-600">Vice Chancellor</p>
            <p className="text-gray-700 text-sm text-justify mt-2">
              Our club owes much of its success to the steadfast support of our faculty advisor, Pro-Vice-Chancellor Dr. Ahmad Saeed Minhas. His unwavering dedication and guidance have been pivotal in shaping our initiatives.The commitment of Dr.Minhas to the mission of our club has played a crucial role in our growth and influence within the university community. We are immensely grateful for his leadership and mentorship, which have been invaluable assets on our journey towards excellence.
            </p>
            <div className="flex gap-1 mt-4">
              <a href='https://www.facebook.com/saeedminhas.ahmed?mibextid=ibOpuV' target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all">
                <Image src='/FbIcon1.svg' alt='Facebook' width={30} height={30} />
              </a>
              <a href='mailto:saeedminhas.ahmed@dsu.edu.pk' target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all">
                <Image src='/EmailIcon1.svg' alt='Email' width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
        
        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/tarun_kumar.png' alt='Tarun Kumar' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Tarun Kumar</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>TECH SAMURAI</p>
            <p className="founder-description text-black-800 text-md text-justify">
              Like most passionate team-ups in Pakistan, the GDSC DSU Chapter started over a cup of chai and strong motivation of creating a developers-focused club. Inspired by courses like the Missing Semester of MIT and Harvard CS50, the team was driven by providing quality sessions that will make them shine in their craft. Suffice to say, working with a set of resilient people who - through thick and thin - shared my ideology of selfless giving back was the highlight of 2020 for me.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/bahawal_baloch.png' alt='Bahawal Baloch' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Bahawal Baloch</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>AL SHINOBI</p>
            <p className="founder-description text-black-800 text-md text-justify">
              Best thing about GDCS@DSU 2020 is that Rather than going for one big event and then staying dormant for the rest of the year, we focused on smaller activities with big impact. These consistent events helped a lot of my peers throughout the year and I am glad to be part of this team through its journey. I would highly recommend all students to join this exclusive team of geniuses to bring change and impact in our environment.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/abeer_shaikh.png' alt='Abeer Shaikh' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Abeer Shaikh</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>VICE PRESIDENT</p>
            <p className="founder-description text-black-800 text-md text-justify">
              Being a part of Google Developer Students Club for the tenure 2020 as a core team member was an honor for me. I learned and taught so many new skills through the bootcamps and workshops held by us. It enhanced my skills and made me focused about my goals. I encourage everyone to be a part of this great club where we learn and grow. Throughout it was a really good experience.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/Alishan.png' alt='Alishan' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Alishan</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>FLUTTER NINJA</p>
            <p className="founder-description text-black-800 text-md text-justify">
              The experience of serving as a Flutter Lead at GDSC DSU was worth remembering for me. I not only led the team but learnt many things as well from my teammates. It was the best working and learning experience for me and many others. I would recommend and encourage students to take part in such initiatives to boost their learning and hands-on experience.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/abdur_rauf_bughio.png' alt='Abdur Rauf Bughio' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 35, marginLeft: 10 }}>Abdur Rauf Bughio</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>CREATIVE DIRECTOR</p>
            <p className="founder-description text-black-800 text-md text-justify">
              For me being a part of GDSC was a journey to find myself and grow myself. It was a great journey along with some of the best people who always encouraged me to do better and appreciated all my efforts. I feel like joining GDSC was one of the best decisions I made, and I would encourage others to make this decision as well. I hope that the work I did here with that amazing team had some impact on lives of the people because in the end, that is what really matters.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/sarah_nasir.png' alt='Sarah Nasir' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Sarah Nasir</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>DATOS DALI</p>
            <p className="founder-description text-black-800 text-md text-justify">
              One of my best decisions was to apply for GDSC as a core team member. It encouraged me to learn more about emerging technologies and not only helped me in enhancing my skills but also how to utilize them effectively. Being a core team member, my ideas and work were always appreciated which boosted up my confidence and helped me in presenting the best version of myself.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/shifali_kalra.png' alt='Shifali Kalra' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Shifali Kalra</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>FEMME TECH</p>
            <p className="founder-description text-black-800 text-md text-justify">
              GDSC is an amazing platform for one who wants to learn. I got to know most of the extremely talented and open-minded people and the interaction with them made me learn most of the ideas that can make thinking vast of an individual. I will always be grateful to this platform for all of the experience and I would definitely recommend everyone to join GDSC and make a difference that is going to count.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/muskan_karim.png' alt='Muskan Karim' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: -20, marginLeft: 10 }}>Muskan Karim</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>MARKO TICS</p>
            <p className="founder-description text-black-800 text-md text-justify">
              It was really an outstanding experience for me. I had the most memorable times in attending the meetings, and learning through the wider horizons. The moments experienced are priceless. My overall impression of this club can simply be termed as Epic.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/amina_kazim.png' alt='Amina Kazim' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Amina Kazim</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>XANTARERS</p>
            <p className="founder-description text-black-800 text-md text-justify">
              Working with GDSC has provided me with a collaborative forefront where like-minded people interacted and learned together. Hosting seminars and bootcamps on various topics has enhanced my learning passively and I am grateful for my teammates for always being supportive. GDSC is a forum for all those who want to learn and excel. I would definitely recommend everyone with the same mindset to join GDSC and help make a difference.
            </p>
          </div>
        </div>

        <div className="founder-container flex items-center bg-white rounded-xl shadow-xl p-6 mb-4 relative">
          <div className="dot-background absolute top-0 left-0 h-full w-16 bg-cover" style={{ backgroundImage: "url('/dotimgvertical.svg')" }} />
          <div className="founder-image" style={{ display: 'flex', marginTop: '-20%', marginLeft: '-2%', position: 'relative' }}>
            <Image src='/founders/nimra_ali.png' alt='Nimra Ali' width={900} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="founder-content ml-4 flex-1">
            <h2 className="founder-name text-lg font-bold text-gray-900" style={{ marginTop: 20, marginLeft: 10 }}>Nimra Ali</h2>
            <p className="founder-designation text-md font-semibold text-gray-700" style={{ marginTop: -10, marginLeft: 10 }}>DATOS DALI</p>
            <p className="founder-description text-black-800 text-md text-justify">
              As a core team member, GDSC has provided me with an excellent opportunity to meet other students, share ideas, skills, and experience in managing and speaking at workshops. The entire program helped me grow tremendously, both personally and technically. I have learned a lot and achieved a lot of things throughout GDSC tenure 2020. I would highly encourage students at DSU to join GDSC and improve themselves in a productive and positive learning environment.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
