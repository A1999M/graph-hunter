import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./EachJob.scss";

export default function EachJob({ title, location, borderBottom, animation }) {
  let wrapperEachJobRef = useRef();
  let titleJob = useRef();
  let locationRef = useRef();
  let moreJobRef = useRef();

  useLayoutEffect(() => {
    if (animation) {
      let tl = gsap.timeline();
      tl.fromTo(
        titleJob.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          delay: 1.5,
          ease: " Power4. easeOut",
        }
      );
      tl.fromTo(
        locationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        "<.1"
      );
      tl.fromTo(
        moreJobRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "<0"
      );
      tl.fromTo(
        wrapperEachJobRef.current,
        { borderColor: "transparent" },
        {
          borderColor: "#000000b3",
          duration: 0.6,
        },
        "<0"
      );
    }
  });

  return (
    <>
      <div
        data-hover="true"
        ref={wrapperEachJobRef}
        className={`wrapper each-job-wraper ${borderBottom}`}
      >
        <p data-hover="true" ref={titleJob} className="title-job">
          {title}
        </p>
        <div className="wrapper-descs">
          <span ref={locationRef} className="location">
            {location}
          </span>
          <span ref={moreJobRef} className="more">
            <span data-hover="true">more info</span>
            <span data-hover="true" className="purple-more">
              more info
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
