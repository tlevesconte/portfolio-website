import React from 'react';

const Contact = ({ data }: any) => {
  return (
    // Contact section
    <section id="contact" className="flex flex-col items-center justify-center pt-[150px] text-center">
      {/* Contact Header */}

      <h2 className="mb-9 flex items-center text-3xl font-semibold text-[#b5b5b5]">
        <span className="mr-3 text-xl font-normal text-gray-700">04. </span>
        {data.sectionHeading}
      </h2>

      <p className="max-w-lg">{data.description}</p>
      {/* Button */}
      <a className="mt-5 rounded-md bg-[#15161B] px-3 py-3 text-base text-white transition-colors hover:bg-[#0d0d10]" href={data.email}>
        {data.buttonText}
      </a>
    </section>
  );
};

export default Contact;
