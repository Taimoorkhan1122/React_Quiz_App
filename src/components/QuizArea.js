import Question from "./Question";
import AnswerList from "./AnswersList";
import Message from "./Message";

const QuizArea = ({
  isFinished,
  correct,
  incorrect,
  dataSet,
  current,
  handleClick,
}) => {
  if (isFinished)
    return (
      <>
        <Message correct={correct} incorrect={incorrect} />{" "}
        <button onClick={() => handleClick("play again")}>Play Again</button>
      </>
    );
  return (
    <div>
      <Question dataSet={dataSet} current={current} />
      <AnswerList
        answers={dataSet[current].options}
        handleClick={handleClick}
      />
    </div>
  );
};
export default QuizArea;
