import { useLayoutEffect, useRef, useContext } from "react";
import PreloaderContext from "../../context/Preloader";
import { gsap } from "gsap";
import SplitText from "../../plugins/SplitText";
import fadeBg from "../../assets/images/fade.png";
import { BubblyLink } from "react-bubbly-transitions";
import "./PreLoader.scss";

const MyBubblyLink = ({ to = "", text = "" }) => (
  <BubblyLink to={to} colorStart="#9bfa00" colorEnd="#e5e5e5">
    {text}
  </BubblyLink>
);

export default function PreLoader() {
  let [preLoader, setPreLoader] = useContext(PreloaderContext);

  let preLoaderRef = useRef();
  let fadeRef = useRef();
  let greenBg = useRef();
  let takeRef = useRef();
  let number16Ref = useRef();
  let lookRef = useRef();
  let number22Ref = useRef();
  let ourWorkRef = useRef();
  let logoRef = useRef();
  let descRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText);
    let tl = gsap.timeline();
    let splitTitle = new SplitText(preLoaderRef.current, { type: "chars" });

    if (preLoader) {
      tl.from(splitTitle.chars, {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 80,
        stagger: 0.016,
        ease: "Power4.easeOut",
        duration: 0.8,
        delay: 0.7,
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
          top: "-47rem",
          duration: 1,
          ease: "Power4.easeOut",
        },
        "<0.1"
      );
      tl.to(
        greenBg.current,
        {
          backgroundColor: "transparent",
          display: "none",
          visibility: "hidden",
          duration: 0.1,
          duration: 0.01,
        },
        "<0.43"
      );
      tl.to(
        document.body,
        {
          overflowY: "auto",
          duration: 0.001,
        },
        "<0"
      );
    } else {
      tl.to(
        document.body,
        {
          overflowY: "auto",
          duration: 0.001,
          delay: 0.7,
        },
        "<0"
      );
    }
    tl.to(
      greenBg.current,
      {
        display: "none",
        visibility: "hidden",
        duration: 0.1,
      },
      "<0"
    );
    // navbar animations
    tl.fromTo(
      document.getElementsByClassName(
        "react-bubbly-transitions__bubbly-link"
      )[0],
      { opacity: 0 },
      {
        opacity: 1,
        color: "#fff",
        duration: 0.4,
        ease: "Back.easeOut",
      },
      "<0.05"
    );
    tl.fromTo(
      document.getElementsByClassName(
        "react-bubbly-transitions__bubbly-link"
      )[1],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        color: "#fff",
        ease: "Power3.easeOut",
      },
      "<.05"
    );
    // // landing animations
    tl.to(
      logoRef.current,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.5,
        ease: "Power4.easeOut",
      },
      "<0"
    );
    tl.to(
      takeRef.current,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        y: 0,
        duration: 0.65,
        ease: "Power3.easeOut",
      },
      "<0.05"
    );
    tl.to(
      number16Ref.current,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 0.65,
        scale: 1,
        ease: "Power3.easeOut",
      },
      "<0"
    );
    tl.to(
      lookRef.current,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 0.65,
        scale: 1,
        ease: "Power3.easeOut",
      },
      "<0.1"
    );
    tl.to(
      number22Ref.current,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 0.65,
        scale: 1,
        ease: "Power3.easeOut",
      },
      "<0"
    );
    tl.to(
      ourWorkRef.current,
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: "Power3.easeOut",
      },
      "<0.1"
    );
    tl.to(
      descRef.current,
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.5,
        ease: "Power3.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.getElementById("my-scroller"),
      {
        height: "100vh",
        duration: 0.1,
      },
      "<0"
    );

    setTimeout(() => {
      setPreLoader(false);
    }, 4000);
  });

  return (
    <>
      {preLoader && (
        <div ref={greenBg} className="col-12 greenBg">
          <p ref={preLoaderRef} className="preloader-title">
            the<span>&nbsp;</span>creative<span>&nbsp;</span>studio{" "}
            <span>in sports</span>{" "}
          </p>
          <img ref={fadeRef} className="fadeBg" src={fadeBg} alt={fadeBg} />
        </div>
      )}
      <div className="logo col-6 col-sm-6">
        <div className="wrapper-logo">
          <a href="##">
            <svg
              ref={logoRef}
              height="820"
              viewBox="0 0 1066 820"
              width="1066"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z"
                fill="#fff"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="col-6 col-sm-6">
        <ul className="wrapper-nav">
          <li className="nav-items">
            <MyBubblyLink to={"/"} text="works" />
          </li>
          <li className="nav-items">
            <MyBubblyLink to={"/jobs"} text="jobs" />
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 mt-5rem">
        <span ref={takeRef} className="take">
          take a
        </span>
      </div>

      <div className="d-none d-sm-block col-sm-6 mt-5rem">
        <span ref={number16Ref} className="number16">
          16'
        </span>
      </div>

      <div className="col-12 col-sm-8 col-md-6">
        <span ref={lookRef} className="look">
          look at
        </span>
      </div>
      <div className="d-none d-sm-block col-sm-4 col-md-6 text-end">
        <span ref={number22Ref} className="number22">
          22'
        </span>
      </div>
      <div className="col-12 col-sm-12">
        <span ref={ourWorkRef} className="ourWork">
          our work
        </span>
      </div>
      <div className="col-12 col-sm-6">
        <span ref={descRef} className="landing-desc">
          GraphicHunters develops distinctive brand and campaign styles.
        </span>
      </div>
    </>
  );
}
