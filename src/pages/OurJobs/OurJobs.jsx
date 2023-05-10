import { useLayoutEffect, useContext } from "react";
import PreloaderContext from "../../context/Preloader";
import JobsHeader from "../../components/JobsHeader";
import Footer from "../../components/Footer";
import Hired from "../../components/Hired";
import RecentWorks from "../../components/RecentWorks";
import Scrollbar from "smooth-scrollbar";
import Overscrollplugin from "smooth-scrollbar/plugins/overscroll";
import "./OurJobs.scss";

export default function OurJobs() {
  let [preLoader, setPreLoader] = useContext(PreloaderContext);

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
    setPreLoader(false);
  });

  return (
    <>
      <div style={{ width: "100vw", overflow: "auto" }} id="my-scroller">
        <div className="container-fluid jobs">
          <div className="row">
            <JobsHeader />
          </div>
          <div className="row">
            <Hired />
          </div>
          <RecentWorks />
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
