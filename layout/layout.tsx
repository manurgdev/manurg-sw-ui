import Head from 'next/head';
import Link from 'next/link';
import { BackToHomeWrapper, IconBack, Main, SiteTitle, SiteTitleHome } from './layout.styles';

const siteTitle = 'Star Wars Characters';

export default function Layout({
  children,
  home,
  childTitle,
}: {
  children: JSX.Element[];
  home?: boolean;
  childTitle?: string;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Star Wars Characters" />
      </Head>
      <header>
        {!home && (
          <BackToHomeWrapper>
            <Link href="/" passHref>
              <IconBack>Back to home</IconBack>
            </Link>
          </BackToHomeWrapper>
        )}
        {home ? <SiteTitleHome>{siteTitle}</SiteTitleHome> : <SiteTitle>{childTitle || siteTitle}</SiteTitle>}
      </header>
      <Main>{children}</Main>
    </div>
  );
}
