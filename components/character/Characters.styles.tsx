import styled from 'styled-components';

export const CharactersWrapper = styled.section`
  @media (min-width: 800px) {
    text-align: left;
  }

  text-align: center;
`;

export const Grid = styled.article`
  display: grid;
  gap: 1rem 1rem;
  grid-auto-rows: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 28rem), 1fr));
  grid-auto-flow: dense;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardBackground};
  box-shadow: ${(props) => props.theme.cardBoxShadowHover};
`;

export const Card = styled.div`
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;
  display: flex;
  flex-flow: column;
`;

export const CharacterCardInfo = styled.div`
  display: block;
  text-align: center;
`;

export const CharacterCardInfoText = styled.div`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;

  & span {
    font-weight: normal;
    text-transform: capitalize;
  }
`;
