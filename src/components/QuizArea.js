import Question from "./Question";
import AnswerList from "./AnswersList";
import Message from "./Message";

const QuizArea = ({ isFinished, dataSet }) => {
  if (isFinished) return <Message />;
  return (
    <div>
      <Question dataSet={dataSet} />
      <AnswerList />
    </div>
  );
};
export default QuizArea;
