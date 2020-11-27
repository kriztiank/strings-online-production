import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ id, image, title, description }) {
// console.log("🚀 ~ file: Product.js ~ line 5 ~ Product ~ id", id)

  return (
    <article className='card-item'>
      <div className='img-container'>
        <img src={image.url} alt={title} className='photo' />
      </div>

      <div className='item-info'>
        <header>
          <h4>{title}</h4>
        </header>
        <p className='item-text'>{description}</p>
        <Link to={`products/${id}`} className='price'>
          <p> læs mere</p>
        </Link>
      </div>
    </article>
  );
}
