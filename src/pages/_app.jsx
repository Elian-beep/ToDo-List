import '../../styles/globals.css'
import Head from 'next/head';

import Header from '../../components/Header/Header';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shop List</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
