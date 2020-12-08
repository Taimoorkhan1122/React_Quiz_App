const Answer = ({ answer, handleClick }) => {
  console.log(answer);
  return (
    <div>
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
