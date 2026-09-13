import { ArrowUpRight } from "lucide-react";
import SceneLabel from "@/components/SceneLabel";
import { education, certifications, learningAreas } from "@/data/education";
export default function EducationScene() {
  return (
    <section
      id="education"
      className="education section-pad"
      data-scene="06"
      aria-labelledby="education-title"
    >
      <SceneLabel name="Learning, always" number="06" />
      <h2 className="display-title" id="education-title" data-reveal>
        THE <span className="amber">FOUNDATION.</span>
      </h2>
      <div className="education-layout" data-reveal>
        <div className="degree">
          <p className="eyebrow">ACADEMIC EDUCATION</p>
          <h3>{education.degree}</h3>
          <p className={!education.college ? "content-pending" : ""}>
            {education.college ?? "[ Add college name ]"}
          </p>
          <dl>
            <div>
              <dt>Graduation</dt>
              <dd className={!education.graduation ? "content-pending" : ""}>
                {education.graduation ?? "[ Add year ]"}
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{education.location}</dd>
            </div>
          </dl>
        </div>
        <div className="learning">
          <p className="eyebrow">CERTIFICATIONS & LEARNING</p>
          <h3>
            Curiosity doesn&apos;t
            <br />
            end at the classroom.
          </h3>
          <div className="learning-areas">
            {learningAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          {certifications.length ? (
            <ul className="certification-list">
              {certifications.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a
                      className="certification-entry"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <span className="certification-name">{c.name}</span>
                        <span className="certification-issuer">{c.issuer}</span>
                      </span>
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="certification-entry">
                      <span>
                        <span className="certification-name">{c.name}</span>
                        <span className="certification-issuer">{c.issuer}</span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="content-pending certification-pending">
              Certification details to be added.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
