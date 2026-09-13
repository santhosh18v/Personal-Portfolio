import SceneLabel from "@/components/SceneLabel";

export default function AboutScene() {
  return (
    <section
      className="about section-pad"
      id="about"
      tabIndex={-1}
      data-scene="02"
      aria-labelledby="about-title"
    >
      <SceneLabel name="The introduction" number="02" />
      <h2 id="about-title" className="display-title" data-mask>
        <span className="line-mask">
          <span>I BUILD SOFTWARE</span>
        </span>{" "}
        <span className="line-mask">
          <span>
            THAT <span className="amber">THINKS.</span>
          </span>
        </span>
      </h2>
      <div className="about-copy" data-reveal>
        <p>
          I&apos;m Santhosh Kumar Reddy, a software engineering student focused
          on full-stack development, artificial intelligence, and building
          practical systems from idea to implementation.
        </p>
        <p>
          My goal is to grow as a Software Engineer and move deeper into AI
          Engineering.
          <br />
          <span className="about-signature">Curiosity is where it starts.</span>
        </p>
      </div>
      <div className="about-bottom">
        <span>AN ENGINEER IN THE MAKING.</span>
        <span>ALWAYS A STUDENT.</span>
      </div>
    </section>
  );
}
