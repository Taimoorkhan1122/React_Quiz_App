const Question = ({ dataSet, current }) => {
  return (
    <div>
      <p>{dataSet[current].question}</p>
    </div>
  );
};

export default Question;
