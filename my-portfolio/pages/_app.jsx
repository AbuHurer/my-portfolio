import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mohammed Abu Hurer — AI Engineer | ML Innovator | Data Storyteller" />
        <link rel="icon" href="/favicon.ico" />
        <title>Mohammed Abu Hurer — Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
