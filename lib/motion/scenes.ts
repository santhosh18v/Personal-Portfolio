import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reveal } from "./reveal";
import { createProjectMotion } from "./projects";
import { createJourneyMotion } from "./journey";

export function createSceneMotion() {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  let disposed = false;

  media.add(
    {
      wide: "(min-width: 801px)",
      desktop: "(min-width: 801px) and (pointer: fine)",
      mobile: "(max-width: 800px), (pointer: coarse)",
      reduce: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      if (context.conditions?.reduce) return;
      const desktop = Boolean(context.conditions?.desktop);

      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          reveal(element, element, { distance: desktop ? 18 : 10 });
        });
      document
        .querySelectorAll<HTMLElement>("[data-mask]")
        .forEach((element) => {
          reveal(element, element.querySelectorAll(".line-mask > span"), {
            mask: true,
            stagger: 0.13,
            duration: 1.05,
          });
        });

      if (desktop && document.querySelector(".hero")) {
        gsap.to(".portrait-wrap img", {
          scale: 1.035,
          yPercent: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        gsap.fromTo(
          ".universe-image",
          { scale: 1.035, yPercent: -1 },
          {
            scale: 1.015,
            yPercent: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".universe-stage",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
        document
          .querySelectorAll<HTMLElement>("[data-depth]")
          .forEach((element, i) => {
            gsap.fromTo(
              element,
              { y: 12 + (i % 3) * 5 },
              {
                y: -12,
                ease: "none",
                scrollTrigger: {
                  trigger: ".universe-stage",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });
      }

      createProjectMotion(desktop);
      const cleanupJourney = createJourneyMotion(
        Boolean(context.conditions?.wide),
      );

      const philosophy = document.querySelector(".philosophy-content");
      if (philosophy)
        reveal(philosophy, philosophy.children, {
          duration: 1.25,
          stagger: 0.18,
          distance: 12,
        });

      const contact = document.querySelector(".contact-main");
      if (contact) {
        const closing = gsap.timeline({
          scrollTrigger: { trigger: contact, start: "top 88%", once: true },
        });
        closing
          .from("#contact-title .line-mask > span", {
            yPercent: 105,
            opacity: 0,
            duration: 1,
            stagger: 0.14,
            ease: "power3.out",
            clearProps: "transform,opacity",
          })
          .from(
            ".contact-aside",
            {
              y: 12,
              opacity: 0,
              duration: 0.8,
              clearProps: "transform,opacity",
            },
            "-=0.45",
          );
        const links = document.querySelector(".contact-links");
        if (links)
          reveal(links, links.children, { stagger: 0.1, distance: 10 });
      }

      document
        .querySelectorAll(".case-article > section")
        .forEach((section) => {
          reveal(section, section, { duration: 0.75, distance: 12 });
        });

      return cleanupJourney;
    },
  );

  const refresh = () => {
    if (!disposed) ScrollTrigger.refresh();
  };
  void document.fonts.ready.then(refresh);
  window.addEventListener("load", refresh);
  return () => {
    disposed = true;
    window.removeEventListener("load", refresh);
    media.revert();
  };
}
