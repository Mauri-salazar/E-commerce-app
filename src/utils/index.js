/* the funtion calculates total price of a new order */

export const totalPrice = (products) => {
  const initialValue = 0;
  const sumProducts = products.reduce((total, values ) => total + values.price, initialValue);
  return sumProducts;
};

