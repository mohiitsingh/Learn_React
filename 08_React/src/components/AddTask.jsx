import React from "react";

export default function AddTask({ taskList, setTasklist, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      console.log(task);
      const date = new Date();
      const updateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : todo,
      );
      // setTasklist((t) => [...t, updateTask]);
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      setTasklist([...taskList, newTask]);
      setTask({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name || " "}
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength={200}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}
