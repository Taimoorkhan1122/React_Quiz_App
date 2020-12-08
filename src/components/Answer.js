const Answer = ({ Choice, answer }) => {
  console.log(answer);
  return (
    <div>
      {answer.map((ans) => (
        <button className="options">{ans}</button>
      ))}
    </div>
  );
};

export default Answer;
