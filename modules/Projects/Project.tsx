import React from 'react';
import styled from 'styled-components';

export interface ProjectType {
  id: number;
  name: string;
  desc: string;
  github: string;
  netlify: string;
  thumbnail: string;
}

interface ProjectProps {
  project: ProjectType;
}

const Image = styled.img`
  height: 200px;
  transition: all 200ms ease-in;
`;
const Description = styled.aside`
  max-width: 50%;
`;
const Name = styled.h2``;
const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;
const GithubLink = styled.a`
  text-decoration: underline;
  color: blue;
  &:hover {
    color: blueviolet;
  }
`;

interface WrapperProps {
  _id: number;
}

const Wrapper = styled.div<WrapperProps>`
  text-align: left;
  width: 900px;
  height: 400px;
  margin-bottom: 150px;
  margin-left: ${(props) => (props._id % 2 === 0 ? '200px' : '')};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #dadada;
  box-shadow: 1px 1px 20px #dadada;
  transform: ${(props) =>
    props._id % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'};
  transition: transform 200ms ease-in;
  &:hover {
    transform: rotate(2deg);
    transform: scale(1.05);
  }
`;

const Project = ({
  project: { id, name, desc, thumbnail, netlify, github },
}: ProjectProps) => {
  return (
    <Wrapper _id={id}>
      <a href={netlify} target="_blank">
        <Image src={thumbnail} />
      </a>
      <Description>
        <Name>{name}</Name>
        <Text>{desc}</Text>
        <GithubLink href={github} target="_blank">
          Github repo
        </GithubLink>
      </Description>
    </Wrapper>
  );
};

export default Project;
