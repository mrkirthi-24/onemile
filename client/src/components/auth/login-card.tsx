'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import axios from 'axios';
import Link from 'next/link';
import { LoginForm } from './login-form';
import { Button } from '@/components/ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleIcon } from '../icons/GoogleIcon';

export function LoginCard() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post('http://localhost:8000/api/auth/google/', {
          token: tokenResponse.access_token,
        });
        console.log(res.data);
      } catch (err) {
        console.error('Google login error:', err);
      }
    },
    onError: () => {
      console.log('Google Login Failed');
    },
  });
  return (
    <Card className="w-full max-w-md border-gray-800 bg-black text-white">
      <CardHeader className="flex flex-col items-center justify-center pt-10">
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
          <img src="/vercel.svg" alt="Logo" className="h-9 w-9" />
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold">
          Continue with Onemile
        </h2>
        <p className="text-center text-sm text-gray-400">
          Sign in using your Onemile account.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <LoginForm />
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative bg-black px-3 text-xs text-gray-500">OR</div>
        </div>
        <div className="flex rounded-[8px]">
          <Button
            variant="outline"
            className="w-full border-gray-800 bg-white text-black hover:bg-gray-100 transition-colors"
            onClick={() => login()}
          >
            <GoogleIcon />
            Continue with Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-gray-800 px-6 py-4">
        <p className="text-sm text-gray-500">
          Don&apos;t have a Vercel account?{' '}
          <Button
            asChild
            variant="link"
            className="h-auto p-0 text-sm font-medium text-white"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
