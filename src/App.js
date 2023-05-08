import { useLayoutEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import Overscrollplugin from "smooth-scrollbar/plugins/overscroll";
import Home from "./pages/Home";

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
        <Home />
      </div>
    </>
  );
}
