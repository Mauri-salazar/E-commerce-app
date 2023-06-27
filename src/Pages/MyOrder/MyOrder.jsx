import { useContext } from 'react'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { ShoppingCartContext } from '../../Components/Context/Context';
import { Layout } from '../../Components/Layout/Layout';


export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.order.slice(-1)[0]);

  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
};
