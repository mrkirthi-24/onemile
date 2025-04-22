'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { SiteHeader } from '@/components/site-headers';
import { LoginCard } from '@/components/auth/login-card';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    profilePhoto: '',
    city: '',
    phone: '',
    stockBroker: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const endpoint = isSignup
  //       ? 'http://localhost:8000/api/auth/signup/'
  //       : 'http://localhost:8000/api/auth/login/';
  //     const res = await axios.post(endpoint, formData);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error('Auth error:', error);
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <SiteHeader />
      {/* <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4 text-black">
          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-8">
              {isSignup ? 'create account' : '⭐ welcome back to onemile ai'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
                <>
                  <div className="flex gap-2">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                      className="input"
                    />
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <input
                    name="profilePhoto"
                    placeholder="Profile Photo URL"
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                    name="stockBroker"
                    placeholder="Stock Broker"
                    onChange={handleChange}
                    className="input"
                  />
                </>
              )}

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="input"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="input"
              />
              <OneButton
                type="submit"
                text={isSignup ? 'Sign Up' : 'Log In'}
                onClick={() => setIsSignup(false)}
                iconFarLeft="/globe.svg"
              />
            </form>

            <div className="my-4 text-center text-gray-500">or</div>

            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  const res = await axios.post(
                    'http://localhost:8000/api/auth/google/',
                    {
                      token: credentialResponse.credential,
                    }
                  );
                  console.log(res.data);
                } catch (err) {
                  console.error('Google login error:', err);
                }
              }}
              onError={() => {
                console.log('Google Login Failed');
              }}
            />

            <div className="mt-6 text-center text-sm">
              {isSignup ? (
                <>
                  Already have an account?{' '}
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => setIsSignup(false)}
                  >
                    Log in
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{' '}
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => setIsSignup(true)}
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <LoginCard />
      </div>
    </main>
  );
}
