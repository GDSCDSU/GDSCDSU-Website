import { useState } from 'react';
import { Table, Pagination, Button, Modal } from 'flowbite-react';

const contacts = [
    { firstName: 'Ali', lastName: 'Khan', email: 'Ali@example.com', description: 'My name is Ali and I am a software developer living in San Francisco.' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', description: 'My name is John and I am an architect.' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', description: 'My name is Jane and I work as a graphic designer.' },
    { firstName: 'Michael', lastName: 'Johnson', email: 'michael.johnson@example.com', description: 'My name is Michael and I am a marketing specialist.' },
    { firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@example.com', description: 'My name is Alice and I am a data analyst.' },
    { firstName: 'Bob', lastName: 'Martin', email: 'bob.martin@example.com', description: 'My name is Bob and I am a project manager.' },
];

const ITEMS_PER_PAGE = 3;

export default function ContactList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDetailsClick = (contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedContact(null);
    };

    const displayedContacts = contacts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const getShortDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 5) {
            return words.slice(0, 3).join(' ') + '...';
        }
        return description;
    };

    return (
        <>
            <div className='className="overflow-x-auto"' >
            <Table striped={true} hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>First Name</Table.HeadCell>
                    <Table.HeadCell>Second Name</Table.HeadCell>
                    <Table.HeadCell>Email Address</Table.HeadCell>
                    <Table.HeadCell>Description</Table.HeadCell>
                    <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {displayedContacts.map((contact, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{contact.firstName}</Table.Cell>
                            <Table.Cell>{contact.lastName}</Table.Cell>
                            <Table.Cell>{contact.email}</Table.Cell>
                            <Table.Cell>{getShortDescription(contact.description)}</Table.Cell>
                            <Table.Cell>
                                <Button color="blue" onClick={() => handleDetailsClick(contact)}>Details</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(contacts.length / ITEMS_PER_PAGE)}
                onPageChange={handlePageChange}
            />
            </div>
            
            {selectedContact && (
                <Modal show={showModal} onClose={handleCloseModal}>
                    <Modal.Header>
                        Contact Details
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>First Name:</strong> {selectedContact.firstName}</p>
                        <p><strong>Last Name:</strong> {selectedContact.lastName}</p>
                        <p><strong>Email:</strong> {selectedContact.email}</p>
                        <p><strong>Description:</strong> {selectedContact.description}</p>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}
