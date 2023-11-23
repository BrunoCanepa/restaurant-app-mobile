import {
  ListadoDetalles
} from "./Data.js";

const initialStore = () => {
  const store = {
    detalles: ListadoDetalles,
  };
  return store;
};

export { initialStore };