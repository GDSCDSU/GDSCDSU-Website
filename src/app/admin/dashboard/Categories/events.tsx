import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  const fetchSpeakers = async () => {
    const { data } = await axios.get('http://localhost:3000/api/event?topEvent=false');
    setData(data.data);
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" className="mr-4" onClick={handleShowList}>Records</Button>
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
        // List Component
        <Image width={1000} height={100} src='/Highlights1.svg' alt="" />
      )}
    </>
  );
}
