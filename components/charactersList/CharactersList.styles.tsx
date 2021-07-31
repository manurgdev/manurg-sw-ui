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
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  grid-auto-flow: dense;
`;

export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  display: flex;
  flex-flow: column;
  background-color: ${(props) => props.theme.cardBackground};

  &:hover {
    background-color: ${(props) => props.theme.cardBackgroundHover};
    box-shadow: ${(props) => props.theme.cardBoxShadowHover};
    transition: all 0.15s linear;
  }
`;

export const LoadMoreCharacters = styled.button`
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.text};
  border-radius: 15px;
  font-size: 1.5rem;
  font-family: Sans;
  cursor: pointer;
  width: 200px;
  height: 50px;
  margin: 1rem;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

export const CharacterLink = styled.a`
  font-size: 18px;
  text-decoration: underline;
  font-weight: bold;
  align-self: flex-start;
`;

export const CharacterCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const CharacterCardInfoText = styled.span`
  align-self: flex-end;
  font-weight: 500;
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => (props.theme.mode === 'light' ? '/icons/jedi.svg' : '/icons/sith.svg')}) 50% 50%
    no-repeat;
  background-size: 300px;
  background-color: ${(props) => (props.theme.mode === 'light' ? 'rgba(0, 255, 255, 1)' : 'rgba(255, 0, 0, 1)')};
  opacity: 0.6;
`;
