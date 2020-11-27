import React from 'react';
import FooterLogo from '../../assets/footer.png';
// import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <img src={FooterLogo} alt='logo' />
      </div>
    </footer>
  );
}

export default Footer;