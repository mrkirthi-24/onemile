import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-b border-gray-800/20 bg-black/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <img src="/vercel.svg" alt="Logo" className="h-8 w-8" />
        </Link>
        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="text-gray-300 hover:bg-white hover:text-black"
          >
            <Link href="/about">About</Link>
          </Button>
          <Button className="text-gray-300 hover:text-white">Contact</Button>
        </div>
      </div>
    </header>
  );
}
