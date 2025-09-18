// import { useCallback } from "react";
// import { loadSlim } from "tsparticles-slim";
// import Particles from "react-tsparticles";

// const ParticlesComponent = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         particles: {
//           number: {
//             value: 80,
//             max: 100,
//             density: { enable: true, value_area: 800 },
//           },
//           color: { value: "#ffffff" },
//           shape: {
//             type: "circle",
//             stroke: { width: 0.5, color: "blue" },
//             polygon: { nb_sides: 5 },
//           },
//           opacity: {
//             value: 0.3,
//             anim: { enable: false },
//           },
//           size: {
//             value: 2,
//             random: true,
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//             opacity: 0.3,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 4,
//             direction: "none",
//             outModes: { default: "out" },
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 200, duration: 0.4 },
//             push: { quantity: 4 },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticlesComponent;

import "../styles/InteractiveGrid.css";
import React, { useEffect, useRef } from "react";

const InteractiveGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const grid = gridRef.current;
      if (!grid) return;

      const gridItems = grid.querySelectorAll(".grid-item");
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gridItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mouseX - itemX, 2) + Math.pow(mouseY - itemY, 2)
        );

        const intensity = Math.max(0, 1 - distance / 300);
        item.style.transform = `scale(${1 + intensity * 0.2})`;
        item.style.opacity = 0.3 + intensity * 0.7;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={gridRef} className="interactive-grid">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="grid-item"></div>
      ))}
    </div>
  );
};

export default InteractiveGrid;
