import React from 'react';
import Link from 'next/link';

const Footer = ({ data }: any) => {
  return (
    // Footer section
    <footer className="mx-auto flex flex-col items-center justify-center pb-[10px] pt-[150px]">
      {/* Footer */}
      <div className="mx-auto hover:text-[#fff]">
        {data.items.map((item: any, index: number) => {
          return (
            <Link key={index} className="flex flex-row items-center" href={item.url}>
              {item.text}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
