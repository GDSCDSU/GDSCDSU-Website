import axios from "axios";
import { Button, Label, TextInput, FileInput } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../util/constant";

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchHighlights();
  }, []);

  const fetchHighlights = async () => {
    const { data } = await axios.get(`${BASE_URL}/highlight`);
    setData(data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('speaker', name);
    formData.append('title', title);
    formData.append('picture', file);

    try {
      const response = await axios.post(`${BASE_URL}/highlight`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
      fetchHighlights(); 
      handleShowList();
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" className="mr-4" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter Name Here"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Enter Title Here"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload Image" />
            </div>
            <FileInput
              id="file-upload"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="flex mt-8">
            <Button color="success" className="" type="submit">Save</Button>
            <Button color="failure" className="" type="button" onClick={handleShowList}>Cancel</Button>
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