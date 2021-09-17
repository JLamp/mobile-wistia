import styled from 'styled-components';
import { IconButton } from './IconButton';
import ellipsisIcon from '../public/Icons/Ellipsis.svg';
import { Drawer } from '@mui/material';
import { useState } from 'react';
// import { List } from './List';
import { List, ListItem, ListSubheader } from '@mui/material';
import { NavItems } from '../constants/NavItems';
import Image from 'next/image';
import menuIcon from '../public/Icons/Menu.svg';

const NavContainer = styled.div`
  padding: 16px;
`;

const NavList = styled(List)`
  margin-bottom: 8px;
`;

const NavListSubheader = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 8px;
`;

const NavListItem = styled.div`
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const NavText = styled.div`
  margin-left: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

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
      <IconButton icon={menuIcon} onClick={openModal} />
      <Drawer open={isOpen} variant="temporary" onClose={closeModal}>
        <NavContainer>
          {NavItems.map((group) => (
            <NavList key={group.title}>
              <NavListSubheader>{group.title}</NavListSubheader>
              {group.items.map((item) => (
                <NavListItem>
                  <Icon src={'/Icons/NavIcons/pngs/' + item.icon + '.png'} st />
                  <NavText>{item.text}</NavText>
                </NavListItem>
              ))}
            </NavList>
          ))}
        </NavContainer>
      </Drawer>
    </>
  );
}
