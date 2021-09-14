import { useState } from "react";
import Head from 'next/head';
import Footer from '../app/components/footer';
import Layout from '../app/components/layout';
import Header from '../app/components/header';
import RestaurantHeader from "../app/components/Restaurant/RestaurantHeader";
import RestaurantOpinionsBar from "../app/components/Restaurant/RestaurantOpinionsBar";
import RestaurantMainContainer from "../app/components/Restaurant/RestaurantMainContainer";
import Main from "../app/components/main/main";
import LeftSidesContainer from "../app/components/Restaurant/LeftSidesContainer";
import { useEffect } from 'react';
import { apiCalls } from "../api/apiCalls";
import { setRestaurantMenu, setLoading } from "../redux/actions/restaurantMenuActions";
import {addItemsToShoppingCart} from "../redux/actions/shoppingCartActions";
import { useDispatch, useSelector} from "react-redux";
import Loader from "../app/components/loader/Loader"
import { useRouter } from 'next/router';
import RightSidesContainer from "../app/components/Restaurant/RightSidesContainer";

import styles from '../styles/menu.module.scss';

export default function Menu(context) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [productCategory, setProductCategory] = useState("");
  const [searchProduct, setSearchProduct] = useState("")
  const loading = useSelector(state => state.restaurantMenu.loading);

  const restaurantInfo = useSelector(
		
		state => state.restaurantMenu.restaurantInfo
	
	);


  useEffect(()=>{
    const restaurantId= router.query[Object.keys(router.query)[0]];
   
    if(!restaurantId){
      return;
    }
      apiCalls
      .getRestaurantMenu(restaurantId)
      .then((response) => {
        dispatch(setRestaurantMenu(response.data));
      }).finally(()=> {
        dispatch(setLoading(false));
      })
    

    return () => {
      dispatch(setRestaurantMenu([]));
      dispatch(addItemsToShoppingCart([]));
      dispatch(setLoading(true));
    }
      
  },[router]);


  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Loader loading={loading}>
        {restaurantInfo?.nombre && 
              <>
                  <RestaurantHeader searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
                  <RestaurantOpinionsBar />
                  <div className={styles.container}>
                    <Main left={<LeftSidesContainer  productCategory={productCategory} setProductCategory={setProductCategory}/>}  right={<RightSidesContainer position={{latitud:restaurantInfo.latitud,longitud:restaurantInfo.longitud}} />}  center={<RestaurantMainContainer searchProduct={searchProduct} productCategory={productCategory}/>} />
                  </div>
              </> 
        }
      </Loader>
      <Footer />
    </Layout>
  );
}
