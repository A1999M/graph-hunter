import EachItem from "./EachItem";
import comicBoy from "../../assets/images/ourworks/fnatic-crops-1080x-q72.jpg";
import knbv from "../../assets/images/ourworks/thumb-2-1080x-q72.jpg";
import ajax from "../../assets/images/ourworks/3.jpg";
import nike from "../../assets/images/ourworks/4.jpg";
import moon from "../../assets/images/ourworks/5.jpg";
import phone from "../../assets/images/ourworks/6.jpg";
import "./OurWorks.scss";

export default function OurWorks() {
  return (
    <>
      <div className="col-12 col-lg-6 mt-10rem">
        <EachItem
          title={"knbv"}
          imageSrc={knbv}
          desc="A BRAND NEW LOOK FOR TOTO KNVB BEKER"
          bgColor={"#0e2329"}
        />
      </div>
      <div className="col-12 col-lg-6 mt-10rem">
        <EachItem
          title={"ea sports"}
          imageSrc={comicBoy}
          desc="ARTWORK FOR FIFA GLOBAL SERIES '22"
          bgColor="#F36329"
        />
      </div>
      <div className="col-12 col-lg-6 mt-5">
        <EachItem
          title={"AFC AJAX"}
          imageSrc={ajax}
          desc="CARIBBEAN INSPIRED DESIGN FOR FUTURE GOALS"
          bgColor={"#A4A415"}
        />
      </div>
      <div className="col-12 col-lg-6 mt-5">
        <EachItem
          title={"KNVB NIKE"}
          imageSrc={nike}
          desc="CELEBRATING 25 YEARS OF JUST DOING IT"
          bgColor={"#FF5000"}
        />
      </div>
      <div className="col-12 col-lg-6 mt-5">
        <EachItem
          title={"UEFA"}
          imageSrc={moon}
          desc="ILLUSTRATION TOOLKIT FOR FUTSAL EURO 2022"
          bgColor={"#257DB8"}
        />
      </div>
      <div className="col-12 col-lg-6 mt-5">
        <EachItem
          title={"EREDIVISIE"}
          imageSrc={phone}
          desc="A NEW SEASON OF ONE TO WATCH"
          bgColor={"#DEF4E3"}
        />
      </div>
    </>
  );
}
