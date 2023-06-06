import React from 'react';

const Contact = ({ data }: any) => {
  return (
    // Contact section
    <section id="contact" className="flex flex-col items-center justify-center pt-[150px] text-center">
      {/* Contact Header */}

      <h2 className="flex items-center text-3xl font-semibold mb-9 text-secondary-grey">
        <span className="mr-3 text-xl font-normal bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">04. </span>
        {data.sectionHeading}
      </h2>

      <p className="max-w-lg">{data.description}</p>
      {/* Button */}
      <a className="px-3 py-3 mt-5 text-base text-white transition-colors rounded-md bg-primary-dark hover:bg-slate-black" href={data.email}>
        {data.buttonText}
      </a>
    </section>
  );
};

export default Contact;
