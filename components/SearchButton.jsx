import styled from 'styled-components';
import { useState } from 'react';
import { IconButton } from './IconButton';
import searchIcon from '../public/Icons/Search.svg';
import { Box, Dialog, Tabs, Tab as MUITab } from '@mui/material';
import closeIcon from '../public/Icons/Close.svg';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Container = styled.div`
  padding: 8px 0 16px 16px;
  display: flex;
  flex-direction: column;
  background: #f8f8f9;
  height: 100vh;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-bottom: 8px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #c4c4c8;
  padding: 8px;
  width: 100%;
  background: white;
`;

const Input = styled.input`
  all: unset;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-left: 8px;
  width: 100%;
  height: 100%;
  }
`;

const Tab = styled(MUITab)`
  font-size: 14px;
  color: var(--grey900);
  font-weight: 500;
  text-transform: unset;
  padding: 16px 4px 16px 4px;
  margin-right: 16px;
`;

const Divider = styled.div`
  height: 4px;
  background: black;
  position: absolute:
  bottom: 10;
`;

const TabBox = styled(Box)`
  background-image: url('/bottom-line.png');
  background-position: bottom;
  background-repeat: repeat-x;
`;

const EmptyMessage = styled.span``;

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 'unset',
          minWidth: '48px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '4px',
        },
        root: {
          minHeight: 'unset',
        },
      },
    },
  },
});

export function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <IconButton icon={searchIcon} onClick={openMenu} />
      <Dialog open={isOpen} onClose={closeMenu} fullScreen={true}>
        <Container>
          <SearchInputContainer>
            <SearchInput>
              <Image src={searchIcon} width={16} height={16} />
              <Input type="search" placeholder="Search Account" />
            </SearchInput>
            <IconButton icon={closeIcon} onClick={closeMenu} />
          </SearchInputContainer>
          <ThemeProvider theme={theme}>
            <TabBox>
              <Tabs variant="scrollable" value={value} onChange={handleChange}>
                <Tab label="All results"> All results </Tab>
                <Tab label="Medias"> Medias </Tab>
                <Tab label="Projects"> Projects </Tab>
                <Tab label="Channels"> Channels </Tab>
                <Tab label="Users"> Users </Tab>
                <Tab label="Help"> Help </Tab>
              </Tabs>
            </TabBox>
          </ThemeProvider>
          <EmptyMessage>Begin typing to start your search.</EmptyMessage>
        </Container>
      </Dialog>
    </>
  );
}
