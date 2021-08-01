import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Layout } from '../layout';
import NotFoundGif from '../public/404.gif';

const Container404 = styled.section`
  text-align: center;

  & div {
    box-shadow: ${({ theme }) => theme.cardBoxShadowHover};
  }
`;

export default function Custom404() {
  return (
    <Layout childTitle="404">
      <Head>404 - Not Found</Head>
      <Container404>
        <Image src={NotFoundGif} alt="404" width="400px" height="350px" />
        <h4>{`These aren't the droid we're looking for`}</h4>
      </Container404>
    </Layout>
  );
}
