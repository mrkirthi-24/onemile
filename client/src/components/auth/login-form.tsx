'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';

export function LoginForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const endpoint = isSignup
        ? 'http://localhost:8000/api/auth/signup/'
        : 'http://localhost:8000/api/auth/login/';
      const res = await axios.post(endpoint, formData);
      console.log(res.data);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="sr-only">
          Work Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          className="bg-gray-900 text-white border-gray-700 placeholder:text-gray-500"
          required
        />
        <Input
          id="password"
          type="password"
          placeholder="Your Password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="bg-gray-900 text-white border-gray-700 placeholder:text-gray-500"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
      >
        Continue with Email
      </Button>
    </form>
  );
}
