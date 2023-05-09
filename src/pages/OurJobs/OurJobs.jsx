import JobsHeader from "../../components/JobsHeader";
import Footer from "../../components/Footer";
import Hired from "../../components/Hired";
import RecentWorks from "../../components/RecentWorks";
import "./OurJobs.scss";

export default function OurJobs() {
  return (
    <>
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
    </>
  );
}
