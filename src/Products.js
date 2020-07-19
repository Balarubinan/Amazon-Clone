import React, { Component } from "react";
import "./Products.css";
import reducer from "./Reducer";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
  var a = Array(parseInt(rating)).fill();
  console.log(a);
  const [{ basket }, dispatch] = useStateValue();
  const addTodoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <img src={image} alt="Not loaded" />
        <div className="product__rating">
          {a.map((elem) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={addTodoBasket}>Add to basket</button>
      </div>
    </div>
  );
}
export default Products;
