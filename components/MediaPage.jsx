import styled from 'styled-components';
import { PageHeader } from './PageHeader';
import { ContentContainer } from './ContentContainer';
import { BreadCrumbs } from './BreadCrumbs';
import { FAB } from './FAB';
import { Comments } from './Comments';
import ReactPlayer from 'react-player';

const DummyPlayer = styled.img`
  width: 100%;
  margin-top: 16px;
`;

const Container = styled.div`
  padding: 0 16px 16px 16px;
`;

const PlayerWrapper = styled.div`
  margin-top: 8px;
  position: relative;
  padding-top: 56.25%;
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export function MediaPage({ title, hashID }) {
  console.log('HashID = ' + hashID);
  const url = 'https://crlvideo.wistia.com/medias/' + hashID;
  console.log('URL = ' + url);
  return (
    <Container>
      <BreadCrumbs project={true} />
      <PageHeader title={title} description={null} />
      <PlayerWrapper>
        <Player url={url} width="100%" height="100%" />
      </PlayerWrapper>
      <Comments />
      <FAB icon="embed" />
    </Container>
  );
}
