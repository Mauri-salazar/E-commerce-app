import PropTypes  from "prop-types";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const Context = ({children}) => {
  const [count, setCount] = useState(0);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

Context.propTypes = {
  children:  PropTypes.node.isRequired,
}