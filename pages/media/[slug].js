import Head from 'next/head';
import { TopNav } from '../../components/TopNav';
import { MediaPage } from '../../components/MediaPage';
import { ContentContainer } from '../../components/ContentContainer';
import { useRouter } from 'next/dist/client/router';
import { GlobalStyle } from '../../components/GlobalStyle';

export default function Media() {
  const router = useRouter()
  const title = router.query.title;
  const description = router.query.description;
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
        <MediaPage title={title} description={description} hashID={hashID}/>
        {/* <FAB /> */}
      </ContentContainer>
    </>
  );
}
