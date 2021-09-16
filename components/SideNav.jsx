import styled from 'styled-components';
import { IconButton } from './IconButton';
import closeIcon from '../public/Icons/Close.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const SideNavDrawer = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 288px;
  height: 100vh;
  z-index: 500;
  padding: 24px 16px;
`;

const SideNavTitleContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideNavTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const SideNavItem = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  display: flex;
  align-items: center;
`;

export function SideNav() {
  const ProjectItems = [
    'Media',
    'Permissions',
    '',
    'Project Analytics',
    '',
    'Move & Copy',
    'Export All Media',
    '',
    'Delete Project',
  ];
  return (
    <>
      <SideNavDrawer>
        <SideNavTitleContainer>
          <SideNavTitle>Project</SideNavTitle>
          <IconButton icon={closeIcon} size={24} />
        </SideNavTitleContainer>
        {ProjectItems.map((item) => (
          <SideNavItem key={item}>{item}</SideNavItem>
        ))}
      </SideNavDrawer>
      <Overlay />
    </>
  );
}
