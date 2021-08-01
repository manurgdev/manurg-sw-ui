import styled from "styled-components";

export const Main = styled.main`
  padding: 2rem 3rem;
  justify-content: center;
  align-items: center;
`;

export const BackToHomeWrapper = styled.nav`
  margin-top: 1rem;
  margin-left: 3rem;
  vertical-align: center;
`;

export const IconBack = styled.a`
  vertical-align: sub;
  padding-left: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.anchorColor};
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    margin-left: -28px;
    background-color: ${({ theme }) => theme.anchorColor};
    -webkit-mask: url(${({ theme }) => (theme.mode === 'light' ? '/icons/x-wing.svg' : '/icons/tie-fighter.svg')})
      no-repeat 0px;
    mask: url(${({ theme }) => (theme.mode === 'light' ? '/icons/x-wing.svg' : '/icons/tie-fighter.svg')}) no-repeat 0px;
  }

  &:hover {
    &:before {
      background-color: ${({ theme }) => theme.anchorColorHover};
    }
  }
`;

export const SiteTitleHome = styled.h1`
  margin: 3rem;
  margin-top: 3rem;
  margin-bottom: 0;
  line-height: 1.15;
  font-size: 2rem;
`;

export const SiteTitle = styled.h1`
  margin: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 0;
  line-height: 1.15;
  font-size: 2rem;
`;