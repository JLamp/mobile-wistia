import styled from 'styled-components';
import Image from 'next/image';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { ActionMenu } from './ActionMenu';
import { AddActions } from '../constants/AddActions';
import addIcon from '../public/Icons/Plus.svg';

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

export function FAB({ icon, actions }) {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <>
      <ActionButtonContainer onClick={openMenu}>
        <Image src={addIcon} width={32} height={32} />
      </ActionButtonContainer>
      <Drawer
        anchor={'bottom'}
        open={isOpen}
        variant={'temporary'}
        onClose={closeMenu}
      >
        <ActionMenu actions={AddActions} />
      </Drawer>
    </>
  );
}
