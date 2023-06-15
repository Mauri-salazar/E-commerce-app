import PropTypes  from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const Context = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(resp => resp.json())
        .then(data => setProducts(data));
      setLoading(false);
    }, 7000);
  }, []);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToDetail, setProductToDetail] = useState({});

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const [cartProducts, setCartProducts] = useState([]);
  const [ischeckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const [count, setCount] = useState(0);

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenu(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenu(false);
  };

  const [order, setOrder] = useState([]);


  return (
    <ShoppingCartContext.Provider
      value={{
        loading,
        setLoading,
        products,
        cartProducts,
        setCartProducts,
        ischeckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        count,
        setCount,
        order,
        setOrder,
        productToDetail,
        setProductToDetail,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

Context.propTypes = {
  children:  PropTypes.node.isRequired,
}