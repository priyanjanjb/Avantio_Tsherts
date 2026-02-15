import { useState, useRef, useEffect } from "react";
import arrow from "../assets/icons/right.png";
import shirt1 from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";
// ... import other shirts as before

function Selection() {
  const shirts = Array.from({ length: 16 }, (_, i) => i + 1); // 16 shirts
  const radius = 660;

  const shirtImages = Array(16).fill(shirt1); // simplified, all same for now

  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);

  // --- Start drag (mouse or touch) ---
  const startDrag = (clientX: number) => {
    dragging.current = true;
    lastX.current = clientX;
    velocity.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX);
  const handleTouchStart = (e: React.TouchEvent) =>
    startDrag(e.touches[0].clientX);

  // --- Move drag (mouse or touch) ---
  const moveDrag = (clientX: number) => {
    if (!dragging.current) return;
    const delta = clientX - lastX.current;
    const rotationSpeed = 0.01;
    setRotation((r) => r + delta * rotationSpeed);
    velocity.current = delta * rotationSpeed;
    lastX.current = clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    moveDrag(e.touches[0].clientX);

  // --- End drag ---
  const endDrag = () => {
    dragging.current = false;
  };

  const handleMouseUp = endDrag;
  const handleTouchEnd = endDrag;

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
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Wheel */}
      <div
        className="relative w-full h-96 flex justify-center items-center"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
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
