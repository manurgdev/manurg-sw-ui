import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../layout';
import NotFoundGif from '../public/404.gif';

export default function Custom404() {
  return (
    <Layout childTitle="404">
      <Head>404 - Not Found</Head>
      <Image src={NotFoundGif} alt="404" />
      <h4>{`These aren't the droid we're looking for`}</h4>
    </Layout>
  );
}
