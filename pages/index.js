import Head from 'next/head';
import Link from 'next/link'

import Carousel from '../app/components/carousel';
import Footer from '../app/components/footer';
import Layout from '../app/components/layout';
import Main from '../app/components/main';
import Header from '../app/components/header';
import List from '../app/components/list';

import { loremTemplate } from '../app/utils/strings';

export default function Home({ carouselData, listData }) {
  const { length } = listData;

  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main
        left={(
          <ul>
            <li>
              <Link href="/menu">
                <a>Menu</a>
              </Link>
            </li>
          </ul>
        )}
        center={(
          <>
            <Carousel
              data={carouselData}
            />
            <List
              data={listData}
              title={`${length} restaurantes`}
            />
          </>
        )}
      />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
// export async function getServerSideProps() {
  const carouselData = [];
  const listData = [];

  const loremWordTemplate = (length) => loremTemplate('word', length);

  for (let i = 1; i <= 7; i++) {
    const title = await fetch(loremWordTemplate(2));
    const { text: titleText } = await title.json();
    const description = await fetch(loremWordTemplate(10))
    const { text: descText } = await description.json();

    const card = {
      title: titleText,
      description: descText,
      src: `https://picsum.photos/id/${i * 20}/215`,
      price: 100 * i,

    };
    carouselData.push(card);
  }

  for (let i = 1; i <= 10; i++) {
    const title = await fetch(loremWordTemplate(2));
    const { text: titleText } = await title.json();
    const description = await fetch(loremWordTemplate(10))
    const { text: descText } = await description.json();

    const item = {
      title: titleText,
      description: descText,
      src: `https://picsum.photos/id/${i * 20}/100`,
      score: i,
      type: i < 4 ? 'Patrocinado' : null,
      payment: i < 7 ? 'Acepta pago online' : null,
    };
    listData.push(item);
  }

  return {
    props: {
      carouselData,
      listData,
    },
  };
}
