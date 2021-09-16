import styled from 'styled-components';
import allContentIcon from '../public/Icons/Home.svg';
import projectIcon from '../public/Icons/Projects.svg';
import backIcon from '../public/Icons/Icon-Left.svg';
import Image from 'next/image';

const TopActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BreadCrumbContainer = styled.a`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Crumb = styled.span`
  margin-left: 4px;
`;

const ButtonContainer = styled.button`
  padding 8px 16px;
  font-size: 16px;
  vertical-align: middle;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
`;

const PrimaryActionButton = styled(ButtonContainer)`
  color: white;
  background: var(--brandBlue500);
  border-color: var(--brandBlue500);
  border-color: var(--brandBlue500);
`;

const SecondaryActionButton = styled(ButtonContainer)`
  color: var(--grey900);
  border-color: var(--grey900);
  border-color: var(--grey900);
`;

export function BreadCrumbs({ project }) {
  return (
    <TopActionsContainer>
      <BreadCrumbContainer href="/">
        <Image src={backIcon} width={12} height={12} />
        <Crumb href="/">
          {project ? "Wistia's Greatest Hits" : 'All Content'}
        </Crumb>
      </BreadCrumbContainer>
      {/* <SecondaryActionButton> Back </SecondaryActionButton> */}
      {/* <PrimaryActionButton>Add</PrimaryActionButton> */}
    </TopActionsContainer>
  );
}

BreadCrumbs.defaultProps = {
  project: false,
};
