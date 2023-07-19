import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "../context/useUserContext";

import Button from "./Button";
import Span from "./Span";
import Image from "./Image";

import { BIN_ICON, DEFAULT_IMAGE, SITE_LOGO } from "../constants";

export default function Navbar() {
     const navigate = useNavigate();

     const [cookies, removeCookies] = useCookies(["username"]);
     const { user, setUser } = useContext(UserContext);

     function handleLogout() {
          removeCookies("username");
          navigate("/login");
     }

     function handleAvatarReset() {
          setUser({ ...user, avatar: DEFAULT_IMAGE });
     }

     return (

          <nav className="container d-flex justify-content-between bg-dark align-items-center">
               <Image
                    src={SITE_LOGO}
                    alt="site logo"
                    height={"45px"}
                    width={"45px"}
                    title="Learning React"
               />
               <ul className="d-flex gap-4 list-unstyled">
                    <li>
                         <Button className="btn bg-dark text-light">Profile</Button>
                    </li>
                    <li>
                         <Button className="btn bg-dark text-light">Contact</Button>
                    </li>
                    <li>
                         <Button className="btn bg-dark text-light">About</Button>
                    </li>
               </ul>
               <section className="row d-flex justify-content-start w-25">
                    <div className="row col-12 d-flex justify-content-start">
                         <div className="row col-9">
                              <Span className="text-white">
                                   Muhammad Aamir 
                                   {/* {user.firstName} {user.lastName} */}
                              </Span>
                              <div className="d-flex gap-5">
                                   <Span
                                        className="text-white"
                                        title="Logout from this page"
                                        onClick={handleLogout}
                                   >
                                        Logout
                                   </Span>
                                   <Image
                                        onClick={handleAvatarReset}
                                        title="Reset avatar back to default"
                                        width={"20px"}
                                        height={"20px"}
                                        src={BIN_ICON}
                                   />
                              </div>
                         </div>

                         <Image
                              className="col-4 rounded-circle"
                              src={user.avatar}
                              alt="avatar"
                              height={"45px"}
                              width={"45px"}
                              title="This is your avatar"
                         />
                    </div>
               </section>
          </nav>
     );
}
