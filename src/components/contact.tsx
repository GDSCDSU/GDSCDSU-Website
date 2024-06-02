import { Modal } from "flowbite-react";
import { useState } from "react";
import { Label, TextInput,Textarea,Button  } from "flowbite-react";
import { IoSend } from "react-icons/io5";
export default function Contact({ openModal, onCloseModal }){
    const [email, setEmail] = useState('');
      return (
        <>
        <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="d-flex flex-column align-items-center" >
                    <h3><b>Contact Us</b></h3>
                </div>
                <br/>
              <div className="row" >
                <div className="col-md-6" >
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="small" value="First Name" />
                        </div>
                        <TextInput id="small" type="text" sizing="sm" />
                    </div>
                </div>
                <div className="col-md-6" >
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="small" value="Last Name" />
                        </div>
                        <TextInput id="small" type="text" sizing="sm" />
                    </div>
                </div>
              </div>
              <div className="row" >
                <div className="col-md-12" >
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@gdsc.com" required />
                </div>
                </div>
              </div>
              <div className="row" >
                <div className="col-md-12" >

                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your message" />
                    </div>
                    <Textarea id="comment" color='blue' placeholder="Leave a comment..." required rows={4} />
                </div>
              </div>
              <br/>
                <div className="row" >
                    <div className="col-md-4" >
                        <p>Want to become our sponsor?</p>
                    </div>
                    <div className="col-md-5" >
                    <Button color='blue' pill>
                        Become Sponsor
                    </Button>
                    </div>
                    <div className="col-md-1" >
                    <Button color="blue" pill>
                    <IoSend className="mr-2 h-5 w-5" />
                        Send
                    </Button>
                    </div>
                </div>
            </Modal.Body>
          </Modal>
        </>
      );
}