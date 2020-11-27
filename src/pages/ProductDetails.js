import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import StarRating from '../components/Ratings/StarRating';

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);

  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      brand_image,
      title,
      description_long,
      price,
      stock,
    } = product;

    return (
      <section className='section single-product'>
        {/* griditem 1 */}
        <img src={url} alt={title} className='single-product-image' />

        {/* griditem 2 */}
        <article>
          <h2>{title}</h2>
          <p>{description_long}</p>
        </article>

        {/* griditem 3 */}
        <article>
          <img
            src={brand_image.name}
            alt={title}
            className='single-product-image'
          />
          <p className='single-product-price'>Pris: DKK {price} </p>
          <p>{stock}+ på lager</p>
          <button
            className='btn btn-secondary'
            onClick={() => {
              addToCart(product);
              history.push('/cart');
            }}
          >
            Læg i kurv
          </button>
          {/* if there is a user */}
          {user.token && <StarRating />}
        </article>
      </section>
    );
  }
}
