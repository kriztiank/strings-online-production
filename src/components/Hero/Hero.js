import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import HeroHeader from '../../assets/hero.jpg';
import './hero.scss';

function Hero() {
  return (
    <section className='Hero section'>
      <div className='outherGrid'>
        <Sidebar />
        <div>
          {/* heroheader */}
          <div className='heroGrid'>
            <img src={HeroHeader} alt='heroheader' className='heroImg' />
            <div className='heroGridItemRight'>
              <div>
                <h2 className='fontWeightLight fontSize3'>
                  Martin <span className='fontWeightBold'>GPC-11E</span>
                </h2>
                <h3 className='fontWeightExtraLight fontSize2 colorgrey'>
                  SERIES ELECTRO ACOUSTIC
                </h3>
              </div>
              <div className='marginTopAndBottom'>
                <h3 className='fontSize3 greyBorders'>
                  SE DEN NYE GENERATION HALVACOUSTISKE
                </h3>
              </div>
              <p>LÆS MERE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
