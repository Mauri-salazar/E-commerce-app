import { useContext} from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Components/Context/Context";
import { NotFound } from '../NotFound/NotFound';
import { Loading } from "../../Components/Loading/Loading";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/CheckoutSideMenu";


export const Home = () => {
  const {
    loading,
    products,
    isProductDetailOpen,
    ischeckoutSideMenu,
    searchProduct,
    setSearchProduct,
    filteredProducts
  } = useContext(ShoppingCartContext);

  const renderView = () => {
      if (filteredProducts?.length > 0) {
        return (
          filteredProducts?.map(p => (
            <Card key={p.id} data={p} />
          ))
        )
      } else {
        return (
          <NotFound />
        )
      }  
  }
  return (
    <Layout className="bg-red-100">
      <div className="flex items-center justify-center relative w-80">
        <h1  className="font-medium text-xl p-6">Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product" 
        className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
        onChange={(e) => setSearchProduct(e.target.value) }
      />       
      <div className="grid  grid-cols-4 w-full max-w-screen-lg">
        {
          loading ? <Loading loading={loading} />
          : renderView()
        }
      </div>
      {
        isProductDetailOpen  ?
        <ProductDetail /> : null

      }
      {
        ischeckoutSideMenu ?
        <CheckoutSideMenu /> : null
      }
    </Layout>
  );
};
