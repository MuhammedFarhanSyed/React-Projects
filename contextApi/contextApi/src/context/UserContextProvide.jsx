import React from "react";
import userContext from "./context";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};
export default UserContextProvider;