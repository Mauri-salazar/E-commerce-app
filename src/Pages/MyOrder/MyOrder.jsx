import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { ShoppingCartContext } from '../../Components/Context/Context';
import { Layout } from '../../Components/Layout/Layout';


export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if(index === 'last') index =  context.order?.length - 1;

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer  dark:text-white' />
        </Link>
        <h1  className="font-medium text-xl p-6    dark:text-white">My Order</h1>
      </div>
      <div className='flex flex-col w-80    dark:text-white'>
        {
          context.order?.[index]?.products.map(product => (
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
