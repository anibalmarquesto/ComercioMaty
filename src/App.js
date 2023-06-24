import * as React from "react";
import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import Nabvar from "./components/Nabvar";
import Product1 from "./components/Product1";

import ProductoDeLaCard from "./components/Productos-De-La-Card";

import { SnackbarProvider } from "notistack";

function App() {
  const [productosCarrito, setProductosCarrito] = React.useState([]);

  const getProductosCarrito = () => {
    const productosCarritoStoredData = localStorage.getItem("productosCarrito");

    if (productosCarritoStoredData) {
      const productosCarritoParsed = JSON.parse(productosCarritoStoredData);

      if (productosCarritoParsed instanceof Array) {
        if (productosCarritoParsed.length) {
          setProductosCarrito(productosCarritoParsed);
        } else {
          setProductosCarrito([]);
        }
      }
    }
  };

  const onCarritoChange = () => {
    getProductosCarrito();
  };

  React.useEffect(() => {
    getProductosCarrito();
  }, []);

  return (
    <>
      <SnackbarProvider />
      <Nabvar />

      <Product1 onCarritoChange={onCarritoChange} />
      <CheckoutPage
        onCarritoChange={onCarritoChange}
        productosCarrito={productosCarrito}
      />
    </>
  );
}

export default App;
