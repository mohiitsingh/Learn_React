import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  const [taskList, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist",JSON.stringify(taskList));
  }, [taskList])

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
