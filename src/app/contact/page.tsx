import ContactForm from '@/src/components/main/mainContact/ContactForm';
import ContactInfo from '@/src/components/main/mainContact/ContactInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Web Development Hamilton',
  description:
    'Get in touch with Web Development Hamilton for all your web development, web design, and SEO needs. Contact us today to discuss your project and see how we can help your business succeed online.',
  keywords: [
    'Contact Web Development Hamilton',
    'Contact Web Design Hamilton',
    'Contact SEO Hamilton',
    'Web Development Hamilton Contact',
    'Web Design Hamilton Contact',
    'SEO Hamilton Contact',
    'Web Development',
    'Digital Marketing Hamilton',
    'Custom Websites',
    'Professional Web Design',
    'Hamilton Ontario',
  ],
  openGraph: {
    title: 'Contact | Web Development Hamilton',
    description:
      'Get in touch with Web Development Hamilton for all your web development, web design, and SEO needs. Contact us today to discuss your project and see how we can help your business succeed online.',
    url: 'https://www.webdevelopmenthamilton.com/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Get in touch with Web Development Hamilton for all your web development, web design, and SEO needs. Contact us today to discuss your project and see how we can help your business succeed online.',
  },
};

const ContactPage = () => {
  const componentName = 'CONTACT_PAGE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col justify-center items-center gap-2 max-w-[1200px] mx-auto`}
    >
      <h1>Contact Us</h1>
      <div className='w-full flex flex-col md:flex-row gap-4'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
