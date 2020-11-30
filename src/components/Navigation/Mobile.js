import React from "react";
import { slide as Menu } from "react-burger-menu";
import { UserContext } from '../../context/user';
import { Link } from 'react-router-dom'
import LoginLink from '../LoginLink';
import Mail from '../../assets/mail-icon.png';
import Phone from '../../assets/phone-icon.png';
import './Navigation.scss'

export default props => {
  const { user } = React.useContext(UserContext);
  return (
    <Menu {...props}>
      <nav className="sidebar">
        <ul>
            <Link className="sideLink" to="/">Forside</Link>
            <Link className="sideLink" to="/terms">Salgs og handelsbetingelser</Link>
            <Link className="sideLink" to="/products">Søg</Link>
            <LoginLink />
            <br/>
            <br/>
            <p><img src={Mail} className="Mail" alt="mail-icon"/> <span>sales@stringsonline.com</span></p>
            <p><img src={Phone} className="Phone" alt="phone-icon"/> <span>+45 98 12 22 68</span></p>
        </ul>
        </nav>
    </Menu>
  );
};
