import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { MediaList } from '../components/MediaList';
import { TopNav } from '../components/TopNav';
import { ContentContainer } from '../components/ContentContainer';
import { FAB } from '../components/FAB';
import { BreadCrumbs } from '../components/BreadCrumbs';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  * {
  box-sizing: border-box;
  word-wrap: break-word;
  }

  :root{
    --grey900: #37373c;
    --grey700: #62626c;
    --grey100: #F8F8F9;
    --green500: #00c185;
    --brandBlue100: #e9f5ff;
    --brandBlue500: #1e64f0;
    --elevation3: 0 8px 16px rgba(0, 0, 0, 0.05);
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
    background: black;
    color: var(--grey900)
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
  }
  img {
    border: 0px;
    width: 100%;
  }

  a {
    all: unset;
  }

  button{
    all: unset;
  }
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: var(--grey100);
  height: auto;
  min-height: 926px;
  `;

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobile Wistia</title>
      </Head>
      <ContentContainer>
        <GlobalStyle />
        <TopNav />
        <MediaList />
        <FAB />
      </ContentContainer>
    </>
  );
}
