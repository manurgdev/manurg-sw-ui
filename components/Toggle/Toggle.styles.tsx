import styled from 'styled-components';

export const ToggleContainer = styled.div`
  @media (min-width: 800px) {
    top: 1rem;
  }
  position: fixed;
  right: 1rem;
  top: 0;
  justify-content: center;
  text-align: center;
`;

export const ToggleText = styled.small`
  margin: 0px;
  font-size: 12px;
`;

export const ToggleButton = styled.button`
  @media (min-width: 800px) {
    width: 7rem;
    height: 3rem;
  }
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  width: 6rem;
  height: 2rem;

  div {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // jedi icon
    &:first-child {
      @media (min-width: 800px) {
        width: 35px;
      }
      width: 25px;
      transform: ${({ lightTheme }: { lightTheme: boolean }) =>
        lightTheme ? 'translateY(-5px)' : 'translateY(100px)'};
    }

    // sith icon
    &:nth-child(2) {
      @media (min-width: 800px) {
        width: 32px;
        transform: ${({ lightTheme }: { lightTheme: boolean }) =>
          lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      }
      width: 22px;
      transform: ${({ lightTheme }: { lightTheme: boolean }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(-2px)'};
    }
  }
`;
