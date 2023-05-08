import Home from "./pages/Home";
import OurJobs from "./pages/OurJobs";
import { useLayoutEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { Routes, Route } from "react-router";
import Overscrollplugin from "smooth-scrollbar/plugins/overscroll";

export default function App() {
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
      <div style={{ width: "100vw", overflow: "auto" }} id="my-scroller">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<OurJobs />} />
          <Route />
        </Routes>
      </div>
    </>
  );
}
