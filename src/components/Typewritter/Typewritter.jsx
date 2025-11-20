import Typewriter from "typewriter-effect";
import styles from './Typewritter.module.scss'

export default function MyTypewriter() {
  return (
    <h1 className="text-3xl font-bold">
      {" "}
      <span className="typewriter-text">
        <Typewriter
          className={styles.typewritter}
          options={{
            strings: [
              "Web/App Developer  ",
              "Web/App Designer  ",
              "Front End Developer  ",
              "Full Stack Developer  ",
              "Linux System Admin  ",
              "DevOps Student   ",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </h1>
  );
}
