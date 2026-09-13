import SceneLabel from "@/components/SceneLabel";
import { journey } from "@/data/journey";

const desktopCurve = "M -80 325 C 300 60 650 70 1270 300";
const mobileCurve =
  "M 24 0 C 2 165 46 250 24 330 S 2 500 24 660 S 46 830 24 1000";

export default function JourneyScene() {
  return (
    <section
      id="journey"
      className="journey section-pad"
      data-scene="05"
      aria-labelledby="journey-title"
    >
      <SceneLabel name="Always moving forward" number="05" />
      <h2 id="journey-title" className="display-title" data-reveal>
        A JOURNEY
        <br />
        <span className="amber">THROUGH CODE.</span>
      </h2>
      <div className="timeline-stage">
        <svg
          className="timeline-path"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d={desktopCurve}
            stroke="#765438"
            strokeOpacity=".3"
            strokeWidth="1.6"
          />
          <path
            className="timeline-draw"
            pathLength="1"
            d={desktopCurve}
            stroke="url(#timeline-light)"
            strokeWidth="1.6"
          />
          <defs>
            <linearGradient id="timeline-light">
              <stop stopColor="#765438" />
              <stop offset=".55" stopColor="#e0b885" />
              <stop offset="1" stopColor="#765438" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="timeline-path-mobile"
          viewBox="0 0 48 1000"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d={mobileCurve}
            stroke="#765438"
            strokeOpacity=".3"
            strokeWidth="1.2"
          />
          <path
            className="timeline-draw"
            pathLength="1"
            d={mobileCurve}
            stroke="#c59a66"
            strokeWidth="1.2"
          />
        </svg>
        <ol className="timeline-chapters">
          {journey.map((chapter, i) => (
            <li key={chapter.year} className={`journey-chapter chapter-${i}`}>
              <span className="timeline-year">{chapter.year}</span>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="journey-detail">
                <span className="eyebrow">CHAPTER {chapter.chapter}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <ul>
                  {chapter.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="journey-afterword">
        The path is still unfolding.
        <span>Next chapter: building with a great team.</span>
      </p>
    </section>
  );
}
