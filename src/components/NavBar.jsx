import { Link, NavLink } from "react-router-dom";

function NavBar({ orders }) {
  return (
    <nav className="nav">
      <div>
        <Link to="/" className="logo">
          <img
            src="weekly-logo.png"
            alt="weekly needs logo"
            className="logo-img"
          />
        </Link>
      </div>
      <div className="nav-list">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <Link to="/cart" className="cart">
          Cart (
          {orders.reduce(function (acc, curr) {
            return acc + curr.quantity;
          }, 0)}
          )
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
