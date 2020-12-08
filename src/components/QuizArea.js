import Question from "./Question";
import AnswerList from "./AnswersList";
import Message from "./Message";

const QuizArea = ({ isFinished, dataSet, current }) => {
  if (isFinished) return <Message />;
  return (
    <div>
      <Question dataSet={dataSet} current={current} />
      <AnswerList answers={dataSet[current].options} />
    </div>
  );
};
export default QuizArea;
