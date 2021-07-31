import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  justify-content: center;
  text-align: center;
`;

export const ToggleText = styled.small`
  margin: 0px;
  font-size: 12px;
`;

export const ToggleButton = styled.button`
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
  width: 7rem;
  height: 3rem;

  div {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // jedi icon
    &:first-child {
      width: 35px;
      transform: ${({ lightTheme }: { lightTheme: boolean }) =>
        lightTheme ? 'translateY(-5px)' : 'translateY(100px)'};
    }

    // sith icon
    &:nth-child(2) {
      width: 32px;
      transform: ${({ lightTheme }: { lightTheme: boolean }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;
