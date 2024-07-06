import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.webdevelopmenthamilton.com/'),
  title: {
    default: 'Web Development Hamilton | Professional Web Design & SEO Services',
    template: '%s | Web Development Hamilton',
  },
  description:
    'Web Development Hamilton offers professional web design, development, and SEO services in Hamilton, Ontario. We create custom websites tailored to your business needs, ensuring top search engine rankings and excellent user experience.',
  twitter: {
    title: 'Web Development Hamilton | Professional Web Design & SEO Services',
    card: 'summary_large_image',
    description:
      'Web Development Hamilton offers professional web design, development, and SEO services in Hamilton, Ontario. We create custom websites tailored to your business needs, ensuring top search engine rankings and excellent user experience.',
  },
  keywords: [
    'Web Development Hamilton',
    'Web Design Hamilton',
    'SEO Hamilton',
    'Website Development',
    'Digital Marketing Hamilton',
    'Hamilton Ontario',
    'Custom Websites',
    'Professional Web Design',
    'SEO Services',
    'Top Search Engine Rankings',
    'Small Business Websites',
    'Small Business Web Design',
    'Affordable Web Design',
    'Small Business SEO',
    'Small Business Digital Marketing',
    'Local Business Websites',
    'Hamilton Small Business Websites',
    'Hamilton Business Web Design',
    'Business Website Development',
    'Small Business Online Presence',
  ],
  creator: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
  publisher: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
  openGraph: {
    title: 'Web Development Hamilton | Professional Web Design & SEO Services',
    description:
      'Web Development Hamilton offers professional web design, development, and SEO services in Hamilton, Ontario. We create custom websites tailored to your business needs, ensuring top search engine rankings and excellent user experience.',
    url: 'https://www.webdevelopmenthamilton.com/',
    type: 'website',
  },
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
