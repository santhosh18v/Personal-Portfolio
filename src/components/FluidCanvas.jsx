import React, { useEffect, useRef } from 'react';
import webGLFluidSimulation from 'webgl-fluid';
import './FluidCanvas.css';

const FluidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const webglProbe = document.createElement('canvas');
    const supportsWebGL = webglProbe.getContext('webgl2') || webglProbe.getContext('webgl');

    if (!supportsWebGL) return;

    try {
      webGLFluidSimulation(canvasRef.current, {
        IMMEDIATE: false, 
        TRIGGER: 'hover',
        DENSITY_DISSIPATION: 3,
        VELOCITY_DISSIPATION: 1.5,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 20,
        CURL: 15,
        SPLAT_RADIUS: 0.5,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: false,
        BLOOM: false,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 2.5,
        BLOOM_THRESHOLD: 0.3,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.5,
      });
    } catch {
      return;
    }

    const forwardEvent = (e) => {
      const clone = new MouseEvent(e.type, {
        clientX: e.clientX,
        clientY: e.clientY,
        movementX: e.movementX,
        movementY: e.movementY,
        bubbles: false,
        cancelable: false
      });
      canvas.dispatchEvent(clone);
    };

    const forwardTouchEvent = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const clone = new MouseEvent('mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY,
          bubbles: false,
        });
        canvas.dispatchEvent(clone);
      }
    };

    window.addEventListener('mousemove', forwardEvent);
    window.addEventListener('mousedown', forwardEvent);
    window.addEventListener('mouseup', forwardEvent);
    window.addEventListener('touchmove', forwardTouchEvent);

    return () => {
      window.removeEventListener('mousemove', forwardEvent);
      window.removeEventListener('mousedown', forwardEvent);
      window.removeEventListener('mouseup', forwardEvent);
      window.removeEventListener('touchmove', forwardTouchEvent);
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-canvas" />;
};

export default FluidCanvas;
