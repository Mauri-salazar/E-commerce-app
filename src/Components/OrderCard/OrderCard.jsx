// import { ShoppingCartContext } from "../Context/Context";
// import { useContext } from "react";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import PropTypes  from "prop-types";


export const OrderCard = props => {
  const {id, title, image, price, handleDelete} = props;

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center grap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center grap-2">
        <p className="text-lg font-medium">{price}</p>
        <AiFillDelete
          className="w-6 h-6 text-red-500 cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  handleDelete: PropTypes.func,
  id: PropTypes.node.isRequired
}