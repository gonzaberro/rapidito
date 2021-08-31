import Head from 'next/head';

import Footer from '../app/components/footer';
import Layout from '../app/components/layout';
// import Main from '../app/components/main';
import Header from '../app/components/header';
import RestaurantMenu from '../app/components/Restaurant/RestaurantMenu';

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RestaurantMenu />
      <Footer />
    </Layout>
  );
}
