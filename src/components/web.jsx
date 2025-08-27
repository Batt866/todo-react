export const Web = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.button}
      </button>
    </div>
  );
};
