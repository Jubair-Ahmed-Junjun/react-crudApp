import React from "react";
import "../Create/Create.css";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const Create = () => {
  const [users, setUser] = useContext(UserContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const updateId = (e) => {
    setId(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };

  const updateSalary = (e) => {
    setSalary(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    setUser([
      ...users,
      { id: id, name: name, position: position, salary: salary },
    ]);
  };
  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Id"
            name="id"
            value={id}
            onChange={updateId}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={updateName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Position"
            name="position"
            value={position}
            onChange={updatePosition}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Salary"
            name="salary"
            value={salary}
            onChange={updateSalary}
          />
        </Form.Group>
        <Button className="add_btn" variant="primary" type="submit">
          Add
        </Button>
        <Link to="/">
          <Button className="add_btn" variant="primary" type="submit">
            Back to Home!
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
