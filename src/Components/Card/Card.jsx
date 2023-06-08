import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";

export const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-58 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span
        className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt={data.data.description}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full p-1"
          onClick={() => context.setCount(context.count + 1) }
        >
          +
        </div>
        <p className="flex justify-between">
          <span className="text-sm font-light">{data.data.title}</span>
          <span className="text-lg font-medium">${data.data.price}</span>
        </p>
      </figure>
    </div>
  );
};
