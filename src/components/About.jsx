function About() {
  return (
    <div className="container about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>We started operations in 2023. We guarantee fresh produce. </p>
        <p>
          shopping on our app and we'll deliver the products right to your home.
        </p>
        <p>
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <div className="about-img-box">
        <img
          src="about-img.jpg"
          alt="vegetables in a carry bag"
          className="about-img"
        />
      </div>
    </div>
  );
}

export default About;
