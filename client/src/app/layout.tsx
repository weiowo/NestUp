import type { Metadata } from 'next';
import { Geist, Geist_Mono, Sora } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from '@/components/ui/sonner';

const sora = Sora({
  subsets: ['latin'],
  weight: '400',
});

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'NestUP - Find Your Perfect Rental Home',
  description:
    'NestUP makes finding and managing rental properties easy. Discover your next home with a seamless and intuitive rental experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={`${sora.className} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster closeButton />
      </body>
    </html>
  );
}
