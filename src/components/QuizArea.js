import Question from "./Question";
import AnswerList from "./AnswersList";
import Message from "./Message";

const QuizArea = ({ isFinished, dataSet, current, handleClick }) => {
  if (isFinished) return <Message />;
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
