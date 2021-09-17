import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
`;

const ListItemText = styled.div`
  height: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const ListItemIconContainer = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 8px;
  padding: 12px;
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 8px;
`;

export function List({ actions }) {
  return (
    <ListContainer>
      {actions.map((item, index) => (
        <ListItem key={index}>
          <ListItemIconContainer></ListItemIconContainer>
          <ListItemText>{item}</ListItemText>
        </ListItem>
      ))}
    </ListContainer>
  );
}
