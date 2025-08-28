"use client";

import { Web } from "@/components/web";
import { Check } from "@/components/buttoncheck";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

export default function Site() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (!inputValue == "") {
      setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
      setInputValue("");
    }
  };
  const handleOnChangeChecked = (event, id) => {
    const newTodos = todos.map((el, i) => {
      if (id === el.id) el.isDone = event.target.checked;
      return el;
    });

    setTodos(newTodos);
  };
  const deleteOnAll = () => {
    const filtered = todos.filter((todo) => !todo.isDone);
    setTodos(filtered);
  };

  const task = {
    TasckName: "bla bla bla",
    isCompleted: true,
  };

  const check = {
    isChecked: true,
  };
  const deleteOnChange = (index) => {
    const newTodos = todos.filter((el, i) => i !== index);

    setTodos(newTodos);
  };
  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterStatus = (status) => {
    console.log("hha");

    setFilterStatus(status);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filterStatus == "all") return true;
    if (filterStatus == "active") return !todo.isDone;
    return todo.isDone;
  });
  const completedTodo = todos.filter((el) => {
    if (el.isDone == true) return el;
  });

  return (
    <div className="flex justify-center rounded-md pt-[60px] w-screen h-screen bg-[#F3F4F6]">
      <div className=" h-fit w-90 bg-white flex flex-col justify-center items-center rounded-md p-[16px] inset-shadow-sm inset-shadow-gray-500 ">
        <h1 className="text-black text-center font-semibold">To-Do list</h1>
        <div className="flex gap-1.5">
          <input
            placeholder={"Add a new task..."}
            className="border-[#E4E4E7] border rounded-md text-black"
            onChange={(event) => handleOnChange(event)}
            value={inputValue}
          ></input>
          <button
            onClick={handleOnClick}
            className="bg-[#3C82F6] h-[ 40px] w-[59px] items-center rounded-[6px]"
          >
            Add
          </button>
        </div>
        <div className="flex gap-2 mt-[20px]">
          <Web
            button="All"
            onClick={() => handleFilterStatus("all")}
            className={
              "items-center bg-gray-400 pl-2 pr-2 h-[32px] rounded-[6px] " +
              `${filterStatus === "all" ? "!bg-[#3C82F6]" : ""}`
            }
          ></Web>
          <Web
            button="Active"
            onClick={() => handleFilterStatus("active")}
            className={
              "items-center bg-gray-400 pl-2 pr-2 h-[32px] rounded-[6px]  " +
              `${filterStatus === "active" ? "!bg-[#3C82F6]" : ""}`
            }
          ></Web>
          <Web
            button="Completed"
            onClick={() => handleFilterStatus("completed")}
            className={
              "items-center bg-gray-400 pl-2 pr-2 h-[32px] rounded-[6px] " +
              `${filterStatus === "completed" ? "!bg-[#3C82F6]" : ""}`
            }
          ></Web>
        </div>

        <div>
          {filteredTodos.map((todo, index) => {
            return (
              <Check
                key={todo.id}
                handleOnChange={(event) =>
                  handleOnChangeChecked(event, todo.id)
                }
                TasckName={todo.title}
                isDone={todo.isDone}
                checked={todo.isDone}
                deleteOnChange={() => deleteOnChange(index)}
              ></Check>
            );
          })}
        </div>
        {todos.length < 1 ? (
          <h6 className="font-normal text-center text-[#6B7280] text-sm mt-[32px]">
            No tasks yet. Add one above!
          </h6>
        ) : (
          <h3 onClick={deleteOnAll} className="text-red-500 mt-6 flex gap-30">
            <h4 className="text-gray-500">
              {completedTodo.length} of {todos.length}
            </h4>
            Clear Completed
          </h3>
        )}
        <div className="flex mt-[40px]">
          <h6 className="text-[#6B7280] text-xs font-normal flex justify-center ">
            Powered by
          </h6>
          <h6 className="text-[#3B73ED] font-normal text-xs flex justify-center">
            Pinecone academy
          </h6>
        </div>
      </div>
    </div>
  );
}
