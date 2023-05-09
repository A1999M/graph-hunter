import "./EachJob.scss";

export default function EachJob({ title, location }) {
  return (
    <>
      <div className="wrapper">
        <p className="title-job">{title}</p>
        <div className="wrapper-descs">
          <span className="location">{location}</span>
          <span className="more">
            <span>more info</span>
            <span className="purple-more">more info</span>
          </span>
        </div>
      </div>
    </>
  );
}
