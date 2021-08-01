import styled from 'styled-components';

export const FilmsWrapper = styled.article`
  margin-top: 3rem;
  margin-left: 1rem;
  text-align: left;
`;

export const FilmsCount = styled.h1`
  color: ${({ theme }) => theme.filmsCounterColor};
`;

export const Film = styled.li``;
