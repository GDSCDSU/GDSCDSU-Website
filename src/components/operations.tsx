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
    <main className="flex flex-col gap-5 min-h-screen bg-white">
      {/* Quote Image */}
      <div data-aos="fade-up" className="w-full flex justify-center py-8">
        <img className="Quoteimg" src='/operationsquote.svg' alt='Operations Quote' />
      </div>

      {/* Ensure operators is not empty before rendering */}
      {operators.length > 0 && (
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mx-auto max-w-screen-xl">
          {operators[1].map((item, index) => (
            <div key={index} className="flex pb-3 w-full h-full flex-col rounded-xl justify-between overflow-hidden transition-shadow bg-white shadow-2xl hover:shadow-xl">
              <div className="relative">
                <div className="flex items-center justify-center w-full h-10 mb-4 ">
                  <Image src='/dotimgreen.svg' alt='Dot Image' width={300} height={100} />
                </div>
                <div className="flex justify-center">
                  <Image src={item.picture} className="rounded-full" alt={item.fullname} width={100} height={100} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="mt-5 font-bold lg:text-lg text-sm text-center text-gray-900">
                    {item.fullname}
                  </p>
                  <p className="text-black">{item.tagline || 'Role not specified'}</p>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="mb-2 flex p-1 items-center opacity-60 justify-center gap-2 px-5 mt-2 border-2 rounded-full border-black">
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
