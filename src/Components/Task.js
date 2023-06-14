import React from "react";

const Task = ({ tasks }) => {
  return <div style={{ marginBottom: "20px" }}>{tasks.description}</div>;
};

export default Task;
