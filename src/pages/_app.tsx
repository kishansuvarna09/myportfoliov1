import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
