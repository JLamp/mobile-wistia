import styled from 'styled-components';
import Image from 'next/image';
import favoriteIcon from '../public/Icons/Favorite.svg';
import { EditButton } from './EditButton';

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

const IconContainer = styled.div`
  margin-right: 8px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  align-self: left;
  flex-grow: 2;
`;

const Description = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export function PageHeader({ title, description, favorite }) {
  return (
    <Container>
      <TitleGroup>
        {favorite && (
          <IconContainer>
            <Image src={favoriteIcon} width={16} height={16} />
          </IconContainer>
        )}
        <Title>{title}</Title>
        <EditButton title={title} description={description} />
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
