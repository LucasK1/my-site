import Head from 'next/head';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Spacer, { InlineSpacer } from '../modules/common/Spacer';
import Projects from '../modules/Projects/Projects';
import Navbar from '../modules/UI/Navbar';

const popInRight = keyframes`
0% {transform: translateX(100%);}
40% {transform: translateX(0);}
60% {transform: translateX(5%);}
100% {transform: translateX(0);}
`;
const popInLeft = keyframes`
0% {transform: translateX(-100%);}
40% {transform: translateX(0);}
60% {transform: translateX(-5%);}
100% {transform: translateX(0);}
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Landing = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    background-color: blue;
    height: 60px;
    width: 70%;
    top: 20%;
    animation: ${popInRight} 1500ms ease;
    right: 0;
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: green;
    height: 40px;
    width: 40%;
    top: 70%;
    left: 0;
    animation: ${popInLeft} 1500ms ease;
    z-index: 1;
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 400px;
  height: 20px;
  width: 1000px;
  background-color: red;
  animation: ${popInRight} 1500ms ease;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin: 10px 0;
  text-align: center;
`;
const Subtitle = styled.span`
  font-size: 2rem;
  margin-left: 550px;
`;
const Main = styled.main`
  height: 90vh;
`;

export default function Home() {
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>Łukasz Kozłowski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing>
        <Container>
          <Spacer axis="vertical" size={400} />
          <Title>Hi, I'm Łukasz</Title>
          <Subtitle>Welcome to my portfolio</Subtitle>
        </Container>
        <StyledDiv />
      </Landing>
      <Main>
        <Container>
          <Projects />
        </Container>
      </Main>
    </>
  );
}
