import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

const FlameCursor = () => {
  const cursorPos = useRef({ x: 0, y: 0 });
  const flameElement = useRef(null);

  const updateFlamePosition = () => {
    if (flameElement.current) {
      flameElement.current.style.left = `${cursorPos.current.x}px`;
      flameElement.current.style.top = `${cursorPos.current.y}px`;
    }
  };

  const handleMouseMove = (event) => {
    cursorPos.current = { x: event.clientX, y: event.clientY };
    requestAnimationFrame(updateFlamePosition);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    >
      <Box
        ref={flameElement}
        sx={{
          position: "absolute",
          width: "40px",
          height: "40px",
          background: "radial-gradient(circle, orange, transparent)",
          borderRadius: "50%",
          boxShadow: "0 0 12px 4px orange",
          transform: "translate(-50%, -50%)",
          animation: "flame-flicker 1s infinite",
        }}
        style={{
          "@keyframes flame-flicker": {
            "0%": { boxShadow: "0 0 12px 2px orange" },
            "50%": { boxShadow: "0 0 12px 6px orange" },
            "100%": { boxShadow: "0 0 12px 2px orange" },
          },
        }}
      />
    </Box>
  );
};

export default FlameCursor;
