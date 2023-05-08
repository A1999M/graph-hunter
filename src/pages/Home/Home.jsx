import PreLoader from "../../components/PreLoader";
import OurWorks from "../../components/OurWorks";
import Footer from "../../components/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
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
