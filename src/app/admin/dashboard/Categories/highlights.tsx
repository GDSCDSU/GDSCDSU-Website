import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Events() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPartner()
  },[]);

  const fetchPartner = async () => {
    const {data} = await axios.get('https://gdscdsu.com/api/highlight');
    setData(data.data);
  }
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
        <div className="flex mt-8">
            <Button color="success" className="">Save</Button>
            <Button color="failure" className="">Delete</Button>
        </div>
        </form>
        
      ) : (
        // List Component
        <div className="flex gap-5 flex-wrap">
        {data.map((highlight) => (
          <Image key={highlight.id} src={highlight.picture} width={1000} height={100} alt="" />
        ))}
      </div>
      )}
    </>
  );
}
