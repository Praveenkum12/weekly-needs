function OrderList({ order }) {
  return (
    <ul className="order-list">
      <li>
        <img src={order.image} alt={order.image} height="30" />
        {order.name}
      </li>
      <li>{order.price}</li>
      <li>{order.quantity}</li>
      <li>Rs.{order.totalPrice} \-</li>
    </ul>
  );
}

export default OrderList;
