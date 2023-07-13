import { useContext } from "react";
import { ShoppingCartContext } from "../../Components/Context/Context";
import { Layout } from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard";


export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1  className="font-medium text-xl p-6 dark:text-white">My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      } 
    </Layout>
  );
};
