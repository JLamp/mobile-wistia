import styled from 'styled-components';
import Image from 'next/image';
import wistiaLogo from '../public/wistia-logo.svg';
import { MainNav } from './MainNav';
import { SearchButton } from './SearchButton';

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
  margin-left: 8px;
`;

export function TopNav() {
  return (
    <Container>
      <MainNav />
      <Logo>
        <Image src={wistiaLogo} />
      </Logo>
      <SearchButton />
    </Container>
  );
}
