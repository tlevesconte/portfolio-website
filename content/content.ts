import { FaFileDownload, FaJava, FaReact, FaWordpress, FaHtml5 } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiGmail, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandNextjs } from 'react-icons/tb';
import { GrMysql } from 'react-icons/gr';

// Assets
import Cardiff from '../public/images/cardiff-university-logo.png';
import CardiffMet from '../public/images/cardiff-met-logo.png';

export const EMAIL = 'tomaslevesconte.com';

export const navbarContent = {
  handle: 'tom-lv',
  sections: [
    {
      title: 'About',
      url: '#about',
    },
    {
      title: 'Education',
      url: '#education',
    },
    {
      title: 'Projects',
      url: '#projects',
    },
    {
      title: 'Contact',
      url: '#contact',
    },
  ],
};

export const heroContent = {
  heading: 'Tomas Le Vesconte',
  bio: 'Web Developer and aspiring Software Engineer based in the United Kingdom.',
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/tom-lv',
      icon: SiGithub,
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tomas-l-853701195/',
      icon: SiLinkedin,
    },
    {
      title: 'Sorry, not available right now',
      url: '',
      icon: FaFileDownload,
    },
    {
      title: 'Email',
      url: 'mailto:' + EMAIL,
      icon: SiGmail,
    },
  ],
};

export const aboutContent = {
  heading: 'About Me',
  paragraph1: 'Hi, my name is Tomas and I’m a British/Swedish developer based in the UK. My interest in software development first began when working on a programming module for college. The task involved creating an event-driven application in Visual Studio using VB.NET. Having never done programming before, I was surprised by how much I enjoyed it.',
  paragraph2: "After completing the module, I found myself working on personal projects in my spare time and even some freelance web development work. These days I’m focused on learning new technologies and improving on the ones I already know. If you have an opportunity you'd like to discuss, don't hesitate to contact me! @",
  skillsIntro: "Here are some of the technologies I've used recently: ",
  skills_col_1: [
    {
      title: 'Java',
      icon: FaJava,
    },
    {
      title: 'JavaScript',
      icon: IoLogoJavascript,
    },
    {
      title: 'ReactJS',
      icon: FaReact,
    },
  ],
  skills_col_2: [
    {
      title: 'NextJS',
      icon: TbBrandNextjs,
    },
    {
      title: 'TailwindCSS',
      icon: SiTailwindcss,
    },
    {
      title: 'MySQL',
      icon: GrMysql,
    },
  ],
  skills_col_3: [
    {
      title: 'Wordpress',
      icon: FaWordpress,
    },
    {
      title: 'TypeScript',
      icon: SiTypescript,
    },
    {
      title: 'HTML',
      icon: FaHtml5,
    },
  ],
};

export const educationContent = {
  heading: 'Education',
  universities: [
    {
      title: 'Cardiff University',
      date: 'October 2021 - December 2022',
      qualification: 'Master of Science - MSc Software Engineering',
      info: 'Studied Agile Software Development, DevOps, Delivering User Experience, Testing, Web Application Development and Data Manipulation.',
      grade: 'Graduated with a Merit.',
      img: Cardiff,
      alt: 'Cardiff University Logo',
    },
    {
      title: 'Cardiff Metropolitan University',
      date: 'September 2018 - June 2021',
      qualification: 'Bachelor of Science - BSc (Hons) Computer Science',
      info: 'Studied Artificial Intelligence, Software Engineering, Programming, Database Management and Networking.',
      grade: 'Graduated with a First Class Honours.',
      img: CardiffMet,
      alt: 'Cardiff Met University Logo',
    },
  ],
};

export const projectContent = {
  heading: 'Projects',
  projects: [
    {
      title: 'Java Chess',
      date: '2023',
      type: 'Desktop Application',
      description: 'An object-oriented Chess GUI written in Java and JavaFX.',
      technologies: [
        {
          title: 'Java',
        },
        {
          title: 'JavaFX',
        },
      ],
      github: [
        {
          title: 'GitHub',
          link: 'https://github.com/tom-lv/java-chess',
        },
      ],
      link: '',
    },
    {
      title: 'Personal Website',
      date: '2023',
      type: 'Web Application',
      description: "Personal website. Features some of the projects that I've worked on.",
      technologies: [
        {
          title: 'NextJS',
        },
        {
          title: 'TypeScript',
        },
        {
          title: 'TWCSS',
        },
        {
          title: 'RTF',
        },
      ],
      github: [
        {
          title: 'GitHub',
          link: 'https://github.com/tom-lv/personal-website',
        },
      ],
      link: 'https://tomaslevesconte.com/',
    },
    {
      title: 'Typer',
      date: '2022',
      type: 'Web Application',
      description: 'A minimalistic typing test inspired by Monkeytype.',
      technologies: [
        {
          title: 'HTML',
        },
        {
          title: 'CSS',
        },
        {
          title: 'JavaScript',
        },
      ],
      github: [
        {
          title: 'GitHub',
          link: 'https://github.com/tom-lv/typer',
        },
      ],
      link: 'https://tom-lv.github.io/typer/',
    },
  ],
};

export const contactContent = {
  title: 'Get In Touch',
  description: "I'm currently looking for work, so if you have an opportunity you'd like to dicuss, don't hesitate to contact me!",
  buttonText: 'Message me!',
  // Include mailto link
};

export const footerContent = {
  items: [
    {
      text: 'Created by Tomas Le Vesconte',
      url: 'https://github.com/tom-lv/personal-website',
    },
  ],
};
