// importing React
import React, { useEffect, useState } from "react";

// importing other components
import axios from "axios";
import User from "../User/User.jsx";

// importing style sheet
import "./users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="users">
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
}
