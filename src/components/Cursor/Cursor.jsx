import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

export default function Cursor({ color }) {
  let cursor = useRef();
  let [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });
  let [isHover, setIsHover] = useState(false);

  let cursorVariants = {
    default: {
      y: positionCursor.y - 20,
      x: positionCursor.x - 20,
      width: "40px",
      height: "40px",
      borderColor: color,
      backgroundColor: "transparent",
      mixBlendMode: "normal",
    },
    hover: {
      y: positionCursor.y - 20,
      x: positionCursor.x - 20,
      width: "85px",
      height: "85px",
      borderColor: color,
      backgroundColor: color,
      mixBlendMode: "difference",
    },
  };

  let handlerMouseMove = (e) => {
    setPositionCursor({
      x: e.clientX,
      y: e.clientY,
    });
    if (e.target.getAttribute("data-hover") === "true") {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlerMouseMove);

    return () => {
      window.removeEventListener("mousemove", handlerMouseMove);
    };
  });

  return (
    <>
      <motion.p
        variants={cursorVariants}
        animate={isHover ? "hover" : "default"}
        ref={cursor}
        className="custom_cursor"
      ></motion.p>
    </>
  );
}
