import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import './ProductDetail.css';

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className='flex product-detail flex-col fixed right-0 border border-black rounded-lg bg-white dark:bg-black'>
      <div className="flex justify-between items-center">
        <h2 className="font-mediu text-xl p-2 text-black dark:text-white">Detail</h2>
        <div>
          <AiFillCloseCircle
            className="w-6 h-6 text-red-500 cursor-pointer  "
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className="flex justify-center">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToDetail.images[0]}
          alt={context.productToDetail.title}
        />
      </figure>
      <p className="flex flex-col p-2  text-black dark:text-white">
        <span className="font-medium text-2xl mb-2">{context.productToDetail.title}</span>
        <span className="font-medium text-md">{context.productToDetail.price}</span>
        <span className="font-light text-md">{context.productToDetail.description}</span>
      </p>
    </aside>
  );
};
