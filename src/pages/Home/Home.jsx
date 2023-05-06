import PreLoader from "../../components/PreLoader";
import OurWorks from "../../components/OurWorks";
import Footer from "../../components/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div data-scroll-section className="container-fluid">
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
        {/* white space section */}
        <div className="row help-paragraph">
          <p>
            this is a help paragraph for locomotive scroll library which is
            hidden
          </p>
        </div>
      </div>
    </>
  );
}
