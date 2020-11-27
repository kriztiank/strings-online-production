import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <section className='Sidebar section'>
      <details className='produkter'>
        <summary>Produkter</summary>
        <Link to='/elguitar'>
          <p>Elguitarer</p>
        </Link>
        <Link to='/westernguitar'>
          <p>Westernguitarer</p>
        </Link>
        <Link to='/elbass'>
          <p>Elbasser</p>
        </Link>
        <Link to='/akubass'>
          <p>Akustiske basser</p>
        </Link>
      </details>
      <details className='brands'>
        <summary>Brands</summary>
        <Link to='#'>
          <p>Squier</p>
        </Link>
        <Link to='#'>
          <p>Cort</p>
        </Link>
        <Link to='#'>
          <p>Furch</p>
        </Link>
        <Link to='#'>
          <p>Epiphone</p>
        </Link>
        <Link to='#'>
          <p>Fender</p>
        </Link>
        <Link to='#'>
          <p>Gibson</p>
        </Link>
        <Link to='#'>
          <p>Martin</p>
        </Link>
        <Link to='#'>
          <p>Musicman</p>
        </Link>
        <Link to='#'>
          <p>Taylor</p>
        </Link>
        <Link to='#'>
          <p>Yamaha</p>
        </Link>
      </details>
    </section>
  );
};

export default Sidebar;
