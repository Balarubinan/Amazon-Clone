import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { Component } from "react";
import logo from "./images/amazon-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";

function Header() {
  var [initialState, dispatch] = useStateValue();
  console.log("INitla state is", initialState);
  var basket = initialState.basket;
  console.log("Basket started as", basket);
  return (
    <nav className="header">
      <Link to="/">
        {/*Link tag ddoent refesh then pag but a href refresses the pag*/}
        <img className="header__logo" src={logo} bgcolor="white"></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Bala</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header_optionLineTwo">&Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__optionBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
