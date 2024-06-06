/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Button, Label, TextInput, FileInput, Textarea, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import Card from "../../../../components/card/Card";

export default function Team() {
  const [showForm, setShowForm] = useState(false);
  const [leads, setLeads] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedTeamRecords, setSelectedTeamRecords] = useState("");
  const [selectedRoleRecords, setSelectedRoleRecords] = useState("");

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    if (selectedTeamRecords || selectedRoleRecords) {
      fetchLeads();
    }
  }, [selectedTeamRecords, selectedRoleRecords]);

  const fetchLeads = async () => {
    try {
      let url = 'http://localhost:3000/api/teams?';
      if (selectedTeamRecords === "Team Lead") {
        url += 'role=lead';
      } 
      else if(selectedTeamRecords === "Executive-Core-Team-Member"){
        url += 'role=Executive-core-team-member';
        }
      else if (selectedTeamRecords === "Core Team Member") {
        if (selectedRoleRecords) {
            url += `team=${selectedRoleRecords.toLowerCase().replace(/\s/g, '-')}`;
          }    
      } else if (selectedTeamRecords) {
        url += `team=${selectedTeamRecords.toLowerCase().replace(/\s/g, '-')}`;
      }
  
      console.log("Fetching data from URL:", url);
  
      const { data } = await axios.get(url);
      console.log("Data fetched:", data.data);
      setLeads(data.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleTeamRecordsChange = (e) => {
    setSelectedTeamRecords(e.target.value);
  };

  const handleRoleRecordsChange = (e) => {
    setSelectedRoleRecords(e.target.value);
  };

  return (
    <>
      <div className="flex justify-end mb-4 space-x-2">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded shadow-md">
          <div>
            <Label htmlFor="team" value="Team" />
            <Select id="team" onChange={handleTeamChange} required>
              <option value="">Select Team</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Core Team Executive">Executive Core Team Member</option>
              <option value="Core Team Member">Core Team Member</option> 
            </Select>
          </div>
          {selectedTeam === "Core Team Member" && (
            <div>
              <Label htmlFor="role" value="Team Role" />
              <Select id="role" required>
                <option value="">Select Role</option>
                <option value="Marketing">Marketing</option>
                <option value="Operation">Operation</option>
                <option value="Development">Development</option>
              </Select>
            </div>
          )}
          <div>
            <Label htmlFor="name" value="Full Name" />
            <TextInput id="name" type="text" placeholder="Enter Name Here" required />
          </div>
          <div>
            <Label htmlFor="file-upload" value="Upload Image" />
            <FileInput id="file-upload" />
          </div>
          <div>
            <Label htmlFor="description" value="Bio" />
            <Textarea id="description" placeholder="Leave a comment..." required rows={4} />
          </div>
          <div>
            <Label htmlFor="title" value="Tag Line" />
            <TextInput id="title" type="text" placeholder="Enter Tagline" required />
          </div>
          <div>
            <Label htmlFor="facebook" value="Facebook" />
            <TextInput id="facebook" type="text" placeholder="Enter link Here" required />
          </div>
          <div>
            <Label htmlFor="linkedin" value="LinkedIn" />
            <TextInput id="linkedin" type="text" placeholder="Enter link Here" required />
          </div>
          <div>
            <Label htmlFor="instagram" value="Instagram" />
            <TextInput id="instagram" type="text" placeholder="Enter link Here" required />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" type="email" placeholder="Enter Email Here" required />
          </div>
          <div>
            <Button color="success">Save</Button>
            <Button color="failure">Delete</Button>
          </div>
        </form>
      ) : (
        <div>
          <div className="mb-4">
            <Label htmlFor="team-records" value="Team" />
            <Select id="team-records" onChange={handleTeamRecordsChange} required>
              <option value="">Select Team</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Core Team Member">Core Team Member</option>
              <option value="Executive-Core-Team-Member">Executive-Core-Team-Member</option>
            </Select>
          </div>
          {selectedTeamRecords === "Core Team Member" && (
            <div className="mb-4">
              <Label htmlFor="role-records" value="Team Role" />
              <Select id="role-records" onChange={handleRoleRecordsChange} required>
                <option value="">Select Role</option>
                <option value="Marketing">Marketing</option>
                <option value="Operation">Operation</option>
                <option value="Development">Development</option>
              </Select>
            </div>
          )}
          <div className="w-full flex flex-wrap">
            {leads.map((lead, index) => (
              <Card
                bio={lead.bio}
                email={lead.email}
                facebook={lead.facebook}
                fullname={lead.fullname}
                instagram={lead.instagram}
                linkedin={lead.linkedin}
                picture={lead.picture}
                role={lead.role}
                tagline={lead.tagline}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
