import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap/";
import { useDispatch } from "react-redux";
import { addTodo, clearAll } from "../Redux/todoSlice";

const Addtask = ({ tasks }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  // Listening to user input
  const [newTodo, setNewTodo] = useState({
    description: "",
  });

  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const AddingTodo = (e) => {
    dispatch(addTodo(newTodo));
    setShow(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add New Task
        </Button>
        {/* Test Clear all */}
        <Button
          variant="primary"
          onClick={() => {
            dispatch(clearAll(tasks));
          }}
        >
          Clear All
        </Button>
        {/* End Test Clear all */}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Adding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="description"
                placeholder="Task Description"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" id="button-addon2" onClick={AddingTodo}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Addtask;
