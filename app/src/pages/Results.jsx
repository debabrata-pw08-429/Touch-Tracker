import "../App.css";
import Metrics from "../components/Metrics";

const Results = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1 style={{ textAlign: "center", backgroundColor: "white" }}>RESULTS</h1>
      <Metrics />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
        }}
      >
        <a href="/">
          <button className="start-button-css">Go Back!</button>
        </a>
      </div>
    </div>
  );
};

export default Results;
