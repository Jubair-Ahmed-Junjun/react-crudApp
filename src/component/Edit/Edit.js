import React from "react";
import "../Edit/Edit.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(user[0].name);
  const [position, setPosition] = useState(user[0].position);
  const [salary, setSalary] = useState(user[0].salary);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
  };

  const editPosition = (e) => {
    setName(e.target.value);
    const edited_position = position;
    user[0].position = edited_position;
  };

  const editSalary = (e) => {
    setName(e.target.value);
    const edited_salary = salary;
    user[0].salary = edited_salary;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>ID No : {user[0].id}</Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder={user[0].name}
            name="name"
            value={name}
            onChange={editName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder={user[0].position}
            name="position"
            value={position}
            onChange={editPosition}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder={user[0].salary}
            name="salary"
            value={salary}
            onChange={editSalary}
          />
        </Form.Group>
        <Button
          onSubmit={() => editUser}
          className="add_btn"
          variant="primary"
          type="submit"
        >
          Update
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

export default Edit;
