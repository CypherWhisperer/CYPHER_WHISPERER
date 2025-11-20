import './LogoCarousel.css'

// Assets -- sure there is a more dynamic and better way to do this
import cssLogo    from '../assets/icons/css3-alt.svg' 
import htmlLogo   from '../assets/icons/html5.svg'
import jsLogo     from '../assets/icons/square-js.svg'
import reactLogo  from '../assets/icons/react.svg'
import npmLogo    from '../assets/icons/npm.svg'
import nodeLogo   from '../assets/icons/node.svg'
import gitLogo    from '../assets/icons/square-git.svg'
import githubLogo from '../assets/icons/square-github.svg'
import pythonLogo from '../assets/icons/python.svg'
import rustLogo   from '../assets/icons/rust.svg'
import dockerLogo from '../assets/icons/docker.svg'
import linuxLogo  from '../assets/icons/linux.svg'

// Components 
import Slider from 'react-infinite-logo-slider'

export default function LogoCarousel(){
  return (
    <div className="carousel-container">
      <Slider
          width="60px"
          duration={40} 
          pauseOnHover={true} 
          blurBorders={true} 
          blurBorderColor={"yellow"} 
      >
      
      {/* Slider Elements ... */}
        
        <Slider.Slide>
          <img src={htmlLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>
            
        <Slider.Slide>
          <img src={jsLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={cssLogo} alt="technology-logo" className="stack-logo" style={{
              width:'36px',
              height: '36px',
              padding: '0',
              margin: '0.2rem'
          }}/> 
        </Slider.Slide>

        <Slider.Slide>
          <img src={reactLogo} alt="technology-logo" className="stack-logo" style={{
              width:'36px',
              height: '36px',
              padding: '0',
              margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={npmLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={nodeLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={gitLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={githubLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={pythonLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
          </Slider.Slide>

        <Slider.Slide>
          <img src={rustLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={dockerLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
            height: '36px',
            padding: '0',
            margin: '0.2rem'
          }}/>
        </Slider.Slide>

        <Slider.Slide>
          <img src={linuxLogo} alt="technology-logo" className="stack-logo" style={{
            width:'36px',
              height: '36px',
              padding: '0',
              margin: '0.2rem'
        }}/>
        </Slider.Slide> 

      </Slider>
    </div>
  )
}
