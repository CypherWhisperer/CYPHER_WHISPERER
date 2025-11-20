import './MainContent.css'

// Components
import Main from './Main.jsx'
import Verse from './Verse.jsx'

export default function MainContent(){
  return(
    <>
      <main className="main-content">
        <Main />
        <Verse />
      </main> 
    </>
  )
}
