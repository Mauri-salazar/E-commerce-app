import { useContext} from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ShoppingCartContext } from "../../Components/Context/Context";
import { Loading } from "../../Components/Loading/Loading";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/CheckoutSideMenu";


export const Home = () => {
  const {
    loading,
    products,
    isProductDetailOpen,
    ischeckoutSideMenu
  } = useContext(ShoppingCartContext);

  return (
    <Layout className="bg-red-100">
      Home
      <div
        className="grid  grid-cols-4
        w-full max-w-screen-lg"
      >
        {
          loading ? <Loading loading={loading} />
          : products ? products.map((product) => (
              <Card
                key={product.id}
                data={product}
              />
            )) : null
        }
      </div>
      {
        isProductDetailOpen  ?
        <ProductDetail /> : undefined
      }
      {
        ischeckoutSideMenu ?
        <CheckoutSideMenu /> : undefined
      }
    </Layout>
  );
};
