import React, { useState } from "react";
import { Card } from "react-bootstrap/";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo, updateTodo, doneTodo } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import { Modal, Button, Form } from "react-bootstrap/";

const Task = ({ tasks }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(tasks.isDone);

  const handlerChange = (e) => {
    e.preventDefault();
    setChecked(e.target.checked);
    dispatch(doneTodo(tasks.id));
  };
  const initialState = {
    id: tasks.id,
    description: tasks.description,
  };
  const [updatedTask, setUpdatedTask] = useState(initialState);
  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const UpdateHandler = () => {
    dispatch(updateTodo({ id: tasks.id, updatedTask: updatedTask }));
    handleClose();
  };

  return (
    <Card
      style={{
        width: "20rem",
        marginBottom: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card.Body>
        <Card.Text>
          {tasks.isDone ? (
            <p style={{ color: "green" }}> {tasks.description} </p>
          ) : (
            <p style={{ color: "red" }}> {tasks.description} </p>
          )}
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <BorderColorIcon
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleShow}
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Task Editing</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Task Editing</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="description"
                    placeholder="Task Description"
                    autoFocus
                    defaultValue={tasks.description}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                id="button-addon2"
                onClick={UpdateHandler}
              >
                Edit Task
              </Button>
            </Modal.Footer>
          </Modal>

          <Switch
            checked={checked}
            onChange={handlerChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <DeleteIcon
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              dispatch(deleteTodo(tasks.id));
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
