import { useRef } from "react";
import Home from "./pages/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function App() {
  let containerRef = useRef();
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true, multiplier: 0.7 }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Home />
      </main>
    </LocomotiveScrollProvider>
  );
}
