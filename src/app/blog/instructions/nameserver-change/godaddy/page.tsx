import React from 'react';

const NameserverChangeGoDaddy = () => {
  const componentName = 'NAMESERVER_CHANGE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 pt-4 px-4 text-center max-w-[1300px] mx-auto`}
    >
      <h1>Name Server Change - Go Daddy</h1>
      <ul className="text-left list-decimal">
        <li>Click on your profile and go into “My Products”.</li>
        <li>Find the domain that is to be directed.</li>
        <li>Click on DNS (Next to “Set up” and/or “Manage” buttons).</li>
        <li>Navigate to “Nameservers” tab.</li>
        <li>Click “Change Nameservers”.</li>
        <li>Select “I'll use my own nameserver” option.</li>
        <li>You will see 2 input fields with placeholders “Nameserver 1” and “Nameserver 2”. Click “Add Nameserver” to add two more.</li>
        <li>Input provided nameservers that will look similar to this:
          <ul className='ml-4 list-disc'>
            <li>dns1.p08.nsone.net</li>
            <li>dns2.p08.nsone.net</li>
            <li>dns3.p08.nsone.net</li>
            <li>dns4.p08.nsone.net</li>
          </ul>
        </li>
        <li>Click Save.</li>
        <li>The nameserver change will take around 24 hours to propagate through the internet.</li>
      </ul>
    </div>
  );
};

export default NameserverChangeGoDaddy;
