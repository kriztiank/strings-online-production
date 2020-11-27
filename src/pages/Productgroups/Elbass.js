import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { UserContext } from '../../context/user';
import StarRating from '../../components/Ratings/StarRating';
// import './orders.scss';

// Define the query
const PRODUCTS = gql`
  query products2 {
    products(sort: "title:asc", where: { category: "Elbasser" }) {
      image {
        name
      }
      brand_image {
        name
      }
      id
      title
      description_long
      price
      stock
    }
  }
`;
// ProductList
function ProductList() {
  // Invoke useQuery hook to retrieve products and call ProductItem
  const { loading, data, error } = useQuery(PRODUCTS);

  if (loading) return <div className='loading'></div>;
  if (error) return <p className='error-page'>Error loading!</p>;

  return data.products.map((product) => (
    // pass data to ProductItem
    <ProductItem
      key={product.id}
      product={{
        ...product,
      }}
    />
  ));
}

// ProductItem
// has access to ...product
function ProductItem({ product }) {
  const { user } = React.useContext(UserContext);
  const { image, title, description_long, price, stock, brand_image } = product;
  // data from GraphQL server goes here
  return (
    <section className='section single-product'>
      {/* griditem 1 */}
      <img src={image.name} alt={title} className='single-product-image' />
      {/* griditem 2 */}
      <article>
        <h3>{title}</h3>
        <p>{description_long}</p>
      </article>
      {/* griditem 3 */}
      <article>
        <img
          src={brand_image.name}
          alt={title}
          className='single-product-image'
        />
        <p className='single-product-price'>Pris: DKK {price}</p>
        <p>{stock}+ på lager</p>
        {/* if there is a user */}
        {user.token && <StarRating />}
      </article>
    </section>
  );
}

// Elbass - display
export default function Elbass() {
  return (
    <>
      <section className='Elbass section'>
        <ProductList />
      </section>
    </>
  );
}
