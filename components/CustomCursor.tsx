"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x - 6, y: position.y - 6 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)]"
    />
  );
}