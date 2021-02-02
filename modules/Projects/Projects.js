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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fugiat at. Commodi adipisci, dignissimos unde ut, aliquam quam repellat veniam iste non blanditiis inventore minima eligendi libero saepe ab esse?',
      thumbnail: '/static/images/address-book.png',
    },
    {
      id: 2,
      name: 'Penteko',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ullam at ea reprehenderit, nam quam provident enim saepe dicta animi nemo iste maiores praesentium eum. Qui laboriosam itaque eos voluptates.',
      thumbnail: '',
    },
    {
      id: 3,
      name: 'Bestreads',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ullam at ea reprehenderit, nam quam provident enim saepe dicta animi nemo iste maiores praesentium eum. Qui laboriosam itaque eos voluptates.',
      thumbnail: '',
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
