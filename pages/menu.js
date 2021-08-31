import Head from 'next/head';

import Footer from '../app/components/footer';
import Layout from '../app/components/layout';
// import Main from '../app/components/main';
import Header from '../app/components/header';
import RestaurantHeader from "../app/components/Restaurant/RestaurantHeader";
import RestaurantOpinionsBar from "../app/components/Restaurant/RestaurantOpinionsBar";
import RestaurantMainContainer from "../app/components/Restaurant/RestaurantMainContainer";
import Main from "../app/components/main/main";
import SidesContainer from "../app/components/Restaurant/SidesContainer";

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    	<RestaurantHeader />
			<RestaurantOpinionsBar />
			<Main left={<SidesContainer  />} right={<SidesContainer  />} center={<RestaurantMainContainer />} />
      <Footer />
    </Layout>
  );
}
