import { useEffect, useRef } from "react";
import PreLoader from "../../components/PreLoader";
import OurWorks from "../../components/OurWorks";
import LocomotiveScroll from "locomotive-scroll";
import "./Home.scss";

export default function Home() {
  let scrollRef = useRef();

  useEffect(() => {
    let locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.7,
    });
    locoScroll.on();
  });
  return (
    <>
      <div ref={scrollRef} data-scroll-container className="container-fluid">
        <div data-scroll-section className="row">
          <PreLoader />
        </div>
        <div data-scroll-section className="row">
          <OurWorks />
        </div>
      </div>
    </>
  );
}
