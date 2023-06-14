import React from "react";
import Task from "./Task";

const ListTask = ({ Data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      {Data.map((el) => {
        return <Task tasks={el} />;
      })}
    </div>
  );
};

export default ListTask;
