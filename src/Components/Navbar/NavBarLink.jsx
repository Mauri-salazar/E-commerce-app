import PropTypes  from "prop-types";
import { NavLink } from "react-router-dom";

export const NavBarLink = ({to, activeStyle, children }) => {
  return (
    <NavLink
      to={to}
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