import { Container } from 'components/Container/Container.styled';
import { Wrapper } from './Main.styled';
import { HomePage } from 'pages/HomePage/HomePage';

export const Main = ({ countries }) => {
  return (
    <Wrapper>
      <Container>
        <HomePage countries={countries} />
      </Container>
    </Wrapper>
  );
};
