import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    { id: 1, name: "sohel", position: "FrontEndDev", salary: "20000" },
    { id: 2, name: "forkan", position: "backend dev", salary: "10000" },
    { id: 3, name: "nabil", position: "marketer", salary: "5000" },
  ]);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
