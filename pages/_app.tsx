import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Toggle } from '../components/Toggle/Toggle';
import { darkTheme, GlobalStyles, lightTheme } from '../layout/ThemeConfig';
import { useDarkMode } from '../hooks/useDarkMode';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle theme={theme as string} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
