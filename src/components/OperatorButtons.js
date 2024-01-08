function OperatorButtons({ addOperationHandler, operators }) {
  const clickHandler = (operation) => {
    addOperationHandler(operation);
  };
  const buttons = operators.map((operator) => {
    return (
      <button key={operator.name} onClick={() => clickHandler(operator.name)}>
        {operator.symbol}
      </button>
    );
  });
  return <div>{buttons}</div>;
}
export default OperatorButtons;
