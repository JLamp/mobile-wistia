import styled from 'styled-components';
import { useState } from 'react';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CommentBox = styled.textarea`
  height: 64px;
  border-radius: 4px;
  border-color: #c4c4c8;
  padding: 8px;
  font-family: 'Inter';
  font-size: 16px;
  &:focus-visible {
    border-color: var(--brandBlue500);
  }
`;

const Checkbox = styled.button`
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 48px;
`;

const PrimaryButton = styled.button`
  margin-top: 16px;
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

export function Comments() {
  const [checked, updateChecked] = useState(false);

  function handleClick() {
    updateChecked(!checked);
  }

  return (
    <CommentsContainer>
      <UserName>Lenny Lavigne</UserName>
      <CommentBox placeholder="Type your comment..." />
      <Checkbox onClick={handleClick}>
        <input
          type="checkbox"
          style={{ marginRight: '8px' }}
          checked={checked}
        />
        <div>Link comment to current time in video</div>
      </Checkbox>
      <PrimaryButton>Post Comment</PrimaryButton>
    </CommentsContainer>
  );
}
