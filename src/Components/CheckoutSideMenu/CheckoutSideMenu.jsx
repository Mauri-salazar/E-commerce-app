import { Link } from "react-router-dom";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import "./checkoutSideMenu.css";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProduct =  context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProduct);
  };

  // console.log(context.cartProducts)
  const handleCheckout = () => {
    const ordeToAdd = {
      date: '12.06.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    };

    context.setOrder([...context.order, ordeToAdd]);
    context.setCount(0);
    context.setCartProducts([]);
    context.setSearchProduct(null); 
  };


  return (
    <aside className='checkout-side-menu scroll-card flex flex-col fixed right-0 border border-black rounded-lg bg-white '>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl p-6">My Order</h2>
        <div>
          <AiFillCloseCircle
            className="w-6 h-6 text-red-500 cursor-pointer  "
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6 flex-1">
        {
          context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6 mb-5">
        <p className="flex justify-between items-center mb-2">
          <span className="font-bold">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="w-full bg-black py-3 text-white rounded-lg"  onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};
