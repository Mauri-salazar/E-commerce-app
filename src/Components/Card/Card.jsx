import { useContext, useState } from "react";
import { ShoppingCartContext } from "../Context/Context";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart/MdBookmarkAdded";

export const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToDetail(productDetail);
    context.closeCheckoutSideMenu();
  };

  const [ addedProduct, setAddedProduct ] = useState(false);

  const addProcductsToCart = (productData) => {
      const productIndex = context.cartProducts.findIndex( product => product.id === productData.id);

      if(productIndex >= 0 ) {
        productData.style.pointerEvents = "none";

        context.setCartProducts([...context.cartProducts, productData]);
        setAddedProduct(true);

        context.openCheckoutSideMenu();
        context.closeProductDetail();
        context.setCount(context.count + 1);
      } else {
        context.setCartProducts([...context.cartProducts, productData]);
        setAddedProduct(true);

        context.openCheckoutSideMenu();
        context.closeProductDetail();
        context.setCount(context.count + 1);
      }

  };

  return (
    <div className="bg-white cursor-pointer w-58 h-60 rounded-lg p-2">
      <figure className="relative mb-2 w-full h-4/5">
        <span
        className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt={data.data.description}
          className="w-full h-full object-cover rounded-lg"
          onClick={() => showProduct(data.data)}
        />
        <div
          className="absolute top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full p-1"
          onClick={() => addProcductsToCart(data.data)}
        >
          {
            addedProduct ? <MdBookmarkAdded /> :
            <MdAddShoppingCart />
          }

        </div>
        <p className="flex justify-between">
          <span className="text-sm font-light">{data.data.title}</span>
          <span className="text-lg font-medium">${data.data.price}</span>
        </p>
      </figure>
    </div>
  );
};
