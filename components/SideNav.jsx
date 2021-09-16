import styled from 'styled-components';
import { IconButton } from './IconButton';
import closeIcon from '../public/Icons/Close.svg';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import menuIcon from '../public/Icons/Menu.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  padding: 24px 16px;
  width: 288px;
  color: var(--grey900);
  font-weight: 500;
`;

const SideNavTitleContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideNavTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
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

export function SideNav() {
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
    '-',
    'Project Analytics',
    '-',
    'Move & Copy',
    'Export All Media',
    '-',
    'Delete Project',
  ];

  return (
    <>
      <IconButton icon={menuIcon} onClick={openDrawer} />
      <Drawer open={isOpen} variant="temporary" onClose={closeDrawer}>
        <Container>
          <SideNavTitleContainer>
            <SideNavTitle>Project</SideNavTitle>
            <IconButton icon={closeIcon} size={24} onClick={closeDrawer} />
          </SideNavTitleContainer>
          <div>
            {ProjectItems.map((item) => (
              <SideNavItem key={item}>{item}</SideNavItem>
            ))}
          </div>
        </Container>
      </Drawer>
    </>
  );
}
