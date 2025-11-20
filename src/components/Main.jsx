import './Main.css'

// Components
import MyTypewriter from './Typewritter.jsx'
import LogoCarousel from './LogoCarousel.jsx'

export default function Main() {
  return(
    <>
      <div className="main-attraction">
        <h2> Cypher Whisperer </h2>
        <MyTypewriter />
        <LogoCarousel />
      </div>
    </>
  )
}
