"use client";
import { useState } from 'react';
import { HiLockClosed, HiInformationCircle } from "react-icons/hi";
import { Button, Label, TextInput, Alert } from "flowbite-react";
import 'flowbite/dist/flowbite.css';
import { BASE_URL } from "../../../util/constant";
import axios from 'axios';

export default function ResetPasswordForm({ onSubmit, showAlert, alertMessage, inputColor, onBack }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/password`, {
        newPassword: newPassword
      });

      // Handle successful response
      console.log('Password reset successful:', response.data);

      // Example: show success message or redirect
      // For demo purposes, let's log the response and clear the form
      alert('Password reset successful.'); // Example of success message

      // Clear the form after successful submission
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Handle error response
      console.error('Error resetting password:', error);
      setError('Failed to reset password. Please try again.');
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4" style={{ margin: '15%' }} onSubmit={handleSubmit}>
      <h4 className='text-blue-600'>Reset Password</h4>
      <span className='text-blue-600' style={{ marginTop: '-5%' }}>Enter your details below</span>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="new-password" className="text-blue-600 text-lg" value="New Password" />
        </div>
        <TextInput color={inputColor} id="new-password" icon={HiLockClosed} type="password" placeholder="Enter New Password Here" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirm-password" className="text-blue-600 text-lg" value="Confirm Password" />
        </div>
        <TextInput color={inputColor} id="confirm-password" icon={HiLockClosed} type="password" placeholder="Confirm New Password Here" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      {showAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">{alertMessage}</span>
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
