import { gsap } from "gsap";

/** Reveal once without hiding content already passed on a deep link or restore. */
export function reveal(
  trigger: Element,
  targets: gsap.TweenTarget,
  options: {
    mask?: boolean;
    duration?: number;
    stagger?: number;
    distance?: number;
  } = {},
) {
  if (trigger.getBoundingClientRect().bottom <= 0) return;

  return gsap.from(targets, {
    opacity: 0,
    y: options.mask ? undefined : (options.distance ?? 18),
    yPercent: options.mask ? 105 : undefined,
    duration: options.duration ?? 0.85,
    stagger: options.stagger ?? 0,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: { trigger, start: "top 92%", once: true },
  });
}
