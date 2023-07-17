import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Auth";
import { Home } from "../pages";
import PrivateRoute, { InvalidURL } from "./PrivateRoutes";

export default function AppRoutes() {
     return (
          <>
               <Routes>
                    <Route element={<PrivateRoute />}>
                         <Route exact path="/" element={<Home />} />
                    </Route>
                    
                    <Route path="/login" element={<Login />} />
                    <Route exact path="*" element={<InvalidURL />} />
               </Routes>
          </>
     );
}
