import styled from 'styled-components';
import leftArrow from '../public/Icons/Icon-Left.svg';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import menuIcon from '../public/Icons/Menu.svg';
import Image from 'next/image';
import kebabIcon from '../public/Icons/Kebab.svg';

const Container = styled.div`
  padding: 8px 16px 24px 16px;
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
  &:nth-child(2) {
    background-color: var(--brandBlue100);
    color: var(--brandBlue500);
  }
`;

const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const Divider = styled.div`
  height: 4px;
  background-color: #f8f8f9;
  width: 100%;
  margin: 8px 0;
`;

export function SideNavButton({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

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
    <>
      <ButtonContainer onClick={openDrawer}>
        <Image src={kebabIcon} width={16} height={16} />
        <span style={{ marginLeft: '8px' }}>
          {project ? 'Media' : 'Overview'}
        </span>
      </ButtonContainer>
      <Drawer
        open={isOpen}
        anchor="bottom"
        variant="temporary"
        onClose={closeDrawer}
      >
        <Container>
          <SideNavItem>
            <ButtonContainer href="/">
              <Image src={leftArrow} width={16} height={16} />
              <span
                style={{
                  marginLeft: '8px',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                }}
              >
                Back to {project ? 'All Content' : "Wistia's Greatest Hits"}
              </span>
            </ButtonContainer>
          </SideNavItem>
          {ListItems.map((item) =>
            item.length > 0 ? (
              <SideNavItem key={item}>{item}</SideNavItem>
            ) : (
              <Divider />
            )
          )}
        </Container>
      </Drawer>
    </>
  );
}

SideNavButton.defaultProps = {
  project: true,
};
