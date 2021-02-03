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
    background-color: #00f;
    height: 60px;
    width: 70%;
    top: 200px;
    animation: ${popInRight} 1500ms ease;
    right: 0;
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: #080;
    height: 40px;
    width: 40%;
    top: 700px;
    left: 0;
    animation: ${popInLeft} 1500ms ease;
    z-index: 1;
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  background-color: #f00;
  right: 0;
  bottom: 400px;
  height: 20px;
  width: 1000px;
  animation: ${popInRight} 1500ms ease;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin: 10px 0;
  text-align: center;
`;
const Subtitle = styled.span`
  font-size: 2rem;
  margin-left: 450px;
`;
const Main = styled.main`
  padding: 50px;
  height: 100%;
`;
const Stack = styled.section`
  height: 400px;
  padding: 50px;
  width: 100%;
  text-align: center;
`;
const Stacktitle = styled.h2`
  font-size: 2.5rem;
`;
const StackList = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Łukasz Kozłowski</title>
        <script
          src="https://kit.fontawesome.com/7b3d5481f7.js"
          crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <Landing>
        <Container>
          <Spacer axis="vertical" size={400} />
          <Title>Hi, I'm Łukasz</Title>
          <Subtitle>Front-end Developer based on the Interwebz</Subtitle>
        </Container>
        <StyledDiv />
      </Landing>
      <Stack>
        <Container>
          <Stacktitle>My stack</Stacktitle>
          <StackList>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-sass"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-linux"></i>
          </StackList>
        </Container>
      </Stack>
      <Main>
        <Container>
          <Projects />
        </Container>
      </Main>
      <style jsx>{`
        .fab {
          display: block;
          transform: scale(4);
        }
      `}</style>
    </>
  );
};

export default Home;
