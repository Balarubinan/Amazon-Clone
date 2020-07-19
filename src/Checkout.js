import React from "react";
import { useStateValue } from "./StateProvider";
import logo from "./images/amazon-logo.png";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispach] = useStateValue();
  console.log(basket);
  //reaplce the damn amazon logo with a damn ad page image
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={logo} />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is empty!! please add items to checkout!</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout___title">Items in your basket are </h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
export default Checkout;
