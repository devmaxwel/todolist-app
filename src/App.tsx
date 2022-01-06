import React, { useState, ChangeEvent } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interface";

const App: React.FC = () => {
  const [task, setTask] = useState<String>("");
  const [deadline, setDeadline] = useState<Number>(0);
  const [todoList, setTodo] = useState<ITask[]>([]);

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const submitTask = () => {
    const NewTask = {
      taskName: task,
      deadline: deadline,
    };

    setTodo([...todoList, NewTask]);
    setTask("");
    setDeadline(0);
    console.log(todoList);
  };

  const completeTask =(taskNameToDelete:String):void=>{
    setTodo(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete

    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={String(task)}
            onChange={handleOnchange}
          />
          <input
            type="number"
            placeholder="Time frame(in days)..."
            name="deadline"
            value={Number(deadline)}
            onChange={handleOnchange}
          />
        </div>

        <button onClick={submitTask}>Add Task</button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: Number) => {
          return <TodoTask key={Number(key)} task={task} taskComplete={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
