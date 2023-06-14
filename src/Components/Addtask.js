import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap/";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";

const Addtask = () => {
  const dispatch = useDispatch();
  // Listening to user input
  const [newTodo, setNewTodo] = useState({
    description: "",
  });

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const AddingTodo = () => {
    dispatch(addTodo(newTodo));

    setNewTodo();
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add New Task here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          name="description"
        />
        <Button variant="primary" id="button-addon2" onClick={AddingTodo}>
          Add Task
        </Button>
      </InputGroup>
    </div>
  );
};

export default Addtask;
