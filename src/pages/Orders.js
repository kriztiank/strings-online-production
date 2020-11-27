import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './orders.scss';
// Define the query
const ORDERS = gql`
  query orders {
    orders {
      id
      name
      # created_at
      total
      items
    }
  }
`;
// OrderList
function OrderList() {
  // Invoke useQuery hook to retrieve orders and call OrderItem
  const { loading, data, error } = useQuery(ORDERS);

  if (loading) return <p>Loading orders..</p>;
  if (error) return <p>Error loading orders!</p>;

  return data.orders.map((order) => (
    // pass data to OrderItem
    <OrderItem
      key={order.id}
      order={{
        ...order,
      }}
    />
  ));
}
// OrderItem
// has access to ...order
function OrderItem({ order }) {
  const { id, name, total, items } = order;
  // data from GraphQL server goes here
  return (
    <section className='Orders section'>
      <article key={id}>
        <h3>{name}</h3>
        {/* ARRAY with cart items */}
        {items.map((item) => (
          <span key={item.id}>
            <p>{item.title}</p>
            <img
              src={item.image}
              alt={item.title}
              className='single-product-image'
            />
            <p>Antal: {item.amount}</p>
            <p>Pris: DKK {item.price}</p>
          </span>
        ))}
        <p>Total: DKK {total}</p>
      </article>
    </section>
  );
}
// Orders - display
export default function Orders() {
  return (
    <>
      <section className='section'>
        <OrderList />
      </section>
    </>
  );
}
