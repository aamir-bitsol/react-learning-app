import { createContext, useState } from "react";
import { DEFAULT_IMAGE } from "../constants";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
     const [user, setUser] = useState({
          firstName: "",
          lastName: "",
          avatar: DEFAULT_IMAGE,
     });

     return (
          <>
               <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
          </>
     );
}
