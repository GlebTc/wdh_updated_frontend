import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.webdevelopmenthamilton.com/'),
  title: {
    default:
      'Web Development Hamilton | Web Design | SEO',
    template: '%s | Web Development Hamilton',
  },
  description:
    'Web Development Hamilton | Web Design | SEO',
  twitter: {
    title: 'Web Development Hamilton | Web Design | SEO',
    card: 'summary_large_image',
    description:
      'Web Development Hamilton | Web Design | SEO',
  },
  keywords: [
    'Web Development Hamilton',
    'Web Design',
    'SEO',
    'Hamilton',
    'Ontario',
    'Canada',
  ],
  creator: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
  publisher: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
