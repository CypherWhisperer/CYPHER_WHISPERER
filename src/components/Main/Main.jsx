import styles from './Main.module.scss'

// Components
import { LogoCarousel, MyTypewritter } from '../../components';

export default function Main() {
  return(
    <>
      <article className={styles.main_attraction}>
        <div className={styles.bio}>
          Welcome to my portfolio page. I am 
          <span> <h2> Cypher Whisperer </h2></span>
        </div>
        <MyTypewritter />
        <LogoCarousel />
      </article>
    </>
  )
}
