import styled from 'styled-components';
import { MediaItem } from './MediaItem';
import { IconButton } from './IconButton';
import downIcon from '../public/Icons/Down.svg';
import ellipsisIcon from '../public/Icons/Ellipsis.svg';
import Image from 'next/image';
import { useState } from 'react';
import { EditSectionButton } from './EditSectionButton';

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`;

const SectionTitle = styled.button`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Caret = styled(Image)`
  ${(props) => (props.rotate ? 'transform: rotate(-90deg)' : null)};
  transition: all 150ms;
  transition-timing-function: ease-out;
`;

const MediasList = styled.div``;

export function Section({ section }) {
  const [visible, setVisible] = useState(true);

  function handleHideShow() {
    setVisible(!visible);
  }

  return (
    <>
      <SectionHeader>
        <SectionTitle onClick={handleHideShow}>
          <Caret src={downIcon} width={16} height={16} rotate={!visible} />
          <span style={{ marginLeft: '8px' }}>{section.sectionTitle}</span>
        </SectionTitle>
        <EditSectionButton />
      </SectionHeader>
      {visible && (
        <MediasList>
          {section.medias.map((media) => (
            <MediaItem key={media.title} media={media} />
          ))}
        </MediasList>
      )}
    </>
  );
}
