import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Marketing() {
  const [marketers, setMarketers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/teams?team=marketing')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setMarketers(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const marketersArray = Object.values(responseData);
          setMarketers(marketersArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching marketing team:', error));
  }, []);

  // Log the marketers array for debugging purposes
  console.log(marketers);

  return (
    <main className="flex flex-col gap-5 min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <Image src='/marketingquote.svg' alt='Marketing Quote' width={800} height={200} />
      </div>

      {/* Ensure marketers is not empty before rendering */}
      {marketers.length > 0 && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mx-auto max-w-screen-xl">
          {marketers[1].map((item, index) => (
            <div key={index} className="flex pb-1 w-70 h-30 flex-col rounded-xl justify-between overflow-hidden bg-white shadow-xl">
              <div className="relative">
                <div className="flex items-center justify-center w-full h-5 ">
                  <Image src='/dotimgreen.svg' alt='Dot Image' width={600} height={100} />
                </div>
                <div className="flex justify-center">
                  <Image src={item.picture} className="rounded-full" alt={item.fullname} width={100} height={100} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="mt-5 font-bold lg:text-lg text-sm text-center text-gray-900">
                    {item.fullname}
                  </p>
                  <p className="text-black">{item.tagline || 'Role not specified'}</p>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-gray-300 rounded-full px-3 py-1 text-md text-black hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out no-underline">
                    <Image src='/LinkedINfilled.svg' alt='LinkedIn' width={20} height={20} className="mr-2" />
                    <span>LinkedIn Profile</span>
                    </a>
                    <br/>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
