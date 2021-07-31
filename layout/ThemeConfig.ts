import { createGlobalStyle, DefaultTheme } from "styled-components"

export interface Theme extends DefaultTheme {
  mode: string;
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
  button: string;
  buttonHover: string;
  anchorColor: string;
  anchorHoverColor: string;
  cardBackground: string;
  cardBackgroundHover: string;
  cardBoxShadowHover: string;
}

export const lightTheme = {
  mode: 'light',
  body: '#f0fbff',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  button: '#82c91e',
  buttonHover: '#74b31b',
  anchorColor: '#3750c7',
  anchorHoverColor: '#73d941',
  cardBackground: '#dae1e3',
  cardBackgroundHover: '#c7cfd1',
  cardBoxShadowHover: '0px 0px 25px 9px rgba(25,165,230,1)'
}

export const darkTheme = {
  mode: 'dark',
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #d61a26)',
  button: '#d2192f',
  buttonHover: '#ad1527',
  anchorColor: '#d2192f',
  anchorHoverColor: '#9e51b8',
  cardBackground: '#999',
  cardBackgroundHover: '#828282',
  cardBoxShadowHover: '0px 0px 25px 9px rgba(230,25,25,1)'
}


export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: ${({ theme }) => (theme as Theme).body};
    color: ${({ theme }) => (theme as Theme).text};
    padding: 0;
    margin: 0;
    transition: all 0.50s linear;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => (theme as Theme).anchorColor};
  }

  a:hover {
    color: ${({ theme }) => (theme as Theme).anchorHoverColor};
    transition: all 0.15s linear;
  }
`;
