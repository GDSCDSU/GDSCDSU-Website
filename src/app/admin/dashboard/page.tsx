'use client'
import { Button, Drawer, TextInput, Label } from "flowbite-react";
import 'flowbite/dist/flowbite.css';
import Image from "next/image";
import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import Swal from 'sweetalert2';
import './dasboard.css'
import dynamic from 'next/dynamic';
const GDSCLead = dynamic(() => import('./Categories/gdsclead'), { ssr: false });
const ExecutiveCoreTeam = dynamic(() => import('./Categories/executivecoreteam'), { ssr: false });
const OperationsTeam = dynamic(() => import('./Categories/operationsteam'), { ssr: false });
const DevelopmentTeam = dynamic(() => import('./Categories/developmentteam'), { ssr: false });
const MarketingTeam = dynamic(() => import('./Categories/marketingteam'), { ssr: false });
const Speakers = dynamic(() => import('./Categories/speakers'), { ssr: false });
const Events = dynamic(() => import('./Categories/events'), { ssr: false });
const OurTopEvent = dynamic(() => import('./Categories/ourtopevent'), { ssr: false });
const Community = dynamic(() => import('./Categories/community'), { ssr: false });
const Partners = dynamic(() => import('./Categories/partners'), { ssr: false });
const Highlights = dynamic(() => import('./Categories/highlights'), { ssr: false });
const NewEvent = dynamic(() => import('./Categories/newevent'), { ssr: false });
// const ForgotPasswordForm = dynamic(() => import('./auth/forgotpassword'), { ssr: false });
// const ResetPasswordForm = dynamic(() => import('./auth/resetpassword'), { ssr: false });

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("GDSC");
  const [lastName, setLastName] = useState("GDSC");
  const [username, setUsername] = useState("gdsclead.admin");
  const [email, setEmail] = useState("gdscdsu@gmail.com");
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleDrawerClose = () => setIsOpen(false);
  const handleDrawerOpen = () => setIsOpen(true);
  const handleEdit = () => setEditMode(true);
  const handleSave = () => {
    setEditMode(false);
    Swal.fire({
      icon: 'success',
      title: 'Details Saved',
      showConfirmButton: false,
      timer: 1500
    });
  };
  const handleCardClick = (component) => {
    setSelectedComponent(component);
  };
  
  const initialCardsData  = [
    {
      id: 1,
      name: 'GDSC Leads',
      date: 'Uploaded last 28 Aug 2023',
      imageUrl: '/gdscLead.svg',
      component: <GDSCLead />
    },
    {
      id: 2,
      name: 'Executive Core Team',
      date: 'Uploaded last 15 Sep 2023',
      imageUrl: '/coreTeam.svg',
      component: <ExecutiveCoreTeam />
    },
    {
        id: 3,
        name: 'Operations Team',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/operationTeam.svg',
        component: <OperationsTeam />
    },
    {
        id: 4,
        name: 'Development Team',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/DevelopmentTeam.svg',
        component: <DevelopmentTeam />
    },
    {
        id: 5,
        name: 'Marketing Team',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/marketingTeam.svg',
        component: <MarketingTeam />
    },
    {
        id: 6,
        name: 'Speakers',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/speakerCat.svg',
        component: <Speakers />
    },
    {
        id: 7,
        name: 'Events',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/eventsCat.svg',
        component: <Events />
    },
    {
        id: 8,
        name: 'Our Top Event',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/OurTopEvent.svg',
        component: <OurTopEvent />
    },
    {
        id: 9,
        name: 'Community',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/Community.svg',
        component: <Community />
    },
    {
        id: 10,
        name: 'Partners',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/Partners.svg',
        component: <Partners />
    },
    {
        id: 11,
        name: 'Highlights',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/Highlights.svg',
        component: <Highlights />
    },
    {
        id: 12,
        name: 'New Event',
        date: 'Uploaded last 15 Sep 2023',
        imageUrl: '/NewEvent.svg',
        component: <NewEvent />
    },

    
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [cardsData, setCardsData] = useState(initialCardsData);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const filteredCards = initialCardsData.filter((card) =>
      card.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCardsData(filteredCards);
  };
  

  return (
    <>
      <div className="flex justify-end min-h-[50vh]">
        <div className="flex items-center">
          <div className="position-relative">
            <HiOutlineBell className="w-8 h-8 mr-2" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
          </div>
          <div className="ml-4 cursor-pointer" onClick={handleDrawerOpen}>
            <Image src="/dashboard.svg" width={80} height={80} alt="" />
          </div>
        </div>
      </div>
      
        <div className="p-6">
            <div className="container mx-auto">
                {selectedComponent ? (
                <div className="flex">
                <Button color="blue" size='sm' pill className="mr-4" onClick={() => setSelectedComponent(null)}>
                  Back
                </Button>
                <div className="flex ml-16">
                  <h1 style={{marginLeft:'15px'}} className="text-2xl font-bold">{selectedComponent.name}</h1>
                </div>
              </div>
                ) : (
                <h1 className="text-2xl font-bold mb-4">Categories</h1>
                )}
                {!selectedComponent && (
                <div className="mb-6">
                    <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>
                )}
                {!selectedComponent ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-48"
                        onClick={() => handleCardClick(card)}
                    >
                        <div className="p-4 flex flex-col items-center justify-center h-full">
                        <Image
                            src={card.imageUrl}
                            alt={card.name}
                            className="w-12 h-12 mb-4"
                            width={50}
                            height={50}
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-bold">{card.name}</h3>
                            <p className="text-gray-600">{card.date}</p>
                        </div>
                        </div>
                        <div className="absolute top-2 right-2">
                        <button className="text-gray-600 hover:text-gray-800">
                            <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                <div>{selectedComponent.component}</div>
                )}
            </div>
        </div>
      <Drawer open={isOpen} onClose={handleDrawerClose} position="right">
        <Drawer.Header title="Profile Information" />
        <Drawer.Items>
          <div className="flex justify-center">
            <Image src="/dashboard.svg" width={100} height={100} alt="" />
          </div>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            {editMode ? (
              <TextInput id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            ) : (
              <h6 className="para">{firstName}</h6>
            )}
            <br/>
            <Label htmlFor="lastName">Last Name</Label>
            {editMode ? (
              <TextInput id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            ) : (
              <h6>{lastName}</h6>
            )}
            <br/>
            <Label htmlFor="username">Username</Label>
            {editMode ? (
              <TextInput id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            ) : (
              <h6>{username}</h6>
            )}
            <br/>
            <Label htmlFor="email">Email</Label>
            {editMode ? (
              <TextInput type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <h6>{email}</h6>
            )}
          </div>
          <br/>
          {editMode ? (
            <Button color="blue" type="button" onClick={handleSave}>Save</Button>
          ) : (
            <Button color="blue" type="button" onClick={handleEdit}>Edit Details</Button>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
}