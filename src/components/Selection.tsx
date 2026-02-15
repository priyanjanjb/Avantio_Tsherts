import { useState, useRef, useEffect } from "react";
import arrow from "../assets/icons/right.png";
import shirt1 from "../assets/tshers/Free Kids T-Shirt Mockup_03.png";

function Selection() {
  const shirts = Array.from({ length: 16 }, (_, i) => i + 1);
  const radius = 660;

  const shirtImages = Array(16).fill(shirt1);

  const [rotation, setRotation] = useState(0);
  const targetRotation = useRef(0);

  const dragging = useRef(false);
  const lastX = useRef(0);

  /* ======================
     Smooth animation loop
  ======================= */
  useEffect(() => {
    let frame: number;

    const animate = () => {
      setRotation((r) => r + (targetRotation.current - r) * 0.1);
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  /* ======================
     Drag movement
  ======================= */
  const moveDrag = (clientX: number) => {
    if (!dragging.current) return;

    const delta = clientX - lastX.current;
    const rotationSpeed = 0.005; // slow & smooth

    targetRotation.current += delta * rotationSpeed;
    lastX.current = clientX;
  };

  /* ======================
     Mouse handlers
  ======================= */
  const handleWindowMove = (e: MouseEvent) =>
    moveDrag(e.clientX);

  /* ======================
     Touch handlers
  ======================= */
  const handleTouchMove = (e: TouchEvent) =>
    moveDrag(e.touches[0].clientX);

  /* ======================
     End drag + snap to arrow
  ======================= */
  const endDrag = () => {
    dragging.current = false;

    // Snap shirt to arrow
    const anglePerShirt = (2 * Math.PI) / shirts.length;
    const nearestIndex = Math.round(
      -targetRotation.current / anglePerShirt
    );

    targetRotation.current =
      -nearestIndex * anglePerShirt;

    window.removeEventListener("mousemove", handleWindowMove);
    window.removeEventListener("mouseup", endDrag);

    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", endDrag);
  };

  /* ======================
     Start drag
  ======================= */
  const startDrag = (clientX: number) => {
    dragging.current = true;
    lastX.current = clientX;

    window.addEventListener("mousemove", handleWindowMove);
    window.addEventListener("mouseup", endDrag);

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", endDrag);
  };

  const handleMouseDown = (e: React.MouseEvent) =>
    startDrag(e.clientX);

  const handleTouchStart = (e: React.TouchEvent) =>
    startDrag(e.touches[0].clientX);

  return (
    <div className="h-[450px] flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Wheel */}
      <div
        className="relative w-full h-96 flex justify-center items-center"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {shirts.map((id, i) => {
          const angle =
            (i / shirts.length) * 2 * Math.PI + rotation;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius + 530;

          const scale =
            1.2 - 0.3 * Math.abs(Math.sin(angle));

          const zIndex = Math.round(
            100 - Math.abs(Math.sin(angle)) * 100
          );

          return (
            <div
              key={id}
              className="absolute"
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
        <span className="text-2xl font-semibold">
          DRAG LEFT OR RIGHT
        </span>
      </p>
    </div>
  );
}

export default Selection;
