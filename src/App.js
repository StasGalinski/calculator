import { useReducer } from "react";
import DigitButtons from "./components/DigitButtons";
import OperatorButtons from "./components/OperatorButtons";
import { IoBackspaceSharp } from "react-icons/io5";
import "./App.css";
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  REMOVE_DIGIT: "remove-digit",
  ADD_OPERATION: "add-operation",
  CLEAR: "clear",
  SHOW_RESULT: "show-result",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.resultMode) {
        return { ...state, currentValue: payload.digit, resultMode: false };
      }
      if (payload.digit === "0" && state.currentValue === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentValue?.includes(".")) {
        return state;
      } else {
        return { ...state, currentValue: (state.currentValue || "") + payload.digit };
      }
    case ACTIONS.REMOVE_DIGIT: {
      if (state.resultMode) {
        return {};
      }
      if (state.currentValue == null) {
        return state;
      }
      if (state.currentValue.length >= 1) {
        return { ...state, currentValue: state.currentValue.slice(0, -1) };
      } else {
        return state;
      }
    }
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.ADD_OPERATION:
      if (state.previousValue == null && state.currentValue == null) {
        return state;
      }
      if (state.previousValue == null) {
        return { ...state, currentValue: null, previousValue: state.currentValue, previousOperation: payload.operation };
      }
      if (state.currentValue == null && state.previousOperation) {
        return { ...state, previousOperation: payload.operation };
      }

      return {
        ...state,
        previousValue: calculate(state),
        previousOperation: payload.operation,
        currentValue: null,
      };
    case ACTIONS.SHOW_RESULT:
      if (state.previousOperation == null || state.previousValue == null || state.currentValue == null) {
        return { ...state };
      } else {
        return { currentValue: calculate(state), resultMode: true };
      }
    default:
      return { ...state };
  }
};
const calculate = ({ previousOperation, previousValue, currentValue }) => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  let result;
  switch (previousOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      result = "";
  }
  return result + "";
};
function App() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <div className="app">
      <div className="calculator-body">
        <section className="output-group">
          <div className="output">
            {state.previousValue} {state.previousOperation}
          </div>
          <div className="output">{state.currentValue}</div>
        </section>

        <div className="container">
          <button className="button big-button" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
            C
          </button>
          <button className="button icon" onClick={() => dispatch({ type: ACTIONS.REMOVE_DIGIT })} type="button">
            <IoBackspaceSharp />
          </button>
          <DigitButtons dispatch={dispatch} />
          <OperatorButtons dispatch={dispatch} />
          <button className="button big-button equals-button" onClick={() => dispatch({ type: ACTIONS.SHOW_RESULT })}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
