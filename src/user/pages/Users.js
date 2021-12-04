import React from "react";
import UsersList from "../components/UsersList.js";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "kanishk",
      image: "https://images.pexels.com/photos/10346632/pexels-photo-10346632.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      places: 3,
    },
  ];

  return <><UsersList items={USERS} /></>;
};

export default Users;
