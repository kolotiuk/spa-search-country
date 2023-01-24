import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
  text-decoration: none;
`;