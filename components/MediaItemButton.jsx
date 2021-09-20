import { Drawer } from '@mui/material';
import ellipsisIcon from '../public/Icons/Ellipsis.svg';
import { useState } from 'react';
import { IconButton } from './IconButton';
import { ActionMenu } from './ActionMenu';
import { MediaItemActions } from '../constants/MediaItemActions';

export function MediaItemButton() {
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
        <ActionMenu actions={MediaItemActions} />
      </Drawer>
    </>
  );
}
