import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Operations() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/teams?team=operation')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setOperators(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const operatorsArray = Object.values(responseData);
          setOperators(operatorsArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }
      })
      .catch(error => console.error('Error fetching operation team:', error));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <Image src='/operationsquote.svg' alt='' width={800} height={200} />
      </div>

      {/* Ensure operators is not empty before rendering */}
      {operators.length > 0 && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mx-auto max-w-screen-xl">
          {operators[1].map((item, index) => (
            <div key={index} className="pb-1 w-70 h-30 flex flex-col rounded-xl justify-between overflow-hidden bg-white shadow-xl">
              <div className="relative">
                <div className="flex items-center justify-center w-full h-5 ">
                  <Image src='/dotimgreen.svg' alt='Dot Image' width={600} height={200} />
                </div>
                <div className="flex justify-center top-30">
                  <Image src={item.picture} className="rounded-full" alt={item.fullname} width={100} height={100} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="mt-5 font-bold lg:text-lg text-md text-center text-gray-900">
                    {item.fullname}
                  </p>
                  <p className="text-black">{item.tagline || 'Role not specified'}</p>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="mb-1 flex p-1 items-center opacity-40 justify-center px-3 mt-4 border-4 rounded-full border-gray">
                    <Image src='/LinkedINfilled.svg' alt='LinkedIn' width={20} height={20} />
                    <p className="text-black">LinkedIn Profile</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
