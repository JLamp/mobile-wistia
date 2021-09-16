import styled from 'styled-components';
import { IconButton } from './IconButton';
import ellipsisIcon from '../public/Icons/Ellipsis.svg';
import { Dialog } from '@mui/material';
import { useState } from 'react';

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <IconButton icon={ellipsisIcon} onClick={openModal} />
      <Dialog
        open={isOpen}
        onBackdropClick={closeModal}
        fullWidth={true}
      ></Dialog>
    </>
  );
}
