"use client"
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
