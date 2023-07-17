// import { createContext, useContext, useMemo, useState } from "react";

// export const UserContext = createContext(null);

// const UserContextWrapper = ({ children }) => {
//      const [info, setInfo] = useState({});

//      function handleInfo(e) {
//           console.log("called");
//           setInfo({ ...info, firstName: e.firstName, lastName: e.lastName });
//      }

//      const data = useMemo(() => ({
//           info, handleInfo
//      }), [handleInfo, info]);
//      return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
// }

// export const useUserContext = () => {
//      return useContext(UserContext);
// };

// export default UserContextWrapper;

import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
     const [user, setUser] = useState({
          firstName: "",
          lastName: "",
          avatar: "avatar.png",
     });

     return (
          <>
               <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
          </>
     );
}
