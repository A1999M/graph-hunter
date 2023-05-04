import PreLoader from "../../components/PreLoader";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <PreLoader />
        </div>
      </div>
    </>
  );
}
