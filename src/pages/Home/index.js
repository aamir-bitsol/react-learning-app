import { useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { UserContext } from "../../context/useUserContext";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Image from "../../components/Image";
import Profile from "./Profile";
import { BIN_ICON, DEFAULT_IMAGE, SITE_LOGO } from "../../constants";
import Content from "../../components/Content";


export default function Home() {
     const navigate = useNavigate();
     const [cookies, removeCookies] = useCookies(["username"]);
     const { user, setUser } = useContext(UserContext);

     useEffect(() => {
          if (cookies.username === "undefined") {
               navigate("/login");
          }
          localStorage.setItem('firstName', JSON.stringify(user.firstName))
     }, [cookies.username]);

     function handleLogout() {
          removeCookies("username");
          navigate("/login");
     }

     function handleAvatarReset() {
          setUser({ ...user, avatar: DEFAULT_IMAGE});
     }

     return (
          <>
               <nav className="nav-bar">
                    <ul>
                         <li>
                              <Image
                                   className="logo"
                                   src={SITE_LOGO}
                                   alt="site logo"
                                   height={"45px"}
                                   width={"45px"}
                                   title="Learning React"
                              />
                         </li>
                         <li>
                              <Button>Profile</Button>
                         </li>
                         <li>
                              <Button>Contact</Button>
                         </li>
                         <li>
                              <Button>About</Button>
                         </li>
                         <li>
                              <Span
                                   className="logout-btn"
                                   title="Logout from this page"
                                   onClick={handleLogout}
                              >
                                   Logout
                              </Span>
                              
                         </li>
                         <li>
                              <Span className="user-name">{user.firstName} {user.lastName}</Span>
                              <Image
                                   onClick={handleAvatarReset}
                                   title="Reset avatar back to default"
                                   className="reset-btn"
                                   width={"20px"}
                                   height={"20px"}
                                   src={BIN_ICON}
                              />
                              <Image
                                   className="avatar"
                                   src={user.avatar}
                                   alt="avatar"
                                   height={"45px"}
                                   width={"45px"}
                                   title = "This is your avatar"
                                   style={{borderRadius:"50%"}}
                              />
                         </li>
                    </ul>
               </nav>
               <Profile />
               <main>
                   <Content username={cookies.username} />
               </main>
          </>
     );
}
