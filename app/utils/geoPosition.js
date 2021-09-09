import { apiGeolocation } from "../../api/api";

const forwardGeocoding = (direction) => apiGeolocation.get(`/forward?access_key=91269fa67e91ac5882c0f824a650c4ec&country=AR&query=${direction}`);

export const getPositionFromDirection = async (direction) => {
  const { data } = await forwardGeocoding(direction);
  return (direction ? { latitud: data?.data[0]?.latitude, longitud: data?.data[0]?.longitude } : {});
};
