import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
import './Navigation.scss'
import Mail from '../../assets/mail-icon.png';
import Phone from '../../assets/phone-icon.png';


export default props => {
  return (
    <Menu {...props}>
      <nav className="sidebar">
        <ul>
            <Link className="sideLink" to="/">Forside</Link>
            <Link className="sideLink" to="/terms">Salgs og handelsbetingelser</Link>
            <Link className="sideLink" to="/login">Login</Link>
            <Link className="sideLink" to="/products">Søg</Link>
            <br/>
            <p><img src={Mail} className="Mail" alt="mail-icon"/> <span>sales@stringsonline.com</span></p>
            <p><img src={Phone} className="Phone" alt="phone-icon"/> <span>+45 98 12 22 68</span></p>
        </ul>
        </nav>
    </Menu>
  );
};
