import React, {createContext, useState} from "react";

export const UserContext = createContext();
export function UserContextProvider({children}) {
  const [user, setUser] = useState({type: "notSet"});
  React.useEffect(() => {
    localStorage.setItem("usertype", JSON.stringify(user.type));
  });
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
