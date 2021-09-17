import styled from 'styled-components';
import { IconButton } from './IconButton';
import closeIcon from '../public/Icons/Close.svg';
import downIcon from '../public/Icons/Down-Dark.svg';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import menuIcon from '../public/Icons/Menu.svg';
import Image from 'next/image';

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

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Divider = styled.div`
  height: 4px;
  background-color: #f8f8f9;
  width: 100%;
  margin: 8px 0;
`;

export function SideNavBottom({ project }) {
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
        <span style={{ marginRight: '4px' }}>
          {project ? 'Media' : 'Overview'}
        </span>
        <Image src={downIcon} width={12} height={12} />
      </ButtonContainer>
      <Drawer
        open={isOpen}
        anchor="bottom"
        variant="temporary"
        onClose={closeDrawer}
      >
        <Container>
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
