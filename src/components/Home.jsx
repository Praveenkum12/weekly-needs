import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home-container">
      <div className="hero-content">
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>Weekly Needs</em> with our easy to use
          app, and get your products delivered straight to your doorstep.
        </p>
        <Link to="products" className="shopping-btn">
          Start shopping
        </Link>
      </div>
      <div className="home-img-box">
        <img src="home-img.jpg" alt="orange and books" className="home-img" />
      </div>
    </div>
  );
}

export default Home;
