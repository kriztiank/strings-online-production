import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';
export default function Filters() {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = useContext(ProductContext);
  return (
    <section className='section filters-section'>
      <h1 className='section-title'>Søg produkter</h1>
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
              <option value='all' className='greenColor'>Producent</option>
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
        <div className='price-group'>
          <p>pris</p>
          <label>
            <input
              type='radio'
              name='price'
              id='all'
              value='all'
              checked={price === 'all'}
              onChange={updateFilters}
            />
            alle
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='0'
              checked={price === 0}
              onChange={updateFilters}
            />
            0 - 300
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='300'
              checked={price === 300}
              onChange={updateFilters}
            />
            300 - 650
          </label>
          <label>
            <input
              type='radio'
              name='price'
              value='650'
              checked={price === 650}
              onChange={updateFilters}
            />
            Over 650
          </label>
        </div>
        {/* end of price */}
      </form>
      <h6>Produkter på lager: {sorted.flat().length} </h6>
      <hr />
    </section>
  );
}
