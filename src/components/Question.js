const Question = ({ dataSet, current }) => {
  return (
    <div className="question">
      <p>{dataSet[current].question}</p>
    </div>
  );
};

export default Question;
