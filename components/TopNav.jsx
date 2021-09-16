import styled from 'styled-components';
import Image from 'next/image';
import wistiaLogo from '../public/wistia-logo.svg';
import ellipsisIcon from '../public/Icons/Ellipsis.svg';
import menuIcon from '../public/Icons/Menu.svg';
import { IconButton } from './IconButton';
import { useState } from 'react';
import { SideNav } from './SideNav';
import { Drawer } from '@mui/material';

const Container = styled.div`
  background: white;
  width: 100%;
  height: 64px;
  box-shadow: var(--elevation3);
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.div`
  width: auto;
  max-height: 24px;
  height: auto;
`;

export function TopNav() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  function openModal() {
    setSideNavOpen(true);
    console.log('Clicked!');
  }

  function closeModal() {
    setSideNavOpen(false);
  }

  return (
    <Container>
      <IconButton icon={menuIcon} onClick={openModal} />
      {sideNavOpen && <Drawer />}
      <Logo>
        <Image src={wistiaLogo} />
      </Logo>
      <IconButton icon={ellipsisIcon} />
    </Container>
  );
}
