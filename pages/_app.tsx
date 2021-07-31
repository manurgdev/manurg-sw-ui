import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Toggle } from '../components/Toggle/Toggle';
import { darkTheme, GlobalStyles, lightTheme } from '../layout/ThemeConfig';
import { useDarkMode } from '../hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme as string} toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
