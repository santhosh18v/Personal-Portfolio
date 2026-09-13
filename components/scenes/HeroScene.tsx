import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { socials } from "@/data/socials";

export default function HeroScene() {
  return (
    <section
      className="hero"
      id="home"
      data-scene="01"
      aria-labelledby="hero-title"
    >
      <div className="portrait-wrap">
        <Image
          src="/images/santhosh-suit.webp"
          alt="Santhosh in a black suit and white shirt, seated in a warmly lit office"
          fill
          preload
          sizes="(max-width: 800px) 100vw, 88vw"
        />
      </div>
      <div className="hero-content">
        <p className="eyebrow">Software Engineer · AI Developer</p>
        <h1 id="hero-title">
          <span className="line-mask hero-name">
            <span>SANTHOSH</span>
          </span>{" "}
          <small className="line-mask hero-surname">
            <span>KUMAR REDDY</span>
          </small>
        </h1>
        <p className="hero-description">
          Engineering software.
          <br />
          Building intelligent systems.
        </p>
        <div className="hero-actions">
          <a className="text-link" href="#work">
            Explore my work <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="hero-secondary"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="hero-side">SOFTWARE / FULL STACK / AI SYSTEMS</p>
      <div className="hero-foot">
        <a className="scroll-hint" href="#about">
          <ArrowDown aria-hidden="true" />
          <span>
            SCROLL TO EXPLORE
            <br />
            THE ENGINEERING UNIVERSE
          </span>
        </a>
        <div className="foot-right">
          <b>BASED IN INDIA</b>Ideas without boundaries.
        </div>
      </div>
    </section>
  );
}
