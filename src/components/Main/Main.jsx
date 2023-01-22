import { Container } from 'components/Container/Container.styled';
import { Wrapper } from './Main.styled';

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
