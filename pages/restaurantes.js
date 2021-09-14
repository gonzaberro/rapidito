import { useEffect, useState} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Card from '../app/components/card';
import Carousel from '../app/components/carousel';
import EmptyList from '../app/components/emptyList/EmptyList';
import Footer from '../app/components/footer';
import Header from '../app/components/header';
import Layout from '../app/components/layout';
import Loader from '../app/components/loader/Loader';
import List from '../app/components/list';
// import FilterList from '../app/components/filter';
import Main from '../app/components/main';
import SearchBar from '../app/components/search-bar';

import { apiCalls } from "../api/apiCalls";

import styles from '../styles/restaurantes.module.scss';

const formatRestaurantData = (data) => {
  return data.map((restaurant) => {
    const { nombre, descripcion, calificacion_general, logo, id } = restaurant;
    return {
      id,
      title: nombre,
      description: descripcion,
      src: logo,
      score: calificacion_general,
      type: 'Patrocinado',
      payment: 'Acepta pago en efectivo',
    };
  });
};

export default function Restaurant() {
  const [loading, setLoading] = useState(false);
  const [restaurantList, setRestaurantList] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { query: { latitud,longitud } } = router;
    if(!latitud){
      
        return;
    }

    setLoading(true);
  
    apiCalls.getRestaurants(latitud,longitud).then((response) => {
      const { data } = response;
      setRestaurantList(formatRestaurantData(data));
    }).finally(() => {
      setLoading(false);
    });
    
  
  }, [router]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredRestaurant = search === '' ? restaurantList
    : restaurantList.filter(({ title = '' }) => title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className={styles.container}>
        <Loader loading={loading}>
          <Main
            left={
              <Card>
                Hola Manola
              </Card>
            }
            center={(
              <>
                <SearchBar onChange={handleSearch} value={search} />
                <Carousel
                // data={carouselData}
                />
                <EmptyList list={restaurantList}>
                  <List
                    data={filteredRestaurant}
                    title={`${filteredRestaurant.length} restaurantes`}
                  />
                </EmptyList>
              </>
            )}
          />
        </Loader>
      </div>
      <Footer />
    </Layout>
  );
}

/*
  for (let i = 1; i <= 7; i += 1) {
    const card = {
      title: 'Nombre del plato',
      description: 'Descripción del plato',
      src: '',
      price: 100 * i,

    };
    carouselData.push(card);
  }
*/
