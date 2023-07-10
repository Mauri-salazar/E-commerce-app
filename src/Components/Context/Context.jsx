import PropTypes  from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const Context = ({children}) => {
  const [loading, setLoading] = useState(true);
  //get products
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(resp => resp.json())
        .then(data => setProducts(data));
      setLoading(false);
    }, 7000);
  }, []);

  //search product
  const [searchProduct, setSearchProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const filteredProductByTitle = (products, searchProduct) => {
    return products?.filter( p => p.title.toLowerCase().includes(searchProduct.toLowerCase()));
  };

  useEffect(() => {
    if(searchProduct) setFilteredProducts(filteredProductByTitle(products, searchProduct));
  
  }, [products, searchProduct]);
  
  console.log(filteredProducts)
  

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
        searchProduct,
        setSearchProduct,
        filteredProducts,
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