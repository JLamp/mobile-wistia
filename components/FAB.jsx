import styled from 'styled-components';
import Image from 'next/image';
import plusIcon from '../public/Icons/Plus.svg';
import embedIcon from '../public/Icons/Embed.svg';

const ActionButtonContainer = styled.button`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  background: var(--brandBlue500);
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--elevation3);
`;

function getIcon(icon) {
  if (icon === 'embed') {
    return embedIcon;
  }

  return plusIcon;
}

export function FAB({ icon, actions }) {
  const ICON = getIcon(icon);
  return (
    <ActionButtonContainer>
      <Image src={ICON} width={32} height={32} />
    </ActionButtonContainer>
  );
}
