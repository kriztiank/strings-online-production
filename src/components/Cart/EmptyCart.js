import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <section style={{ textAlign: 'center' }} className='section'>
      <h2>tom kurv... </h2>
      <div className="underline"></div>
      <Link to='/products' className='btn btn-primary'>
        fyld den
      </Link>
    </section>
  );
}
