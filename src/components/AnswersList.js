import Answer from "./Answer";

const AnswersList = ({ answers, handleClick }) => {
  return (
    <div className="answer-list">
      <Answer answer={answers} handleClick={handleClick} />
    </div>
  );
};

export default AnswersList;
