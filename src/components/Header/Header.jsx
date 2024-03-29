import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './../Container/Container.styled';
import {
  HeaderStyled,
  Wrapper,
  Title,
  ModeSwitcher,
  SwitcherText,
} from './Header.styled';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderStyled>
      <Container>
        <Wrapper>
          <Title>Where is the world</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}

            <SwitcherText>{theme} Theme</SwitcherText>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};
