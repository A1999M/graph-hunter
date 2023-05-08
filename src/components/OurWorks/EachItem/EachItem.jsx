import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./EachItem.scss";

export default function EachItem({ title, desc, imageSrc, bgColor }) {
  let [overLay, setOverLay] = useState(true);

  let imageWrapper = useRef();
  let imageRef = useRef();
  let titleWorkRef = useRef();
  let greenTitle = useRef();
  let overlay = useRef();

  //   start hover effect
  let handlerHover = () => {
    let tl = gsap.timeline();
    tl.to(imageRef.current, {
      filter: "grayscale(1)",
      scale: 1.05,
      duration: 0.6,
      ease: "Power2.easeOut",
    });
    tl.to(
      imageWrapper.current,
      {
        borderRadius: "50%",
        duration: 0.4,
        ease: "Power2.easeOut",
      },
      "="
    );
    tl.to(
      titleWorkRef.current,
      {
        y: -40,
        duration: 0.3,
        ease: "Power3.easeOut",
      },
      "<0"
    );
    tl.to(
      greenTitle.current,
      {
        y: "-2rem",
        duration: 0.3,
        ease: "Power3.easeOut",
      },
      "<0"
    );
  };

  //   emd hover effect
  let handlerMouseLeave = () => {
    let tl = gsap.timeline();
    tl.to(imageRef.current, {
      filter: "grayscale(0)",
      scale: 1,
      duration: 0.5,
      ease: "Power3.easeOut",
    });
    tl.to(
      imageWrapper.current,
      {
        borderRadius: "0%",
        duration: 0.4,
        ease: "Power2.easeOut",
      },
      "="
    );
    tl.to(
      titleWorkRef.current,
      {
        y: 0,
        duration: 0.3,
        ease: "Power3.easeOut",
      },
      "<0"
    );
    tl.to(
      greenTitle.current,
      {
        y: "2rem",
        duration: 0.3,
        ease: "Power3.easeOut",
      },
      "<0"
    );
  };

  let hiddenOverlay = () => {
    let tl = gsap.timeline();

    tl.fromTo(
      overlay.current,
      { clipPath: "inset(0% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1,
        ease: "Power4.easeOut",
      }
    );
    tl.fromTo(
      imageRef.current,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 1.3,
        ease: "Power2.easeOut",
      },
      "<0"
    );
    setOverLay(false);
  };

  return (
    <>
      <motion.div
        onMouseEnter={handlerHover}
        onMouseLeave={handlerMouseLeave}
        onViewportEnter={overLay ? hiddenOverlay : null}
        viewport={{ amount: 0.6, once: true }}
        className="wrapper-all mb-5"
      >
        <div ref={imageWrapper} className="wrapper-image">
          <div
            ref={overlay}
            style={{ backgroundColor: bgColor }}
            className="overlayBh"
          ></div>
          <img
            className="image-work"
            ref={imageRef}
            src={imageSrc}
            alt={imageSrc}
          />
        </div>
        <div className="wrapper-texts">
          <div className="titles">
            <p className="titleWork" ref={titleWorkRef}>
              {title}
            </p>
            <p ref={greenTitle} className="greenTitle">
              {title}
            </p>
          </div>
          <p className="descWork">{desc}</p>
        </div>
      </motion.div>
    </>
  );
}
