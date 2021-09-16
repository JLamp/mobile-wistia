import styled from 'styled-components';
import { Medias } from '../constants/Medias';
import { BreadCrumbs } from './BreadCrumbs';
import { PageHeader } from './PageHeader';
import { Section } from './Section';

const Container = styled.div`
  padding: 8px 16px 16px 16px;
`;

export function MediaList() {
  return (
    <Container>
      <BreadCrumbs project={false} />
      <PageHeader />
      {Medias.map((section) => (
        <Section key={section.sectionTitle} section={section} />
      ))}
    </Container>
  );
}
