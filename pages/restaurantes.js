import Head from 'next/head';

import Card from '../app/components/card';
import Carousel from '../app/components/carousel';
import Footer from '../app/components/footer';
import Header from '../app/components/header';
import Layout from '../app/components/layout';
import List from '../app/components/list';
import FilterList from '../app/components/filter';
import Main from '../app/components/main';
import SearchBar from '../app/components/search-bar';

import { apiCalls } from "../api/apiCalls";

import styles from '../styles/restaurantes.module.scss';

export default function Restaurant({ carouselData, restaurantListData, leftFilters, rightFilters }) {
  const { length } = restaurantListData;

  const renderLeftFilters = (
    leftFilters && leftFilters.map((filters, index) => (<FilterList key={index} {...filters} />))
  );

  const renderRightFilters = (
    rightFilters && rightFilters.map((filters, index) => (<FilterList key={index} {...filters} />))
  );

  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className={styles.container}>
        <Main
          center={(
            <>
              <SearchBar />
              <Carousel
                data={carouselData}
              />
              <List
                data={restaurantListData}
                title={`${length} restaurantes`}
              />
            </>
          )}
          left={(
            <Card>
              {renderLeftFilters}
            </Card>
          )}
          right={(
            <Card>
              {renderRightFilters}
            </Card>
          )}
        />
      </div>
      <Footer />
    </Layout>
  );
}

const orderFilter = {
  title: 'Ordenar',
  filters: [{ name: 'Mejor puntuados' }, { name: 'Mejor puntuados' }, { name: 'Menor tiempo de entrega' }],
};

const moreFilter = {
  title: 'Más filtros',
  filters: [{ name: 'Filtro 1' }, { name: 'Filtro 2' }, { name: 'Filtro 3' }, { name: 'Filtro 4' }, { name: 'Filtro 5' }],
};

const promotionsFilter = {
  title: 'Promociones',
  filters: [{ name: 'Promoción 1' }, { name: 'Promoción 2' }, { name: 'Promoción 3' }, { name: 'Promoción 4' },],
};

const paymentFilter = {
  title: 'Medios de pago',
  filters: [{ name: 'Efectivo' }, { name: 'Online' }],
};

const categoryFilter = {
  title: 'Categorías',
  filters: [{ name: 'Categoría 1' }, { name: 'Categoría 2' }, { name: 'Categoría 3' }, { name: 'Categoría 4' }, { name: 'Categoría 5' }, { name: 'Categoría 6' }, { name: 'Categoría 7' }, { name: 'Categoría 8' }, { name: 'Categoría 9' }, { name: 'Categoría 10' }],
};

export async function getServerSideProps(context) {
  const { query: { ciudad } } = context;

  const carouselData = [];
  const restaurantListData = [];
  const leftFilters = [orderFilter, promotionsFilter, moreFilter];
  const rightFilters = [paymentFilter, categoryFilter];

  // TODO: get default by city?
  const { data } = await apiCalls.getRestaurants(ciudad);

  data.forEach((restaurant) => {
    const { nombre, descripcion, calificacion_general, logo } = restaurant;

    const item = {
      title: nombre,
      description: descripcion,
      src: logo,
      score: calificacion_general,
      type: 'Patrocinado',
      payment: 'Acepta pago en efectivo',
    };

    restaurantListData.push(item);
  });

  for (let i = 1; i <= 7; i += 1) {
    const card = {
      title: 'Nombre del plato',
      description: 'Descripción del plato',
      src: '',
      price: 100 * i,

    };
    carouselData.push(card);
  }

  return {
    props: {
      carouselData,
      restaurantListData,
      leftFilters,
      rightFilters,
    },
  };
}
