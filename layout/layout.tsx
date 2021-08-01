import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const siteTitle = 'Star Wars Characters';

const Main = styled.main`
  padding: 2rem 3rem;
  justify-content: center;
  align-items: center;
`;

const SiteTitle = styled.h1`
  margin: 3rem;
  margin-bottom: 0;
  line-height: 1.15;
  font-size: 2rem;
`;

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
          <div>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
        )}
        <SiteTitle>{home ? siteTitle : childTitle || siteTitle}</SiteTitle>
      </header>
      <Main>{children}</Main>
    </div>
  );
}
