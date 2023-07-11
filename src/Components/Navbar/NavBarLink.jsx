import PropTypes  from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../Context/Context";

export const NavBarLink = ({to, activeStyle, children }) => {
  const { setSearchCategory } = useContext(ShoppingCartContext);
  return (
    <NavLink
      to={to}
      onClick={() => setSearchCategory(children)} 
      className={({ isActive }) =>
      isActive ? activeStyle : undefined
    }>
      { children }
    </NavLink>
  );
};

NavBarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  activeStyle: PropTypes.node.isRequired
};