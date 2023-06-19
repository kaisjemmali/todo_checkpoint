import React from "react";
import { Button } from "react-bootstrap/";
import { filterAll, filterDone, filterUndone } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";

const FilterTasks = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "blue",
        borderRadius: "20px",
      }}
    >
      <h4 style={{ marginTop: "15px" }}>Filter Tasks</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="primary"
          style={{ marginTop: "15px", marginBottom: "15px", width: "100px" }}
          onClick={() => dispatch(filterAll())}
        >
          All
        </Button>
        <Button
          variant="primary"
          style={{ marginTop: "15px", marginBottom: "15px", width: "100px" }}
          onClick={() => dispatch(filterDone())}
        >
          Done
        </Button>
        <Button
          variant="primary"
          style={{ marginTop: "15px", marginBottom: "15px", width: "100px" }}
          onClick={() => dispatch(filterUndone())}
        >
          Undone
        </Button>
      </div>
    </div>
  );
};

export default FilterTasks;
