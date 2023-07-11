import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";
import { NavBarLink } from "./NavBarLink";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shopi 
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={() => setSearchCategory()} className={({ isActive }) => isActive ? activeStyle : undefined }>
            All
          </NavLink>
        </li>
        <li>
          <NavBarLink to="/clothes" activeStyle={activeStyle}>
            Clothes
          </NavBarLink>
        </li>
        <li>
          <NavBarLink to="/electronics" activeStyle={activeStyle}>
            Electronics
          </NavBarLink>
        </li>
        <li>
          <NavBarLink to="/shoes" activeStyle={activeStyle}>
            Shoes
          </NavBarLink>
        </li>
        <li>
          <NavBarLink to="/others" activeStyle={activeStyle}>
            Others
          </NavBarLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          teff@platzi.com
        </li>
        <li>
          <NavBarLink to="/my-orders" activeStyle={activeStyle}>
            My Orders
          </NavBarLink>
        </li>
        <li>
          <NavBarLink to="/my-account" activeStyle={activeStyle}>
            My Account
          </NavBarLink>
        </li>
        <li>
          <NavBarLink to="/sing-in" activeStyle={activeStyle}>
            Sign In
          </NavBarLink>
        </li>
        <li className="flex items-center">
          <GiShoppingCart
            className="w-7 h-7 text-black cursor-pointer"
            onClick={() => context.openCheckoutSideMenu()}
          />
          <div className="font-medium">
            { context.cartProducts.length }
          </div>
        </li>
      </ul>
    </nav>
  )
}