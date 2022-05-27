// importing React
import React, { useEffect, useState } from "react";

// importing other components
import axios from "axios";
import User from "../User/User.jsx";

// importing style sheet
import "./users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [trigger, setTrigger] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, [trigger]);
  return (
    <div className="users">
      {users.map(
        (user) =>
          user.email !== "admin@admin.com" && (
            <User key={user._id} user={user} trigger={setTrigger} />
          )
      )}
    </div>
  );
}
