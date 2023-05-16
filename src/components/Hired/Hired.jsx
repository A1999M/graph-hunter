import EachJob from "./EachJob";
import "./Hired.scss";

export default function Hired() {
  return (
    <>
      <div className="col-12 col-lg-12 senior-de">
        <EachJob
          title={"SENIOR DESIGNER"}
          animation={true}
          location={"Amsterdam / Den Bosch"}
        />
      </div>
      <div className="col-12 col-lg-12">
        <EachJob title={"JUNIOR DESIGNER"} location={"Amsterdam / Den Bosch"} />
      </div>
      <div className="col-12 col-lg-12">
        <EachJob title={"project manager"} location={"Amsterdam / Den Bosch"} />
      </div>
      <div className="col-12 col-lg-12">
        <EachJob
          title={"open application"}
          borderBottom={"c-border-bottom"}
          location={"remote"}
        />
      </div>
    </>
  );
}
