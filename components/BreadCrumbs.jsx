import styled from 'styled-components';
import { SideNavButton } from './SideNavButton';
import { PrimaryActionButton } from './PrimaryActionButton';
import addIcon from '../public/Icons/Plus.svg';
import { AddActions } from '../constants/AddActions';
import embedIcon from '../public/Icons/Embed.svg';

const TopActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedee1;
  margin-bottom: 8px;
`;

export function BreadCrumbs({ project, embed }) {
  return (
    <TopActionsContainer>
      <SideNavButton project={project} />
      {project ? (
        <PrimaryActionButton icon={addIcon} text="Add" actions={AddActions} />
      ) : (
        <PrimaryActionButton
          icon={embedIcon}
          text="Embed & Share"
          actions={AddActions}
          embed={embed}
        />
      )}
    </TopActionsContainer>
  );
}

BreadCrumbs.defaultProps = {
  project: false,
  embed: false,
};
