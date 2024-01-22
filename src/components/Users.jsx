import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (userId) => {
    setUserData(userData.filter((user) => user.id !== userId));
  };

  const handleEdit = (edituser) => {
    const userIndex = userData.findIndex((user) => user.id === edituser.id);
    if (userIndex !== -1) {
      const updatedUserData = [...userData];
      updatedUserData[userIndex] = edituser;
      setUserData(updatedUserData);
      setIsOpen(false);
    }
  };

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setIsLoading(false);
        setUserData(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="users-container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : userData?.length > 0 ? (
        userData?.map((user) => (
          <Card
            key={user.id}
            user={user}
            handleDelete={handleDelete}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleEdit={handleEdit}
          />
        ))
      ) : (
        <h1>No Data!</h1>
      )}
    </div>
  );
};

export default Users;
