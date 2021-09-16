import styled from 'styled-components';
import { IconButton } from './IconButton';
import pencilIcon from '../public/Icons/Pencil.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 100%;
  margin-bottom: 16px;
`;

const TopBarButton = styled.button`
  font-weight: 500;
`;

const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
`;

const Description = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export function PageHeader({ title, description }) {
  return (
    <Container>
      <TitleGroup>
        <Title>{title}</Title>
        <IconButton icon={pencilIcon} size={16} align="right" />
      </TitleGroup>

      <Description>{description}</Description>
    </Container>
  );
}

PageHeader.defaultProps = {
  title: "Wistia's Greatest Hits",
  description:
    "We've made some pretty great videos over the years. Some aspirational, some emotional, and some just... weird. Enjoy this collection of Wistia's Greatest Hits",
};
