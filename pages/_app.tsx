import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Velvet Social — Social Media Management</title>
        <meta name="description" content="Premium social media management for brands, creators and restaurants." />
        <meta property="og:title" content="Velvet Social — Social Media Management" />
        <meta property="og:description" content="We help brands stand out and grow on social." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
