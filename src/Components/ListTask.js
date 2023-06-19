import React from "react";
import Task from "./Task";

const ListTask = ({ Data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      {Data.map((el) => {
        return <Task tasks={el} />;
      })}
    </div>
  );
};

export default ListTask;
