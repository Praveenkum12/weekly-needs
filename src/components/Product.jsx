import List from "./List";

function Product({ products, orders, setOrders }) {
  return (
    <div className="container product-container">
      <div>
        <h1>Products</h1>
        <p className="product-para">Take a look at our products</p>
      </div>

      <ul className="product-list">
        {products.map((product) => (
          <List
            product={product}
            key={product.name}
            setOrders={setOrders}
            orders={orders}
          />
        ))}
      </ul>
    </div>
  );
}

export default Product;
