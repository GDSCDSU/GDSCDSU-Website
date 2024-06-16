import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://gdscdsu-website.vercel.app/api/teams?role=lead`)
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
      console.log("ENV CHECK" + process.env.BASE_URL_API);
      
  }, []);

  return (
    <main className="flex flex-col gap-2 min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <Image src='/leadsquote.svg' alt='' width={800} height={200} />
      </div>

      {/* Leads Div */}
      <div data-aos="fade-up" className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
        {loading ? (
          <p className="text-center text-lg font-semibold">Loading...</p>
        ) : (
          <div className="grid gap-5 items-center justify-center sm:grid-cols-1 lg:grid-cols-1">
            {leads[1].map((lead, index) => (
              <div key={index} className="flex pb-2 w-full h-96 flex-col rounded-xl justify-between overflow-hidden bg-white shadow-xl">
                <div className="relative p-5">
                  <div className="absolute top-0 left-0 mb-4">
                    <Image src="/dotimgverticalred.svg" alt="" width={170} height={100} />
                  </div>
                  <div className="absolute top-8 right-0 flex space-x-4">
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
                  <div className="relative left-0 top-0 mb-4">
                    <Image src={lead.picture} className="rounded-full" width={100} height={100} alt={lead.fullname} />
                  </div>
                  <div className="flex flex-col mr-10 relative items-center">
                    <p className="font-bold text-lg relative text-gray-900">{lead.fullname}</p>
                    <p className="text-black relative  text-gray-900">{lead.tagline}</p>
                    <p className="text-black relative mx-10  text-md  w-70">{lead.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='bg-white rounded shadow-lg p-3 container' >
        <div className='row' >
            <div className='col-4' >
                <div className="relative left-0 top-0 mb-4">
                    <Image src='/leads/hira_fatima.png' className="rounded-full" width={100} height={100} alt='' />
                </div>
                
                    <Image src="/EmailIcon1.svg" alt="Email icon" width={40} height={20} />
                    <Image src="/FbIcon1.svg" alt="Facebook icon" width={40} height={20} />
                    <Image src="/InstaIcon1.png" alt="Instagram icon" width={40} height={20} />
                    <Image src="/LinkedInIcon1.svg" alt="LinkedIn icon" width={40} height={20} />

            </div>
            <div className='col-8' >

            </div>
        </div>
      </div>
    </main>
  );
}
