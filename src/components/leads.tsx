import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/teams?role=lead')
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
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => console.error('Error fetching leads:', error));
  }, []);

  return (
    <main className="flex flex-col gap-5 min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="flex justify-center">
        <Image src='/leadsquote.svg' alt='Quote' width={300} height={100} />
      </div>

      {/* Leads Div */}
      <div data-aos="fade-up" className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {loading ? (
          <p className="text-center text-lg font-semibold">Loading...</p>
        ) : (
          <div className="grid gap-5 items-center justify-center sm:grid-cols-1 lg:grid-cols-1">
            {leads[1].map((lead, index) => (
              <div key={index} className="flex pb-3 w-full h-70 flex-col rounded-xl justify-between overflow-hidden bg-white shadow-xl">
                <div className="relative p-5">
                  <div className="flex absolute items-center mb-4">
                    <Image src="/dotimgverticalred.svg" alt="" width={100} height={150} />
                  </div>
                  <div className="flex mt-8 space-x-4">
                      <a href={`mailto:${lead.email}`} target="_blank" rel="noopener noreferrer">
                        <Image src="/EmailIcon1.svg" alt="Email icon" width={40} height={20} />
                      </a>
                      <a href={lead.facebook} target="_blank" rel="noopener noreferrer">
                        <Image src="/FbIcon1.svg" alt="Facebook icon" width={40} height={20} />
                      </a>
                      <a href={lead.instagram} target="_blank" rel="noopener noreferrer">
                        <Image src="/InstaIcon1.png" alt="Instagram icon" width={40} height={20} />
                      </a>
                      <a href={lead.linkedin} target="_blank" rel="noopener noreferrer">
                        <Image src="/LinkedInIcon1.svg" alt="LinkedIn icon" width={40} height={20} />
                      </a>
                    </div>
                  <Image src={lead.picture} className="rounded-full mb-4" width={100} height={100} alt={lead.fullname} />
                  <div className="flex flex-col items-start">
                    <p className="font-bold text-lg text-gray-900">{lead.fullname}</p>
                    <p className="text-black">{lead.tagline}</p>
                    <p className="text-black text-sm mt-2">{lead.bio}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
