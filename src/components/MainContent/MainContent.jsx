import styles from './MainContent.module.scss';

// Components
import { 
  Main,
  // Verse
 } from '../../components'

export default function MainContent(){
  return(
    <main className={styles.main_content}>
        <Main />
        {/* <Verse /> */}
    </main> 
  )
}
