import styled from 'styled-components';
import Image from 'next/image';
import { List, ListItem } from '@mui/material';

const MenuItem = styled(ListItem)`
  height: 48px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const Spacer = styled.div`
  background-image: url('/ActionIcons/squiggle.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 8px;
  width: 100%;
`;

export function ActionMenu({ actions }) {
  return (
    <List>
      {actions.map((item) => (
        <MenuItem key={item.text}>
          <IconContainer>
            <Image
              src={'/ActionIcons/' + item.icon + '.png'}
              width={16}
              height={16}
            />
          </IconContainer>
          {item.text}
        </MenuItem>
      ))}
      <MenuItem style={{ height: '24px' }}>
        <Spacer />
      </MenuItem>
    </List>
  );
}
