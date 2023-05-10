import { useState } from "react";
import Home from "./pages/Home";
import OurJobs from "./pages/OurJobs";
import { Routes, Route } from "react-router";
import PreloaderContext from "./context/Preloader";

export default function App() {
  let [preLoader, setPreLoader] = useState(true);

  return (
    <>
      <PreloaderContext.Provider value={[preLoader, setPreLoader]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<OurJobs />} />
          <Route />
        </Routes>
      </PreloaderContext.Provider>
    </>
  );
}
