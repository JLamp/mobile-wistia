import { Drawer } from '@mui/material';
import styled from 'styled-components';
import ellipsisIcon from '../public/Icons/Ellipsis.svg';
import { useState } from 'react';
import { IconButton } from './IconButton';
import Image from 'next/image';
import { List } from './List';

export function EditSectionButton() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <>
      <IconButton
        icon={ellipsisIcon}
        onClick={openMenu}
        size={16}
        align={'right'}
      />
      <Drawer
        open={isOpen}
        anchor={'bottom'}
        variant={'temporary'}
        onClose={closeMenu}
      >
        <List actions={['Rename', 'Delete']} />
      </Drawer>
    </>
  );
}
