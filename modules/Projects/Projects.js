import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const Section = styled.section``;

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Address Book',
      desc:
        'A React Application which lets you add, remove, sort, search and edit addresses. Built using Firebase realtime database, Hooks, Context.',
      github: 'https://github.com/LucasK1/address-app',
      netlify: 'https://lucask1-address-app.netlify.app/',
      thumbnail: '/static/images/addressBook.png',
    },
    {
      id: 2,
      name: 'Penteko',
      desc:
        'A simple, static, responsive corporate website for an environmental consulting company. Built using mainly HTML and CSS to be as fast and no-nonsense as possible.',
      github: 'https://github.com/LucasK1/penteko',
      netlify: 'https://penteko.netlify.app/',
      thumbnail: '/static/images/penteko.png',
    },
    {
      id: 3,
      name: 'Bestreads',
      desc:
        'A React Application meant to emulate some of the Goodreads functions. Lets you add books to the shelf and remove them. Uses Firebase realtime database, Context, Google Books API. Work in progress',
      github: 'https://github.com/LucasK1/bestreads',
      netlify: 'https://bestreads.netlify.app/',
      thumbnail: '/static/images/bestreads.png',
    },
  ];

  return (
    <Section>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </Section>
  );
};

export default Projects;
