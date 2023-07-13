import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";
import { PlusIcon , CheckIcon } from '@heroicons/react/24/solid';

export const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToDetail(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProcductsToCart = (productData) => {
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    context.setCount(context.count + 1);
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter( product => product.id === id ).length > 0;

    if(isInCart) {
      return (
        <div className="absolute top-1 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
          <CheckIcon className="pointer-events-none h-6 w-6 text-green-500" />
        </div>
      );
    }else {
      return (
        <div
        className="absolute top-1 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1"
        onClick={() => addProcductsToCart(data.data)}>
          <PlusIcon className="h-6 w-6 text-blue-500" />
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer w-58 h-60 rounded-lg p-2  bg-white dark:bg-black">
      <figure className="relative mb-2 w-full h-4/5">
        <span
        className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 ">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt={data.data.description}
          className="w-full h-full object-cover rounded-lg"
          onClick={() => showProduct(data.data)}
        />
        {renderIcon(data.data.id)}
        <p className="flex justify-between  text-black dark:text-white">
          <span className="text-sm font-light">{data.data.title}</span>
          <span className="text-lg font-medium">${data.data.price}</span>
        </p>
      </figure>
    </div>
  );
};
