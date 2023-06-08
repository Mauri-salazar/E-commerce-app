import { useEffect, useState} from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";


export const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(resp => resp.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <Layout className="bg-red-100">
      Home
      <div className="grid grap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          products ? products.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          )) : <p>No hay Productos</p>
        }
      </div>
      <ProductDetail />
    </Layout>
  );
};
