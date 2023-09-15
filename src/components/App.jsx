import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Cart from "./Cart";
import PageNotFound from "./PageNotFound";
import { useState } from "react";

const products = [
  {
    image: "cheese.png",
    name: "Cheese",
    detail: "250g cheese block",
    quantity: 1,
    price: "225",
  },
  {
    image: "milk.png",
    name: "Milk",
    detail: "250ml milk bottle",
    quantity: 1,
    price: "25",
  },
  {
    image: "tomato.png",
    name: "Tomato",
    detail: "1000g of tomato",
    quantity: 1,
    price: "34",
  },
  {
    image: "pineapple.png",
    name: "Pineapple",
    detail: "500g of Pineapple",
    quantity: 1,
    price: "55",
  },
];

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <BrowserRouter>
      <NavBar orders={orders} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="products"
          element={
            <Product
              products={products}
              orders={orders}
              setOrders={setOrders}
            />
          }
        />
        <Route
          path="cart"
          element={<Cart orders={orders} setOrders={setOrders} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
