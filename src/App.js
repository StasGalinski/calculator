import { useReducer } from "react";

const CHANGE_DISPLAY_VALUE = "change-display-value";

const operators = [
  { name: "plus", symbol: "+", calculation: (a, b) => a + b },
  { name: "minus", symbol: "-", calculation: (a, b) => a - b },
  { name: "divide", symbol: "/", calculation: (a, b) => a / b },
  { name: "multiply", symbol: "*", calculation: (a, b) => a * b },
  { name: "equals", symbol: "=", calculation: (a, b) => b },
  { name: "clear", symbol: "c" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY_VALUE:
      return { ...state, displayValue: action.payload };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, {
    displayValue: 0,
  });
  console.log(state);
  const inputChangeHandler = (e) => {
    dispatch({ type: CHANGE_DISPLAY_VALUE, payload: parseFloat(e.target.value) });
  };

  return (
    <div>
      <p>hi</p>
      <form>
        <input type="numbers" onChange={inputChangeHandler} value={state.displayValue || 0} />
        <button>=</button>
      </form>
    </div>
  );
}
export default App;
