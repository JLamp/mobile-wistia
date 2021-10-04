import styled from 'styled-components';

const Container = styled.div`
  padding: 24px 16px;
  width: 100%;
  color: var(--grey900);
  font-weight: 500;
`;

const SideNavItem = styled.div`
  height: 48px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  &:first-child {
    background-color: var(--brandBlue100);
    color: var(--brandBlue500);
  }
`;

const Divider = styled.div`
  height: 4px;
  background-color: #f8f8f9;
  width: 100%;
  margin: 8px 0;
`;

export function SideNavMenu({ project }) {
  const ProjectItems = [
    'Media',
    'Permissions',
    '',
    'Project Analytics',
    '',
    'Move & Copy',
    'Export All Media',
    '',
    'Delete Project',
  ];

  const MediaItems = [
    'Overview',
    'Customize',
    'Stats',
    '',
    'Create an A/B Test',
    'Replace Media',
    'Download',
    'Set Project Defaults',
    'Delete',
  ];

  const ListItems = project ? ProjectItems : MediaItems;

  return (
    <Container>
      {ListItems.map((item) =>
        item.length > 0 ? (
          <SideNavItem key={item}>{item}</SideNavItem>
        ) : (
          <Divider />
        )
      )}
    </Container>
  );
}

SideNavMenu.defaultProps = {
  project: true,
};
