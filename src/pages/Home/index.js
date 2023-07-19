import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Profile from "./Profile";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";


export default function Home() {
     const navigate = useNavigate();
     const [cookies] = useCookies(["username"]);

     useEffect(() => {
          if (cookies.username === "undefined") {
               navigate("/login");
          }
     }, [cookies.username]);

    
     return (
          <div>
               <Navbar />
               <Profile />
               <Content username={cookies.username} />
          </div>
     );
}
