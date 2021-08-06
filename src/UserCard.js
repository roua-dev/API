import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "20rem", margin: "20px" }}>
        <span className="name">{user.username[0]}</span>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </Card.Text>
          <Link to={`/${user.id}`}>
            <Button variant="primary">See Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
