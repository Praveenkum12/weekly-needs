import { useState } from "react";
import OrderList from "./OrderList";

function Cart({ orders, setOrders }) {
  const finalPrice = orders.reduce((acc, order) => acc + order.totalPrice, 0);
  const [email, setEmail] = useState("");

  function handlePay(e) {
    e.preventDefault();
    if (!email) return;
    const options = {
      key: "rzp_test_KG6vcCnSmFahhQ",
      key_secret: "XYpytqEMR5iV7QNC8P9vISwB",
      amount: finalPrice * 100,
      currency: "INR",
      name: "Weekly Needs",
      description: "* For testing purpose *",
      handler: function () {
        setOrders([]);
        alert("Payment Done ☺️✌️");
      },
      prefill: {
        name: "Praveenkumar",
        email: "praveenkum1225@gmail.com",
        contact: "6383233644",
      },
      notes: {
        address: "Razorpay corporate office",
      },
      theme: {
        color: "#19a596",
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  }

  return (
    <div className="container cart-container">
      <h1>Your Cart</h1>
      {orders.length === 0 ? (
        <p className="cart-para">You have not added any product to cart yet.</p>
      ) : (
        <div>
          <ul className="table-heading">
            <li>Product</li>
            <li>Unit Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          <div className="order-box">
            {orders.map((order) => (
              <OrderList order={order} key={order.name} />
            ))}
          </div>
          <div className="cart-total-box">
            <div className="cart-total-box-inner">
              <p>Total</p>
              <p>Rs.{finalPrice} \-</p>
            </div>
          </div>

          <p className="mail-para">
            Enter your email and then click on pay and your products will be
            delivered to you on the same day!
          </p>

          <form className="pay-form">
            <label htmlFor="mail" className="email-label">
              Email<span className="important">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="mail"
              required
            />
            <button className="pay-btn" onClick={handlePay}>
              Pay
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
