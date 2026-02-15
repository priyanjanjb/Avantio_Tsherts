import React, { useState, useRef, useEffect } from "react";
import arrow from "../assets/icons/right.png";
import shirt1 from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";
// ... import other shirts as before

function Selection() {
  const shirts = Array.from({ length: 16 }, (_, i) => i + 1); // 16 shirts
  const radius = 660;

  const shirtImages = [
    shirt1, shirt1, shirt1, shirt1,
    shirt1, shirt1, shirt1, shirt1,
    shirt1, shirt1, shirt1, shirt1,
    shirt1, shirt1, shirt1, shirt1,
  ];

  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);

  // Mouse events
  const handleMouseDown = (e: { clientX: number }) => {
    dragging.current = true;
    lastX.current = e.clientX;
    velocity.current = 0;
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleMouseMove = (e: { clientX: number }) => {
    if (!dragging.current) return;
    const delta = e.clientX - lastX.current;
    const rotationSpeed = 0.01;
    setRotation((r) => r + delta * rotationSpeed);
    velocity.current = delta * rotationSpeed;
    lastX.current = e.clientX;
  };

  // Inertia + auto-align
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      // Spin inertia
      if (!dragging.current && Math.abs(velocity.current) > 0.0001) {
        setRotation((r) => r + velocity.current);
        velocity.current *= 0.95;
      }

      // Snap to nearest shirt when stopped
      if (!dragging.current && Math.abs(velocity.current) <= 0.0001) {
        const anglePerShirt = (2 * Math.PI) / shirts.length;
        const nearestIndex = Math.round(-rotation / anglePerShirt);
        const targetRotation = -nearestIndex * anglePerShirt;

        // Smoothly rotate to align top shirt
        setRotation((r) => r + (targetRotation - r) * 0.1);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [rotation, shirts.length]);

  return (
    <div
      className="h-[450px] flex flex-col items-center justify-center overflow-hidden select-none "
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Wheel */}
      <div className="relative w-full h-96 flex justify-center items-center">
        {shirts.map((id, i) => {
          const angle = (i / shirts.length) * 2 * Math.PI + rotation;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius + 530;

          const scale = 1.2 - 0.3 * Math.abs(Math.sin(angle));
          const zIndex = Math.round(100 - Math.abs(Math.sin(angle)) * 100);

          return (
            <div
              key={id}
              className="absolute transition-all duration-300"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                zIndex,
              }}
            >
              <img
                src={shirtImages[i]}
                alt={`Shirt ${id}`}
                className="w-[240px] h-[260px] object-contain cursor-grab"
                onMouseDown={handleMouseDown}
              />
            </div>
          );
        })}
      </div>

      {/* Arrow */}
      <p className="mt-[-200px] text-gray-600 flex flex-col items-center">
        <img
          src={arrow}
          alt="Arrow"
          className="w-12 h-12 mb-2 rotate-[-90]"
        />
        <span className="text-2xl font-semibold">SCROLL TO DISCOVER</span>
      </p>
    </div>
  );
}

export default Selection;
