import styled from 'styled-components';
import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import { IconButton } from './IconButton';
import pencilIcon from '../public/Icons/Pencil.svg';
import closeIcon from '../public/Icons/Close.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Container = styled.div`
  padding: 8px 16px 16px 16px;
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #c4c4c8;
  padding: 8px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

const Description = styled(Input)`
  height: 112px;
`;

const PrimaryButton = styled.button`
  background: var(--brandBlue500);
  color: white;
  font-size: 16px;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  display: flex;
  font-weight: 500;
  align-items: center;
  width: max-content;
  align-self: flex-end;
`;

const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  align-self: left;
  flex-grow: 2;
`;

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          margin: '32px 0px 0px 0px',
          width: 'calc(100% - 32px)',
          alignSelf: 'flex-start',
        },
      },
    },
  },
});

export function EditButton({ title, description }) {
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
        icon={pencilIcon}
        onClick={openMenu}
        size={16}
        align={'right'}
      />
      <ThemeProvider theme={theme}>
        <Dialog open={isOpen} onClose={closeMenu} fullWidth={true}>
          <Container>
            <TitleGroup>
              <Title>Edit Tile & Description</Title>
              <IconButton
                icon={closeIcon}
                align="right"
                size={16}
                onClick={closeMenu}
              />
            </TitleGroup>
            <InputGroup>
              <Label>Title</Label>
              <Input type="text" name="name" value={title} />
            </InputGroup>
            <InputGroup>
              <Label>Description</Label>
              <Description
                as="textarea"
                type="text"
                name="name"
                value={description === null ? 'Description' : description}
              />
            </InputGroup>
            <PrimaryButton onClick={closeMenu}>Save</PrimaryButton>
          </Container>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
