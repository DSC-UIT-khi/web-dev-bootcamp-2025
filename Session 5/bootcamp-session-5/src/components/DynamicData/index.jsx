import React, { useEffect, useState } from "react";
import "./style.css";

const DynamicData = () => {
  const [users, setUsers] = useState([]);

  const handleFetchAPI = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    handleFetchAPI();
  }, []);
  return (
    <div>
      <h1>Dynamic Data</h1>
      {users?.map(({ name, username }, index) => (
        <div key={index} className="user-record">
          <p>Name: {name}</p>
          <p>Username: {username}</p>
        </div>
      ))}
    </div>
  );
};

export default DynamicData;
