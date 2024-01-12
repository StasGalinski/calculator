import { ACTIONS } from "../App";
import { Fragment } from "react";
const operators = [{ symbol: "+" }, { symbol: "-" }, { symbol: "*" }, { symbol: "/" }];
function OperatorButtons({ dispatch }) {
  const clickHandler = (operation) => {
    dispatch({ type: ACTIONS.ADD_OPERATION, payload: { operation: operation.symbol } });
  };
  const buttons = operators.map((operator, i) => {
    return (
      <button className={`button operator${i}`} key={operator.symbol} onClick={() => clickHandler(operator)}>
        {operator.symbol}
      </button>
    );
  });
  return <Fragment>{buttons}</Fragment>;
}
export default OperatorButtons;
