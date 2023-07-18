import React from "react";

import { Route, Routes } from "react-router-dom";

import PrivateRoute, { InvalidURL } from "./PrivateRoutes";

import { Login } from "../pages/Auth";
import { Home } from "../pages";


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
