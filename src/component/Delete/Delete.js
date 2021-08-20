import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const Delete = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();

  const deleteUser = (id) => {
    const user = users.filter((user) => user.id != id);
    setUser([...user]);
  };
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure?</p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/">
            <Button className="delete_info" variant="secondary">
              Cancel
            </Button>
            <Button onclick={() => deleteUser(id)} variant="primary">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;
