import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';

export default function Filters() {
  const {
    filters: { search, category, shipping },
    updateFilters,
    sorted,
  } = useContext(ProductContext);
  return (
    <section className='section filters-section'>
      <form className='filters-form'>
        <div>
          {/* search input */}
          <div className='form-group'>
            <input
              placeholder='Indtast søgeord'
              type='text'
              name='search'
              className='form-control'
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/* select category */}
          <div className='form-group'>
            <select
              name='category'
              className='form-control'
              value={category}
              onChange={updateFilters}
            >
              <option value='all'>Alle</option>
              <option value='Elguitarer'>Elguitarer</option>
              <option value='Westernguitarer'>Westernguitarer</option>
              <option value='Elbasser'>Elbasser</option>
              <option value='Akustiske basser'>Akustiske basser</option>
            </select>
          </div>
          {/* end of category */}
          {/* free shipping */}
          <div className='form-group'>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor='shipping'>gratis fragt</label>
          </div>
          {/* end of free shipping */}
        </div>
        {/* price */}

        {/* end of price */}
      </form>
      <h6>På lager: +{sorted.flat().length} </h6>
      <hr />
    </section>
  );
}
