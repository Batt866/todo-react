export const Check = (props) => {
  return (
    <div className=" mt-8 w-[300px] h-[60px] bg-[#F9FAFB] rounded-md flex items-center gap-2 text-black p-3">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.handleOnChange}
      />
      <p className={`${props.isDone ? "line-through" : ""}`}>
        {props.TasckName}
      </p>
      {""}

      {props.isDone && (
        <button
          onClick={props.deleteOnChange}
          className="p-1 ml-26 bg-[#FEF2F2] text-[#EF4444] rounded-[6px]"
        >
          Delete
        </button>
      )}
    </div>
  );
};
