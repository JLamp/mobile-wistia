import styled from 'styled-components';
import Link from 'next/link';
import { MediaItemButton } from './MediaItemButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  padding: 8px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:last-child {
    margin-bottom: 8px;
  }
`;

const Thumbnail = styled.a`
  width: 88px;
  height: 52px;
  border-radius: 4px;
  background-image: url('${(props) => props.thumbnailImage}');
  background-size: cover;
  background-position: center;
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-shrink: 0;
`;

const Duration = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  font-size: 12px;
  color: white;
  padding: 2px 4px;
  font-variant-numeric: tabular-nums;
  text-align: right;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey900);
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Info = styled.div`
  font-size: 12px;
  color: var(--grey700);
  overflow: hidden;
  flex-grow: 1;
`;

const Dot = styled.div`
  margin-top: 1px;
  width: 8px;
  height: 8px;
  background: var(--green500);
  border-radius: 100%;
  margin-right: 4px;
`;

const MetaData = styled.div`
  display: flex;
  align-items: center;
`;

export function MediaItem({ media }) {
  return (
    <Container>
      <Thumbnail thumbnailImage={media.thumbnail}>
        <Duration>{media.duration}</Duration>
      </Thumbnail>
      <Link
        href={{
          pathname: `/media/[slug]`,
          query: {
            slug: media.slug,
            title: media.title,
            description: media.description,
            hashID: media.hashID,
          },
        }}
      >
        <Info>
          <Title>{media.title}</Title>
          <MetaData>
            <Dot></Dot> Published | {media.plays} plays
          </MetaData>
        </Info>
      </Link>
      <MediaItemButton />
    </Container>
  );
}

// pathname: '/blog/[slug]',
//             query: { slug: 'my-post' },
