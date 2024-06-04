import { useState } from "react";
import { Button, Label, TextInput, Timeline } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

export default function PushNotification() {
  const [date, setDate] = useState(null);
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']                                         
    ],
  };

  const handleDateChange = (date) => setDate(date);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-3/4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Push Notification</h1>
          <form>
            <div className="mb-4">
              <Label htmlFor="title" value="Title" />
              <TextInput
                id="title"
                type="text"
                placeholder="Title here"
                required
                className="mt-2"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="content" value="Content" />
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                modules={modules}
                className="mt-2"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Datepicker
                  id="date"
                  onChange={handleDateChange}
                  className="mt-2"
                />
              </div>
            </div>
            <Button color="blue" type="submit" className="w-full">
              Push Notification
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">History</h2>
          <Timeline>
            {["Feb2024", "10/18/2023", "10/17/2023"].map((date, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>{date}</Timeline.Time>
                  <Timeline.Title>Notification was sent</Timeline.Title>
                  <Timeline.Body>
                    <Button color="blue" size="xs">Learn More</Button>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
