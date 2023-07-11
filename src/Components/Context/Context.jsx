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
    }, 1000);
  }, [loading]);

  //search product
  const [searchProduct, setSearchProduct] = useState(null);
  

  const filteredProductByTitle = (products, searchProduct) => {
    return products?.filter( p => p.title.toLowerCase().includes(searchProduct.toLowerCase()));
  };

  //Filter category product
  const [searchCategory, setSearchCategory] = useState(null);

  const filteredProductByCategory = (products, searchCategory) => {
    return products?.filter( p => p.category.name.toLowerCase().includes(searchCategory.toLowerCase()));
  };
  
  const filterBy = (searchType, products, searchProduct, searchCategory) => {
    
    if (!searchType) {
      return products;
    }
    if (searchType === 'BY_TITLE') {
      return filteredProductByTitle(products, searchProduct);
    } 
    if (searchType === 'BY_CATEGORY') {
      return filteredProductByCategory(products, searchCategory);
    }
    if (searchType === 'BY_CATEGORY_AND_TITLE') {
      return filteredProductByCategory(products, searchCategory).filter(p => p.title.toLowerCase().includes(searchProduct.toLowerCase()));
    }
  };

  //filter products 
  const [filteredProducts, setFilteredProducts] = useState(null);
  
  useEffect(() => {
    if(!searchCategory && !searchProduct) setFilteredProducts(filterBy(null, products,searchProduct, searchCategory));
    if(searchCategory && searchProduct) setFilteredProducts(filterBy('BY_CATEGORY_AND_TITLE', products,searchProduct, searchCategory));
    if(searchProduct && !searchCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchProduct));
    if(searchCategory && !searchProduct) setFilteredProducts(filterBy('BY_CATEGORY', products,searchProduct, searchCategory));
  }, [products, searchProduct, searchCategory]);

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
        searchCategory,
        setSearchCategory,
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