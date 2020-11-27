import React from 'react';
import { UserContext } from '../../context/user';
import { Link } from 'react-router-dom';
import './Header.scss';
import Headerbg from '../../assets/header-bg.png';
import Mail from '../../assets/mail-icon.png';
import Phone from '../../assets/phone-icon.png';
import Cart from '../../assets/cart-icon.png';
import Home from '../../assets/home-icon.png';
import LoginLink from '../LoginLink';
import CartLink from '../../components/Cart/CartLink';

function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className='Header'>
      <section className='headerGrid'>
        <nav className='nav'>
          <img className='navImage' src={Headerbg} alt='header' />
          <section className='links'>
            <span>
              <Link to='/'>Forside</Link>
            </span>
            <span>
              <Link to='/terms'>Salgs og handelsbetingelser</Link>
            </span>
            <LoginLink />
          </section>
        </nav>

        <section className='search'>
          <section className='contact'>
            <img src={Mail} className='mail' alt='mail-icon' />
            <span>sales@stringsonline.com</span>
            <img src={Phone} className='phone' alt='phone-icon' />
            <span>+45 98 12 22 68</span>
          </section>
          <Link to='/cart'>
            <img src={Cart} className='cart' alt='cart-icon' />
            <CartLink />
          </Link>
          <Link to='/products'>
            <button className='btn btn-primary'>Søg</button>
          </Link>
        </section>
      </section>

      <section className='breadcrumbs'>
        <img src={Home} className='home' alt='home-icon' />
        <Link to='/'>Forside</Link>
        {/* if there is a user display orders link*/}
        {user.token && (
          <Link to='/orders'>
            <h2 className='historylink'>Ordrehistorik</h2>
          </Link>
        )}
      </section>
    </header>
  );
}

export default Header;
