import { useLayoutEffect } from "react";
import PreLoader from "../../components/PreLoader";
import OurWorks from "../../components/OurWorks";
import Footer from "../../components/Footer";
import Scrollbar from "smooth-scrollbar";
import Overscrollplugin from "smooth-scrollbar/plugins/overscroll";
import "./Home.scss";

export default function Home() {
  let options = {
    damping: 0.08,
    plugins: {
      overscroll: {
        enable: true,
        effect: "bounce",
        damping: 0.1,
        maxOverscroll: 150,
      },
    },
  };
  useLayoutEffect(() => {
    Scrollbar.use(Overscrollplugin);
    Scrollbar.init(document.getElementById("my-scroller"), options);
  });

  return (
    <>
      <div
        style={{ width: "100vw", overflow: "auto", backgroundColor: "#000" }}
        id="my-scroller"
        className="container-fluid"
      >
        {/* landiing home page */}
        <div className="row">
          <PreLoader />
        </div>
        {/* home page's our work section */}
        <div className="row">
          <OurWorks />
        </div>
        {/* home page's footer section */}
        <div className="row bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
