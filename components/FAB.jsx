import styled from 'styled-components';
import Image from 'next/image';
import plusIcon from '../public/Icons/Plus.svg';
import embedIcon from '../public/Icons/Embed.svg';
import { Drawer, List, ListItem, ListItemIcon, SvgIcon } from '@mui/material';
import { useState } from 'react';
import { IconButton } from './IconButton';

const ActionButtonContainer = styled.button`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  background: var(--brandBlue500);
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--elevation3);
`;

const MenuItem = styled(ListItem)`
  height: 48px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
`;

function getIcon(icon) {
  if (icon === 'embed') {
    return embedIcon;
  }

  return plusIcon;
}

export function FAB({ icon, actions }) {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }
  const ICON = getIcon(icon);
  console.log(plusIcon);
  return (
    <>
      <ActionButtonContainer onClick={openMenu}>
        <Image src={ICON} width={32} height={32} />
      </ActionButtonContainer>
      <Drawer
        anchor={'bottom'}
        open={isOpen}
        variant={'temporary'}
        onClose={closeMenu}
      >
        <List>
          <MenuItem>Upload</MenuItem>
          <MenuItem>Add from Wistia</MenuItem>
        </List>
      </Drawer>
    </>
  );
}
