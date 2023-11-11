import {
  ListadoRestaurantes,
  ListadoShows,
  ListadoData,
  ListadoIconos,
  ListadoDetalles
  } from "./Data.js";
  
  const initialStore = () => {
    const store = {
      restaurantes: ListadoRestaurantes,
      shows: ListadoShows,
      data: ListadoData,
      iconos: ListadoIconos,
      detalles: ListadoDetalles,
    };
    return store;
  };
  
  const types = {
    setRestaurant: "setRestaurant",
    setShow: "setShow"
  };
  
  const storeReducer = (state, action) => {
    switch (action.type) {
      case types.setRestaurant:
        return {
          ...state,
          restaurantes: state.restaurantes.push(...action.payload),
        };
      case types.setShow:
        return {
          ...state,
          shows: state.shows.push(...action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export { types };
  export { initialStore };
  export default storeReducer;