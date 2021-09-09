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
import RightSidesContainer from "../app/components/Restaurant/RightSidesContainer";

import { useEffect } from 'react';
import { apiCalls } from "../api/apiCalls";
import { setRestaurantMenu } from "../redux/actions/restaurantMenuActions";
import { useDispatch, useSelector} from "react-redux";
import Loader from "../app/components/loader/Loader"
import { useRouter } from 'next/router';

export default function Menu(context) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [restaurantId, setRestaurantId] = useState(null);
  const [searchProduct, setSearchProduct] = useState("")
  const restaurantInfo = useSelector(
		
		state => state.restaurantMenu.restaurantInfo
	
	);

  useEffect(()=>{

    if(restaurantId !== router.query[Object.keys(router.query)[0]]){
      setRestaurantId(router.query[Object.keys(router.query)[0]]);
    }
  });

  useEffect(()=>{

    if(restaurantId){
      apiCalls
      .getRestaurantMenu(restaurantId)
      .then((response) => {
        dispatch(setRestaurantMenu(response.data));
      })
    }else{
      dispatch(setRestaurantMenu([]));
    }  
  },[restaurantId]);




  return (
    <Layout>
      <Head>
        <title>Rapidito</title>
        <meta name="description" content="Rapidito web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Loader loading={!restaurantInfo?.nombre}>
          <RestaurantHeader searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
          <RestaurantOpinionsBar />
          <Main left={<LeftSidesContainer  />} right={<RightSidesContainer  />} center={<RestaurantMainContainer searchProduct={searchProduct}/>} />
      </Loader>
    	
      <Footer />
    </Layout>
  );
}
