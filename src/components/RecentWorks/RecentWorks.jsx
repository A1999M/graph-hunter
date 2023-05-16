import EachItem from "../../components/OurWorks/EachItem";
import comicBoy from "../../assets/images/ourworks/fnatic-crops-1080x-q72.jpg";
import knbv from "../../assets/images/ourworks/thumb-2-1080x-q72.jpg";
import "./RecentWorks.scss";

export default function RecentWorks() {
  return (
    <>
      <div className="container-fluid">
        <div className="row recent-post-titles">
          <div className="col-12 col-sm-6">
            <p className="recent-works">recent works</p>
          </div>
          <div className="d-none d-sm-block col-sm-6">
            <div className="wrapper-overview">
              <span className="overview">overview (6)</span>
              <span className="overview-purple">overview (6)</span>
            </div>
          </div>
        </div>
        <div className="row recent-posts">
          <div className="col-12 col-lg-6">
            <EachItem
              title={"knbv"}
              imageSrc={knbv}
              desc="A BRAND NEW LOOK FOR TOTO KNVB BEKER"
              color={"#000"}
              hoverColor="#6405ff"
              bgColor={"#0e2329"}
            />
          </div>
          <div className="col-12 col-lg-6">
            <EachItem
              title={"ea sports"}
              imageSrc={comicBoy}
              desc="ARTWORK FOR FIFA GLOBAL SERIES '22"
              color={"#000"}
              hoverColor="#6405ff"
              bgColor="#F36329"
            />
          </div>
        </div>
      </div>
    </>
  );
}
