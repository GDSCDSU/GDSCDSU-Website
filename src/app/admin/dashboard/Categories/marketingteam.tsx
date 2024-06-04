import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function MarketingTeam() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" className="mr-4" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput id="name" type="text" placeholder="Enter Name Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput id="title" type="text" placeholder="Enter Title Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload Image" />
          </div>
          <FileInput id="file-upload" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="linkedin" value="LinkedIn" />
          </div>
          <TextInput id="linkedin" type="text" placeholder="Enter link Here" required />
        </div>
        
        <div className="flex mt-8">
            <Button color="success" className="">Save</Button>
            <Button color="failure" className="">Delete</Button>
        </div>
        </form>
        
      ) : (
        // List Component
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 relative">
                <Image
                  src="/mahnoor.svg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800">Mahnoor Ahmed</h2>
              <p className="text-gray-600 text-sm">Data Camp Lead</p>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <BsLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
