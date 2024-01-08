function NumberButtons({ buttonClickHandler }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const renderedButtons = numbers.map((number) => {
    return (
      <button
        key={number}
        onClick={() => {
          buttonClickHandler(number);
        }}
      >
        {number}
      </button>
    );
  });
  return <div>{renderedButtons}</div>;
}
export default NumberButtons;
