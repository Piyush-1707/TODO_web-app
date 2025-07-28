import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.length > 0 && taskData.tags[0] === tag;
  };

  const selectTag = (tag) => {
    if (taskData.tags.length > 0 && taskData.tags[0] === tag) {
      setTaskData((prev) => {
        return { ...prev, tags: [] };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="Urgent"
              selectTag={selectTag}
              selected={checkTag("Urgent")}
            />
            <Tag
              tagName="High"
              selectTag={selectTag}
              selected={checkTag("High")}
            />
            <Tag
              tagName="Medium"
              selectTag={selectTag}
              selected={checkTag("Medium")}
            />
            <Tag
              tagName="Low"
              selectTag={selectTag}
              selected={checkTag("Low")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
