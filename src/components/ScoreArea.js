import Correct from "./Correct";
import Incorrect from "./Incorrect";

const ScoreArea = ({ correct, incorrect }) => {
  return (
    <div>
      <Correct correct={correct} />
      <Incorrect incorrect={incorrect} />
    </div>
  );
};

export default ScoreArea;
