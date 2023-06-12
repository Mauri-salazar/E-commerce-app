import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import "./checkoutSideMenu.css";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className='checkout-side-menu scroll-card flex flex-col fixed right-0 border border-black rounded-lg bg-white '>
      <div className="flex justify-between items-center">
        <h2 className="font-mediu text-xl p-6">My Order</h2>
        <div>
          <AiFillCloseCircle
            className="w-6 h-6 text-red-500 cursor-pointer  "
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6">
        {
          context.cartProducts.map((product) => (
            <OrderCard
            key={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
            />
          ))
        }
      </div>
    </aside>
  );
};
