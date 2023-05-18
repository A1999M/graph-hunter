import { useState } from "react";
import Home from "./pages/Home";
import OurJobs from "./pages/OurJobs";
import { Routes, Route } from "react-router";
import PreloaderContext from "./context/Preloader";
import Cursor from "./components/Cursor";
import { useLocation } from "react-router";
import { BubblyContainer } from "react-bubbly-transitions";

export default function App() {
  let { pathname } = useLocation();
  let [preLoader, setPreLoader] = useState(true);

  let slicePathName = pathname.slice(1);

  return (
    <>
      <PreloaderContext.Provider value={[preLoader, setPreLoader]}>
        <BubblyContainer />
        {slicePathName ? (
          <Cursor color="#EA2027" />
        ) : (
          <Cursor color="#9bfa00" />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<OurJobs />} />
          <Route />
        </Routes>
      </PreloaderContext.Provider>
    </>
  );
}
