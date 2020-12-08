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
      <div className="message">
        <Message correct={correct} incorrect={incorrect} />{" "}
        <button onClick={() => handleClick("play again")}>Play Again</button>
      </div>
    );
  return (
    <div className="quiz-area">
      <Question dataSet={dataSet} current={current} />
      <AnswerList
        answers={dataSet[current].options}
        handleClick={handleClick}
      />
    </div>
  );
};
export default QuizArea;
