import Answer from "./Answer";

const AnswersList = ({ answers }) => {
  console.log(answers);
  return (
    <div>
      <Answer answer={answers} />
    </div>
  );
};

export default AnswersList;
