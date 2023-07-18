import React, { useContext } from "react";

import { UserContext } from "../context/useUserContext";
import Cards from "./Cards";

export default function Content(cookies) {
     const { user } = useContext(UserContext);

     return (
          <main>
               <h1>Welcome {cookies.username},</h1>
               <p>
                    Greetings {user.firstName} {user.lastName}!<br />
                    This is a learning website. This is under development stage, we are working on
                    the website to make it look better.
               </p>
               <section className="cards-section">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
               </section>
          </main>
     );
}
