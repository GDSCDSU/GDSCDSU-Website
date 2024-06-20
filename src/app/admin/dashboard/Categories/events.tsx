import axios from "axios";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('speakers');

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchFilteredData();
  }, [filter]);

  const fetchFilteredData = async () => {
    const endpoint = filter === 'speakers' 
      ? 'https://gdscdsu.com/api/event?topEvent=true&speaker=true'
      : 'https://gdscdsu.com/api/event?topEvent=true';
    const { data } = await axios.get(endpoint);
    setData(data.data);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className="flex justify-end mb-4 space-x-2">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        // Form Component
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" value="Name" />
            <TextInput id="name" type="text" placeholder="Enter Name Here" required />
          </div>
          <div>
            <Label htmlFor="file-upload" value="Upload Image" />
            <FileInput id="file-upload" />
          </div>
          <div>
            <Label htmlFor="content" value="Content" />
            <Textarea id="content" placeholder="Leave a comment..." required rows={4} />
          </div>
          <div>
            <Label htmlFor="title" value="Title" />
            <TextInput id="title" type="text" placeholder="Enter Title Here" required />
          </div>
          <div>
            <Label htmlFor="location" value="Location" />
            <TextInput id="location" type="text" placeholder="Enter Location Here" required />
          </div>
          <div>
            <Label htmlFor="speaker" value="Speaker" />
            <TextInput id="speaker" type="text" placeholder="Enter Speaker Here" required />
          </div>
          <div>
            <Label htmlFor="speakerImage" value="Upload Speaker Image" />
            <FileInput id="speakerImage" />
          </div>
          <div>
            <Label htmlFor="speakerName" value="Speaker Name" />
            <TextInput id="speakerName" type="text" placeholder="Enter Speaker Name" required />
          </div>
          <div>
            <Label htmlFor="speakerBio" value="Speaker Bio" />
            <Textarea id="speakerBio" placeholder="Enter Speaker Bio..." required rows={4} />
          </div>
          <div>
            <Label htmlFor="speakerLinkedIn" value="Speaker LinkedIn" />
            <Textarea id="speakerLinkedIn" placeholder="Enter Speaker LinkedIn Profile..." required rows={4} />
          </div>
          <div className="flex mt-8">
            <Button color="success" className="mr-4">Save</Button>
            <Button color="failure">Delete</Button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <div>
              <Select id="filter" onChange={handleFilterChange} value={filter}>
                <option value="speakers">Speakers</option>
                <option value="events">Top Events</option>
              </Select>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            {filter === 'speakers' ? (
              data.map((speaker, index) => (
                <SpeakerCard key={index} content={speaker.content} image={speaker.speakerImage} name={speaker.speakerName}/>
              ))
            ) : (
              data.map((item, index) => (
                <Image 
                  key={index}
                  width={100} 
                  height={100} 
                  src={item.picture} 
                  alt={`Image ${index + 1}`} 
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}

const SpeakerCard = ({ image, name, content }) => {
  return (
    <div className="p-4 shadow-lg w-64 h-64 mb-4">
      <div className="flex justify-center">
        <div className="h-24 w-24 relative">
          <Image
            src={image}
            alt="Image of the speaker"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <BsLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
