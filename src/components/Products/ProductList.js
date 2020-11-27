import React from 'react';
import Product from './Product';

// list to be rendered in Product component
export default function ProductList({ title, products }) {
  return (
    <div className="Products section-small">
      <h2 className="section-title">{title}</h2>
      <div className="spacer"></div>
      <section className='section-center-cards'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
}
