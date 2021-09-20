import Head from 'next/head';
import { MediaList } from '../components/MediaList';
import { TopNav } from '../components/TopNav';
import { ContentContainer } from '../components/ContentContainer';
import { GlobalStyle } from '../components/GlobalStyle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobile Wistia</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
      </Head>
      <ContentContainer>
        <GlobalStyle />
        <TopNav />
        <MediaList />
        {/* <FAB /> */}
      </ContentContainer>
    </>
  );
}
