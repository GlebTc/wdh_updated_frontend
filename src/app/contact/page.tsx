import ContactForm from "@/src/components/main/mainContact/ContactForm";
import ContactInfo from "@/src/components/main/mainContact/ContactInfo";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};


const ContactPage = () => {
  const componentName = 'CONTACT_PAGE_MAIN_SECTION';
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
