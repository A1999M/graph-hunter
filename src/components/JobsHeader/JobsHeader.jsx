import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../../plugins/SplitText";
import CustomEase from "../../plugins/CustomEase";
import "./JobsHeader.scss";

export default function JobsHeader() {
  let joinRef = useRef();
  let collectiveRef = useRef();
  let jobDescRef = useRef();
  let jobLogoRef = useRef();
  let jobWorkRef = useRef();
  let jobLinkRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText);

    let joinSplit = new SplitText(joinRef.current, { type: "chars" });
    let collectiveSplit = new SplitText(collectiveRef.current, {
      type: "chars",
    });

    let tl = gsap.timeline();
    gsap.to(document.getElementById("my-scroller"), {
      height: "100vh",
      duration: 0.1,
    });

    tl.fromTo(
      jobDescRef.current,
      {
        opacity: 0,
        y: 90,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.013,0.597,0.294,0.848,0.52,1.05,1,1,1,1"
        ),
        delay: 0.3,
      }
    );
    tl.from(
      collectiveSplit.chars,
      {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 80,
        duration: 1.3,
        stagger: 0.02,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.013,0.597,0.294,0.848,0.52,1.05,1,1,1,1"
        ),
      },
      "<.015"
    );
    tl.from(
      joinSplit.chars,
      {
        opacity: 0,
        y: 80,
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1.3,
        stagger: 0.02,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.013,0.597,0.294,0.848,0.52,1.05,1,1,1,1"
        ),
      },
      "<.08"
    );
    tl.fromTo(
      jobLogoRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.013,0.597,0.294,0.848,0.52,1.05,1,1,1,1"
        ),
      },
      "<.2"
    );
    tl.fromTo(
      jobWorkRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.2,
        ease: "Power4.easeOut",
      },
      "<0"
    );
    tl.fromTo(
      jobLinkRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.2,
        ease: "Power4.easeOut",
      },
      "<0.01"
    );
  });

  return (
    <>
      <div className="col-6 col-lg-6">
        <div className="wrapper-logo-jobs">
          <a href="##">
            <svg
              ref={jobLogoRef}
              height="820"
              viewBox="0 0 1066 820"
              width="1066"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z"
                fill="#000"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <ul className="wrapper-nav-jobs">
          <li ref={jobWorkRef} className="nav-items">
            work
          </li>
          <li ref={jobLinkRef} className="nav-items">
            jobs
          </li>
        </ul>
      </div>
      <div className="col-12 col-lg-12 mt-8rem">
        <p ref={joinRef} className="join">
          JOIN<span>&nbsp;</span>THE
        </p>
      </div>
      <div className="col-12 col-lg-12">
        <p ref={collectiveRef} className="collective">
          COLLECTIVE®
        </p>
      </div>
      <div className="col-12 mt-5rem">
        <p ref={jobDescRef} className="desc-jobHeader">
          We are a collective of highly talented creatives sharing one goal:
          developing the best visual productions in sports.
        </p>
      </div>
    </>
  );
}
