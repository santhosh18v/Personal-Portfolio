"use client";

import { useEffect, useRef } from "react";

/** Optional dust; the image and semantic scene never depend on WebGL. */
export default function WorldAtmosphere() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const preference = window.matchMedia(
      "(min-width: 801px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let generation = 0;
    let observer: IntersectionObserver | undefined;
    let cleanup: (() => void) | undefined;

    const update = () => {
      const current = ++generation;
      observer?.disconnect();
      cleanup?.();
      cleanup = undefined;
      if (!preference.matches) return;

      observer = new IntersectionObserver(
        async (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer?.disconnect();
          try {
            const T = await import("three");
            if (generation !== current) return;
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("webgl2", {
              alpha: true,
              antialias: false,
              powerPreference: "low-power",
            });
            if (!context) return;

            const renderer = new T.WebGLRenderer({
              canvas,
              context,
              alpha: true,
              antialias: false,
              powerPreference: "low-power",
            });
            const geometry = new T.BufferGeometry();
            const material = new T.PointsMaterial({
              color: 0xe2b678,
              size: 0.025,
              transparent: true,
              opacity: 0.4,
              depthWrite: false,
            });
            let frame = 0;
            let visible = false;
            let lost = false;
            const observers: {
              visibility?: IntersectionObserver;
              resize?: ResizeObserver;
            } = {};

            const dispose = () => {
              if (lost) return;
              lost = true;
              cancelAnimationFrame(frame);
              observers.visibility?.disconnect();
              observers.resize?.disconnect();
              document.removeEventListener("visibilitychange", start);
              canvas.removeEventListener("webglcontextlost", onLost);
              geometry.dispose();
              material.dispose();
              renderer.dispose();
              canvas.remove();
            };
            cleanup = dispose;

            const scene = new T.Scene();
            const camera = new T.PerspectiveCamera(50, 1, 0.1, 100);
            camera.position.z = 8;
            const positions = new Float32Array(150 * 3);
            for (let i = 0; i < 150; i++) {
              positions[i * 3] = Math.sin(i * 137.3) * 16;
              positions[i * 3 + 1] = Math.cos(i * 91.1) * 9;
              positions[i * 3 + 2] = Math.sin(i * 53.8) * 6;
            }
            geometry.setAttribute(
              "position",
              new T.BufferAttribute(positions, 3),
            );
            const dust = new T.Points(geometry, material);
            scene.add(dust);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
            renderer.setClearColor(0x000000, 0);
            root.appendChild(canvas);

            function render(time: number) {
              if (lost || generation !== current || !visible || document.hidden)
                return;
              dust.rotation.z = time * 0.000007;
              renderer.render(scene, camera);
              frame = requestAnimationFrame(render);
            }
            function start() {
              cancelAnimationFrame(frame);
              if (!lost && visible && !document.hidden)
                frame = requestAnimationFrame(render);
            }
            function onLost(event: Event) {
              event.preventDefault();
              // No restart loop after context loss: retain the complete still scene.
              dispose();
            }

            observers.visibility = new IntersectionObserver(([entry]) => {
              visible = entry.isIntersecting;
              start();
            });
            observers.resize = new ResizeObserver(([entry]) => {
              const { width, height } = entry.contentRect;
              if (!width || !height || lost) return;
              camera.aspect = width / height;
              camera.updateProjectionMatrix();
              renderer.setSize(width, height);
              start();
            });
            observers.visibility.observe(root);
            observers.resize.observe(root);
            document.addEventListener("visibilitychange", start);
            canvas.addEventListener("webglcontextlost", onLost);
          } catch {
            if (generation === current) {
              cleanup?.();
              cleanup = undefined;
            }
          }
        },
        { rootMargin: "200px" },
      );
      observer.observe(root);
    };

    update();
    preference.addEventListener("change", update);
    return () => {
      generation++;
      observer?.disconnect();
      preference.removeEventListener("change", update);
      cleanup?.();
    };
  }, []);

  return (
    <div className="world-atmosphere" ref={container} aria-hidden="true" />
  );
}
