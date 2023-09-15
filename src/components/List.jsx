import { useState } from "react";
import { Link } from "react-router-dom";

function List({ product, setOrders, orders }) {
  const { name, price } = product;
  const [quantity, setQuantity] = useState(0);

  const handleOrder = function () {
    setQuantity((quantity) => quantity + 1);

    if (!orders.find((order) => order.name === name)) {
      const newOrder = {
        name,
        price,
        quantity: 1,
        totalPrice: +price,
        image: product.image,
      };
      setOrders((order) => [...order, newOrder]);
    } else {
      setOrders(
        orders.map(function (order) {
          if (order.name === name) {
            order.quantity = quantity + 1;
            order.totalPrice = price * (quantity + 1);
            return order;
          }
          return order;
        })
      );
    }
  };

  const handleRemoveOrder = function () {
    setQuantity(0);

    setOrders((orders) =>
      orders.filter(function (order) {
        return order.name !== name;
      })
    );
  };

  return (
    <li>
      <div className="first-div">
        <Link to={name}>
          <img src={product.image} alt={product.name} className="product-img" />
        </Link>
        {orders.some((order) => order.name === name) && (
          <p className="count">
            {orders.find((order) => order.name === name).quantity}
          </p>
        )}
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.detail}</p>
      </div>
      <div>
        {orders.some((order) => order.name === name) && (
          <button className="close-btn" onClick={handleRemoveOrder}>
            &times;
          </button>
        )}
        <button className="product-price" onClick={handleOrder}>
          Rs.{price}\-
        </button>
      </div>
    </li>
  );
}

export default List;
