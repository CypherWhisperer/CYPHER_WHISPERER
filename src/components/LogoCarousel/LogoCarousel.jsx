import styles from './LogoCarousel.module.scss';
import React from 'react';

// DATA
import { carouselLogos } from '../../assets/data';
// COMPONENTS
import Slider from 'react-infinite-logo-slider';

export default function LogoCarousel(){
  return (
    <div className={styles.carousel_container}>
      <Slider
          width="60px"
          duration={40} 
          pauseOnHover={true} 
          blurBorders={true} 
          blurBorderColor={"hsl(48, 10%, 10%)"} 
      >
      
        {/* Slider Elements ... */}

        {carouselLogos.map((logo) => {
          return(
            <Slider.Slide key={logo.id}>
              <div
                className={styles.stack_logo}
                style={{
                  width:'36px',
                  height: '36px',
                  padding: '0',
                  margin: '0.3rem'          
                }}
              > 
                  {React.createElement(logo.icon)}
              </div>
            </Slider.Slide>
          )
        })}      
      </Slider>
    </div>
  )
}
