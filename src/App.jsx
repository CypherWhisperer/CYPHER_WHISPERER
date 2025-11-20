import styles from './App.module.scss'

// Components 
import { Nav, MainContent, Footer } from './components'

function App() {
  return (
    <main className={styles.app_container}>
      <Nav />
      <MainContent />
      <Footer />
    </main>
  )
}

export default App
