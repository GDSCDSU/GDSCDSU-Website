"use client";
import { useState } from 'react';
import { HiMail, HiInformationCircle } from "react-icons/hi";
import { Button, Label, TextInput, Alert } from "flowbite-react";
import 'flowbite/dist/flowbite.css';
import { BASE_URL } from "../../../util/constant";
import axios from 'axios';

export default function ForgotPasswordForm({ onSubmit, showAlert, alertMessage, inputColor, onBack }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/otp`, {
        email: email
      });

      // Handle successful response
      console.log('OTP request successful:', response.data);
      setEmail('');
    } catch (error) {
      // Handle error response
      console.error('Error sending OTP:', error);
      setError('Failed to send OTP. Please try again.');
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" style={{ margin: '15%' }} onSubmit={handleSubmit}>
      <h4 className='text-blue-600'>Forgot Password?</h4>
      <span className='text-blue-600' style={{ marginTop: '-5%' }}>Enter your email below to receive OTP</span>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email" className="text-blue-600 text-lg" value="Email Address" />
        </div>
        <TextInput color={inputColor} id="email" icon={HiMail} type="email" placeholder="name@gdsc.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {showAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Please enter your email</span>
        </Alert>
      )}
      {error && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">{error}</span>
        </Alert>
      )}
      <Button color="blue" type="submit">Reset Password</Button>
      <Button color="light" onClick={onBack}>Back</Button>
    </form>
  );
}
