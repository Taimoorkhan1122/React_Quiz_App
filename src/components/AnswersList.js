import Answer from "./Answer";

const AnswersList = ({ answers, handleClick }) => {
  return (
    <div>
      <Answer answer={answers} handleClick={handleClick} />
    </div>
  );
};

export default AnswersList;
