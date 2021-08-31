import Head from 'next/head';

import RestaurantMenu from '../app/components/Restaurant/RestaurantMenu';
import Footer from '../app/components/footer';
import Layout from '../app/components/layout';
import Main from '../app/components/main';
import Navbar from '../app/components/navbar';

import { loremTemplate } from '../app/utils/strings';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Main>
        <RestaurantMenu />
      </Main>

      <Footer />
    </Layout>
  );
};

// export async function getServerSideProps() {
export async function getStaticProps() {
  const cards = [];
  const loremWordTemplate = (length) => loremTemplate('word', length);

  for (let i = 1; i <= 5; i++) {
    const title = await fetch(loremWordTemplate(2))
    const { text: titleText } = await title.json();
    const description = await fetch(loremWordTemplate(10))
    const { text: descText } = await description.json();

    const card = {
      title: titleText,
      description: descText,
      src: `https://picsum.photos/id/${i * 20}/220/270`,
      price: 100 * i

    }
    cards.push(card);
  }

  return {
    props: {
      cards: cards
    }
  }
};