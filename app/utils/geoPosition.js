import { apiGoogleGeolocation } from "../../api/api";

const forwardGeocoding = (direction) => {

  
  

}

export const getPositionFromDirection = (direction) => {

   return apiGoogleGeolocation.get(`json?address=${direction}&key=AIzaSyBe5telxhJecKRH6667sFm3imuLu6JQ6hw`).then((response) => {
   
    return response.data?.results[0]?.geometry?.location || direction;
    
   });

 
};
