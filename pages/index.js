import { useRouter } from 'next/router';
import Head from 'next/head';
import SearchBox from '../app/components/searchBox';
import Footer from '../app/components/footer';
import Layout from '../app/components/layout';
import Header from '../app/components/header';
import styles from './index.module.scss';

export default function Home() {
  const router = useRouter();
  const searchOnPress = (text) => router.push(`/restaurantes?ciudad=${text}`);
  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <SearchBox searchOnPress={searchOnPress} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
