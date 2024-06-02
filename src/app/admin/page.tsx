"use client";
import { useState } from 'react';
import 'flowbite/dist/flowbite.css';
import dynamic from 'next/dynamic';
import Swal from 'sweetalert2';
const SignInForm = dynamic(() => import('./auth/signin'), { ssr: false });
const ForgotPasswordForm = dynamic(() => import('./auth/forgotpassword'), { ssr: false });
const ResetPasswordForm = dynamic(() => import('./auth/resetpassword'), { ssr: false });

export default function Admin() {
  const [currentForm, setCurrentForm] = useState('signin');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [inputColor, setInputColor] = useState("primary");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setAlertMessage('Email Address or Password is incorrect');
    setInputColor("failure");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setShowAlert(false);
    Swal.fire({
      icon: 'success',
      title: 'Password Reset',
      text: 'Your reset password link has been sent to your email.',
    }).then(() => setCurrentForm('resetpassword'));
  };
  

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowAlert(true);
      setAlertMessage('Passwords do not match');
      setInputColor("failure");
    } else {
      setShowAlert(false);
      setCurrentForm('signin');
    }
  };

  return (
    <>
      {currentForm === 'signin' && (
        <SignInForm
          onSubmit={handleSubmit}
          showAlert={showAlert}
          alertMessage={alertMessage}
          inputColor={inputColor}
          onForgotPassword={() => setCurrentForm('forgotpassword')}
        />
      )}

      {currentForm === 'forgotpassword' && (
        <ForgotPasswordForm
          onSubmit={handleResetPassword}
          showAlert={showAlert}
          alertMessage={alertMessage}
          inputColor={inputColor}
          onBack={() => setCurrentForm('signin')}
        />
      )}

      {currentForm === 'resetpassword' && (
        <ResetPasswordForm
          onSubmit={handlePasswordReset}
          showAlert={showAlert}
          alertMessage={alertMessage}
          inputColor={inputColor}
          onBack={() => setCurrentForm('signin')}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
    </>
  );
}
