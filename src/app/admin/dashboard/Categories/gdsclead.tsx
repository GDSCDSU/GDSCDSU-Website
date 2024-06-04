import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function GDSCLeads() {
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
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea id="description" placeholder="Leave a comment..." required rows={4} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="facebook" value="Facebook" />
          </div>
          <TextInput id="facebook" type="text" placeholder="Enter link Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="linkedin" value="LinkedIn" />
          </div>
          <TextInput id="linkedin" type="text" placeholder="Enter link Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="instagram" value="Instagram" />
          </div>
          <TextInput id="instagram" type="text" placeholder="Enter link Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" placeholder="Enter Email Here" required />
        </div>
        <div className="flex mt-4">
        <Button color="success" className="mr-4">Save</Button>
        <Button color="failure" className="ml-20">Delete</Button>
      </div>
        </form>
        
      ) : (
        // List Component
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 relative">
                <Image
                  src="/Ateeq.svg"
                  alt="Syed Ateeq"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800">Syed Ateeq</h2>
              <p className="text-gray-600 text-sm">GDSC@DSU Lead 2020-2021 & Founder</p>
              <p className="mt-2 text-gray-600 text-sm">
                A virtuoso in leadership, Ateeq has led the way as a GDSC Lead, driving the vision behind this club with the aim to instigate change, make an impact, and ignite passion.
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <BsFacebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <BsGithub size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <BsInstagram size={24} />
              </a>
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
