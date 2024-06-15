import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Speakers() {
  const [speakersData, setSpeakersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/event?topEvent=true')
      .then(response => {
        const responseData = response.data;

        if (Array.isArray(responseData)) {
          setSpeakersData(responseData);
        } else if (typeof responseData === 'object') {
          // Convert the object to an array
          const speakersArray = Object.values(responseData);
          setSpeakersData(speakersArray);
        } else {
          console.error('Unexpected response format:', responseData);
        }

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching speakers:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        <b>Speakers</b>
      </h1>
      
      {/* Speakers */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 ">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          speakersData.length > 0 ? (
            speakersData[1].map(speaker => (
              speaker.speaker !== "NA" && (
                <div key={speaker.id} className="flex flex-col w-80 text-center bg-white shadow-xl rounded-xl overflow-hidden">
                  <img className="w-60 h-60 justify-center" src={speaker.speakerImage} alt="Profile" />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{speaker.speaker}</h2>
                    <p className="text-gray-600 mb-4">{speaker.SpeakerBio}</p>
                    <p className="text-gray-800 mb-2"><span className="font-semibold">Event Name:</span> {speaker.name}</p>
                    <p className="text-gray-800 mb-4"><span className="font-semibold">Event Type:</span> {speaker.title}</p>
                    <a href={speaker.speakerLinkedln} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-black">
                      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 mr-2">
                        <img className="h-4 w-4" src="/LinkedINfilled.svg" alt="LinkedIn" />
                      </div>
                      <div>LinkedIn Profile</div>
                    </a>
                  </div>
                </div>
              )
            ))
          ) : (
            <p className="text-center">No speakers data available.</p>
          )
        )}
      </div>
    </div>
  );
}
