import Head from 'next/head';
import styled from 'styled-components';
import Spacer, { InlineSpacer } from '../modules/common/Spacer';
import Projects from '../modules/Projects/Projects';
import Navbar from '../modules/UI/Navbar';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Landing = styled.div`
  height: 80vh;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin: 10px 0;
  text-align: center;
  --webkit-background-clip: text;
`;
const Subtitle = styled.span`
  font-size: 2rem;
  margin-left: 550px;
`;
const Main = styled.main`
  /* background-color: #00BFB2; */
  height: 90vh;
`;

export default function Home() {
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
      </Landing>
      <Main>
        <Container>
          <Projects />
        </Container>
      </Main>
    </>
  );
}
