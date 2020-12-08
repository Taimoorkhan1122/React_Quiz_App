const Answer = ({ answer, handleClick }) => {
  console.log(answer);
  return (
    <div className="option">
      {answer.map((ans, index) => (
        <button
          key={index}
          className="options"
          onClick={() => handleClick(index)}
        >
          {ans}
        </button>
      ))}
    </div>
  );
};

export default Answer;
