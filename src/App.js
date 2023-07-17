import "./App.css";

import { UserContextProvider } from "./context/useUserContext";
import AppRoutes from "./routes/routes";

function App() {
     return (
          <UserContextProvider>
              <AppRoutes />
          </UserContextProvider>
     );
}

export default App;
