import styled, { css } from 'styled-components';
import { Dialog, Drawer, MenuItem } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { ActionMenu } from './ActionMenu';

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
`;

const Button = styled.span`
  background: var(--brandBlue500);
  padding: 8px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: white;
  line-height: 16px;
  font-weight: 500;
  ${(props) => (props.variant === 'secondary' ? SecondaryStyles : null)}
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

const SecondaryStyles = css`
  background: unset;
  padding: unset;
  color: var(--grey900);
`;

export function PrimaryActionButton({
  icon,
  text,
  actions,
  variant,
  iconSwap,
  embed,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return (
    <>
      <ButtonContainer onClick={openDrawer}>
        <Button variant={variant} iconSwap={iconSwap}>
          <Image src={icon} width={16} height={16} />
          <ButtonText iconSwap={iconSwap}>{text}</ButtonText>
        </Button>
      </ButtonContainer>
      {embed ? (
        <Dialog
          open={isOpen}
          anchor="bottom"
          variant="temporary"
          onClose={closeDrawer}
          fullWidth={true}
        >
          <div
            style={{
              fontSize: '120px',
              width: '100%',
              textAlign: 'center',
              margin: '64px 0',
            }}
          >
            😵‍💫
          </div>
        </Dialog>
      ) : (
        <Drawer
          open={isOpen}
          anchor="bottom"
          variant="temporary"
          onClose={closeDrawer}
        >
          <ActionMenu actions={actions} />
        </Drawer>
      )}
    </>
  );
}

PrimaryActionButton.defaultProps = {
  variant: 'primary',
  iconSwap: false,
  embed: false,
};
