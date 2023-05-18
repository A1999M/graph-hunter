import { useState } from "react";
import Home from "./pages/Home";
import OurJobs from "./pages/OurJobs";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import Cursor from "./components/Cursor";
import PreloaderContext from "./context/Preloader";
import { BubblyContainer } from "react-bubbly-transitions";

export default function App() {
  let location = useLocation();
  let [preLoader, setPreLoader] = useState(true);

  let pathname = location.pathname.slice(1);

  return (
    <>
      <PreloaderContext.Provider value={[preLoader, setPreLoader]}>
        <BubblyContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<OurJobs />} />
          <Route />
        </Routes>
        {pathname} ? (
        <Cursor color={"#6405ff"} />
        ) : (
        <Cursor color={"#9bfa00"} />)
      </PreloaderContext.Provider>
    </>
  );
}
