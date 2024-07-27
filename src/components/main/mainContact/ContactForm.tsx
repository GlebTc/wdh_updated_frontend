'use client';
import { useState, useEffect } from 'react';
import { ContactFormProps } from '@/src/utils/types/types';
import Script from 'next/script';

declare global {
  interface Window {
    turnstile: {
      render: (selector: string, options: { sitekey: string }) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const ContactForm = () => {
  const componentName = 'CONTACT_FORM';
  const [formData, setFormData] = useState<ContactFormProps>({
    name: '',
    phone: 0,
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cloudFlareData = new FormData(event.target as HTMLFormElement);
    const cloudFlareToken = cloudFlareData.get('cf-turnstile-token');

    // Check if the token is valid
    if (!cloudFlareToken) {
      console.log('FE - Cloudflare token is missing');
      alert('Please verify you are not a robot');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('FE - Message sent successfully');
        const button = document.querySelector(
          '.submit-button'
        ) as HTMLButtonElement;
        button.style.backgroundColor = '#a6e3b5';
        button.textContent = 'Message Sent';
      } else {
        console.log('FE - Message failed to send');
        const button = document.querySelector(
          '.submit-button'
        ) as HTMLButtonElement;
        button.style.backgroundColor = '#e3aca6';
        button.textContent = 'Something went wrong, please try again';
        setTimeout(() => {
          button.style.backgroundColor = '#C0D6FF'; // Reset the button background color
          button.textContent = 'Try Again'; // Reset the button text
        }, 3000); // 3 seconds (3000 milliseconds)
      }
    } catch {
      console.log(
        'FE CATCH There was an error sending your message. Please try again.'
      );
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.turnstile) {
      const captchaElement = document.querySelector('.cf-turnstile');
      if (captchaElement && !captchaElement.hasChildNodes()) {
        window.turnstile.render('.cf-turnstile', {
          sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!,
        });
      }
    }
  }, []);

  return (
    <div className={`${componentName}_MAIN_CONTAINER floating_container p-4 w-full`}>
      <Script
        src='https://challenges.cloudflare.com/turnstile/v0/api.js'
        async
        defer
      />
      <form
        className='text-left text-sm text-scale-900 font-bold'
        onSubmit={handleSubmit}
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' htmlFor='name'>
              Name
            </label>
            <input
              className='form_input'
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' htmlFor='phone'>
              Phone Number
            </label>
            <input
              className='form_input'
              type='text'
              id='phone'
              name='phone'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2' htmlFor='email'>
            Email
          </label>
          <input
            className='form_input'
            type='email'
            id='email'
            name='email'
            required
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2' htmlFor='subject'>
            Subject
          </label>
          <input
            className='form_input'
            type='text'
            id='subject'
            name='subject'
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2' htmlFor='message'>
            Message
          </label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            id='message'
            name='message'
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Cloudflare CAPTCHA */}
        <div
          className='cf-turnstile'
          data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
        ></div>
        <button className='floating_container text-sm font-bold px-4 py-2 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer submit-button'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
