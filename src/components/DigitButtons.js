import { ACTIONS } from "../App";
import { Fragment } from "react";
export default function DigitButtons({ dispatch }) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const renderedButtons = numbers.map((item) => {
    const clickHandler = () => {
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: item } });
    };
    return (
      <button className="button" key={item} onClick={clickHandler}>
        {item}
      </button>
    );
  });
  return <Fragment>{renderedButtons}</Fragment>;
}
