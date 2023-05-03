import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitText from "../../plugins/SplitText";
import fadeBg from "../../assets/images/fade.png";
import "./PreLoader.scss";

export default function PreLoader() {
  let [offLoader, setOffLoader] = useState(true);
  let preLoaderRef = useRef();
  let fadeRef = useRef();
  let greenBg = useRef();

  useEffect(() => {
    gsap.registerPlugin(SplitText);
    let tl = gsap.timeline();
    let splitTitle = new SplitText(preLoaderRef.current, { type: "chars" });
    tl.from(splitTitle.chars, {
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      y: 80,
      stagger: 0.016,
      ease: "Power4.easeOut",
      duration: 0.8,
      delay: 0.3,
    });
    tl.to(splitTitle.chars, {
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      y: -40,
      stagger: 0.016,
      ease: "Power4.easeOut",
      duration: 0.8,
      delay: 0.3,
    });
    tl.to(
      fadeRef.current,
      {
        top: "-50rem",
        duration: 1.5,
        ease: "Power4.easeOut",
      },
      "<0.1"
    );
    tl.to(
      greenBg.current,
      {
        backgroundColor: "#000",
        duration: 0.3,
      },
      "<0.43"
    );
    tl.to(document.body, {
      overflowY: "auto",
    });
  });

  return (
    <>
      <div ref={greenBg} className="col-12 greenBg">
        <p ref={preLoaderRef} className="preloader-title">
          the creative studio <span>in sports</span>{" "}
        </p>
        <img ref={fadeRef} className="fadeBg" src={fadeBg} alt={fadeBg} />
      </div>
    </>
  );
}
