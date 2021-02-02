import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 200px;
  transition: all 200ms ease-in;
`;
const Description = styled.aside`
  max-width: 50%;
`;
const Name = styled.h2``;
const Text = styled.p``;

const Wrapper = styled.div`
  width: 900px;
  height: 400px;
  margin-bottom: 150px;
  margin-left: ${(props) => (props.id % 2 === 0 ? '200px' : '')};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #dadada;
  box-shadow: 1px 1px 20px #dadada;
  transform: ${(props) =>
    props.id % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'};
  transition: transform 200ms ease-in;
  &:hover {
    transform: rotate(2deg);
    transform: scale(1.05);
  }
`;

const Project = ({ project: { id, name, desc, thumbnail } }) => {
  return (
    <Wrapper id={id}>
      <Image src={thumbnail} />
      <Description>
        <Name>{name}</Name>
        <Text>{desc}</Text>
      </Description>
    </Wrapper>
  );
};

export default Project;
