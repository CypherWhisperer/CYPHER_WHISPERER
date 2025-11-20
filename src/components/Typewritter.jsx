import Typewriter from "typewriter-effect";

export default function MyTypewriter() {
  return (
    <h1 className="text-3xl font-bold">
      {" "}
      <span className="typewriter-text">
        <Typewriter
          options={{
            strings: [
              "Web Developer ...",
              "Web Designer ...",
              "Front End Developer ...",
              "Full Stack Developer ...",
              "Linux System Admin ...",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </h1>
  );
}
