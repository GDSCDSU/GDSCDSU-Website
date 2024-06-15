import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllEvents() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/event?topEvent=true')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setEventData(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const eventArray = Object.values(responseData);
          setEventData(eventArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  console.log(eventData)

  return (
    <main className="flex flex-col gap-5 min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-center my-8" data-aos="fade-up">
        <b>All Events</b>
      </h1>
      

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-8 mx-auto max-w-screen-xl">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          eventData.length > 0 ? (
            eventData[1].map(event => (
              <div key={event.id} className="flex pb-3">
                <div className="flex flex-col w-full rounded-lg items-center overflow-hidden bg-white shadow-xl">
                  <img className="w-40" src={event.picture} alt="Event" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                    <p className="text-sm text-gray-600">{event.title}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No events available.</p>
          )
        )}
      </div>
    </main>
  );
}
