const Message = ({ correct, incorrect }) => {
  return (
    <div>
      {correct > incorrect ? (
        correct >= 3 ? (
          <h3>Welldone 🎉</h3>
        ) : (
          <h3>keep working hard 🤓</h3>
        )
      ) : incorrect >= 3 ? (
        <h3>Seriously 🤔</h3>
      ) : (
        <h3>keep working more harder 💪</h3>
      )}
      <h4>thank you for attempting the quiz</h4>
    </div>
  );
};
export default Message;
