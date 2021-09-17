import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { MediaList } from '../../components/MediaList';
import { TopNav } from '../../components/TopNav';
import { MediaPage } from '../../components/MediaPage';
import { ContentContainer } from '../../components/ContentContainer';
import { useRouter } from 'next/dist/client/router';
import { FAB } from '../../components/FAB';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
  a {
    color: #bf9e5f;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    border: 0px;
    width: 100%;
  }

  a {
    all: unset;
  }

  a:active, a:visited, a:any-link, a:hover {
    text-decoration: none;
  }


  button{
    all: unset;
  }
`;

export default function Media() {
  const router = useRouter()
  const title = router.query.title;
  const hashID = router.query.hashID;
  return (
    <>
      <Head>
        <title>{router.query.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ContentContainer>
        <GlobalStyle />
        <TopNav />
        <MediaPage title={title} hashID={hashID}/>
        <FAB />
      </ContentContainer>
    </>
  );
}
