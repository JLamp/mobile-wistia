import styled from 'styled-components';
import Image from 'next/image';

function getAlign(align) {
  if (align === 'left') {
    return 'flex-start';
  }
  if (align === 'right') {
    return 'flex-end';
  }

  return 'center';
}

const Container = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.align};
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export function IconButton({ icon, size, align, onClick }) {
  const ALIGNMENT = getAlign(align);
  return (
    <Container size={size} align={ALIGNMENT} onClick={onClick}>
      <IconContainer size={size}>
        <Image src={icon} layout="fill" objectFit="contain" />
      </IconContainer>
    </Container>
  );
}

IconButton.defaultProps = {
  size: 24,
  align: 'center',
};
