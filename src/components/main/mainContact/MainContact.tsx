import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const componentName = 'MAIN_PAGE_CONTACT_SECTION';

  return (
    <div
      id='contact'
      className={`${componentName}_MAIN_CONTAINER main_container flex flex-col justify-center items-center gap-2`}
    >
      <h1>Contact Us</h1>
      <div className='w-full flex flex-col md:flex-row gap-4'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
