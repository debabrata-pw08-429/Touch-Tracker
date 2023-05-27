import "../App.css";
import { useSelector } from "react-redux";

const Metrics = () => {
  let accuracy = useSelector((state) => state.metricReducer.accuracy);
  let mistakes = useSelector((state) => state.metricReducer.mistakes);
  let speed = useSelector((state) => state.metricReducer.speed);

  return (
    <div className="metrics">
      <h1>
        Speed : <span>{speed} wpm</span>
      </h1>
      <h1>
        Accuracy : <span>{accuracy} %</span>
      </h1>
      <h1>
        Mistakes : <span>{mistakes} </span>
      </h1>
    </div>
  );
};

export default Metrics;
