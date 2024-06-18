import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://gdscdsu.com/api/teams?role=lead`)
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setLeads(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const leadsArray = Object.values(responseData);
          setLeads(leadsArray);
        } else {
          console.error('Unexpected response format:', responseData);
          setError('Unexpected response format.');
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching leads:', error);
        setError('Error fetching leads.');
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>{error}</p>
      </div>
    );
  }

  const years = [
    { year: 2020, isCurrent: false },
    { year: 2021, isCurrent: false },
    { year: 2022, isCurrent: false },
    { year: 2023, isCurrent: true },
  ];

  return (
    <main className="flex flex-col gap-3 min-h-screen justify-center bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <Image src='/leadsquote.svg' alt='Leads Quote' width={800} height={200} />
      </div>
      
      <div className="flex flex-col items-center gap-8">
        {leads[1].map((lead, index) => (
          <div key={index} className="flex items-start w-full max-w-2xl">
            <div className="relative w-32  h-full">
              <div className={`absolute text-justify text-xl font-bold font-['Google Sans'] ${years[index].isCurrent ? 'text-red-500' : 'text-red-500'}`}>
                <div>{years[index].year}</div>
                {!years[index].isCurrent && (
                  <div className="flex items-center w-auto justify-center mt-1">
                    <Image src='/redline.svg' alt='Red Line' width={5} height={40} />
                  </div>
                )}
                {years[index].isCurrent && <div className="text-xs ">
                  CURRENT</div>}
              </div>
            </div>
            <div className="flex-grow w-full max-w-2xl h-auto p-6 bg-white rounded-2xl shadow-md relative">
              {/* Image Div */}
              <div className="absolute top-0 left-0 w-10 h-full rounded-tl-2xl rounded-bl-2xl overflow-hidden">
                <Image src='/dotimgverticalred.svg' alt='Background Image' layout='fill' objectFit='cover' />
              </div>
              {/* Lead Content */}
              <div className="flex flex-col items-center justify-center mt-12 text-center">
                <div className="relative w-30 h-30 mb-4">
                  <Image src={lead.picture || "https://via.placeholder.com/94x94"} alt={lead.fullname} className="object-cover rounded-full" width={100} height={100} />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="text-gray-800 text-2xl font-bold">{lead.fullname}</h3>
                  <p className="text-zinc-500 text-base mb-4">{lead.tagline}</p>
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-2">
                    <a href={lead.instagram} className="relative w-10 h-9 rounded-full border border-zinc-500 flex items-center justify-center overflow-hidden">
                      <Image src="/InstaIcon1.png" alt="Social Icon 1" layout="fill" objectFit="contain" className="rounded-full" />
                    </a>
                    <a href={lead.linkedin} className="relative w-10 h-9 rounded-full border border-zinc-500 flex items-center justify-center overflow-hidden">
                      <Image src="/LinkedInIcon1.svg" alt="Social Icon 2" layout="fill" objectFit="contain" className="rounded-full" />
                    </a>
                    <a href={lead.facebook} className="relative w-10 h-9 rounded-full border border-zinc-500 flex items-center justify-center overflow-hidden">
                      <Image src="/FbIcon1.svg" alt="FB Icon" layout="fill" objectFit="contain" className="rounded-full" />
                    </a>
                    <a href={`mailto:${lead.email}`} className="relative w-10 h-9 rounded-full border border-zinc-500 flex items-center justify-center overflow-hidden">
                      <Image src="/EmailIcon1.svg" alt="Social Icon 4" layout="fill" objectFit="contain" className="rounded-full" />
                    </a>
                  </div>
                  <p className="text-zinc-500 text-sm mt-4">{lead.bio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </main>
  );
}
