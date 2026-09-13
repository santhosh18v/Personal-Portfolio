import SceneLabel from "@/components/SceneLabel";

export default function PhilosophyScene() {
  return (
    <section
      id="philosophy"
      className="philosophy section-pad"
      data-scene="07"
      aria-labelledby="philosophy-title"
    >
      <SceneLabel name="A simple belief" number="07" />
      <div className="philosophy-content">
        <p className="philosophy-prefix">I DON&apos;T JUST WRITE CODE.</p>
        <h2 id="philosophy-title">
          I BUILD
          <br />
          <span className="amber">SYSTEMS.</span>
        </h2>
        <p className="philosophy-quote">
          Software becomes meaningful
          <br />
          when it solves a real problem.
        </p>
        <div className="philosophy-themes">
          <span>Software Engineering</span>
          <span>Artificial Intelligence</span>
          <span>Problem Solving</span>
          <span>Continuous Learning</span>
        </div>
      </div>
    </section>
  );
}
