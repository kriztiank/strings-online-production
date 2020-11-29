import React from 'react';
import FooterLogo from '../../assets/footer.png';
// import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <img src={FooterLogo} alt='logo' />
    </footer>
  );
}

export default Footer;
