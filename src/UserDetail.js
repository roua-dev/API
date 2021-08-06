import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const UserDetail = ({ match }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);
  if (loading) {
    return <Spinner animation="border" variant="dark" />;
  }
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.address.street}</p>
    </div>
  );
};

export default UserDetail;