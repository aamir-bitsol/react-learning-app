import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { UserContext } from "../../context/useUserContext";
import Profile from "./Profile";



export default function Home() {
     const navigate = useNavigate();
     const [cookies, removeCookies] = useCookies(["username"]);
     const {user, setUser} = useContext(UserContext);

     useEffect(() => {
          console.log('re-render')
          if (cookies.username === "undefined") {
               navigate("/login");
          }
     },[cookies.username]);

     function handleLogout() {
          removeCookies("username");
          navigate("/login");
     }

     function handleAvatarReset(){
          setUser({...user, avatar: 'avatar.png'})
     }

     return (
          <>
               <nav className="nav-bar">
                    <ul>
                         <li>
                              <img
                                   className="logo"
                                   src={logo}
                                   alt="site logo"
                                   height={"45px"}
                                   width={"45px"}
                                   title="Learning React"
                              ></img>
                         </li>
                         <li>
                              <button>Profile</button>
                         </li>
                         <li>
                              <button>Contact</button>
                         </li>
                         <li>
                              <button>About</button>
                         </li>
                         <li>
                              <span className="logout-btn" title="Logout from this page" onClick={handleLogout}>Logout</span>
                         </li>
                         <li>
                              <span className="user-name">{user.firstName} {user.lastName}</span>
                              <span onClick={handleAvatarReset} title="Reset avatar back to default" className="reset-btn">Reset</span>
                              <img
                                   className="avatar"
                                   src={require(`../../assets/images/${user.avatar}`)}
                                   alt="avatar"
                                   height={"45px"}
                                   width={"45px"}
                              />
                         </li>
                    </ul>
               </nav>
              <Profile />
              <main>
               <h1>Welcome {cookies.username},</h1>
               <pre>
                    Greetings {user.firstName} {user.lastName}!<br />
                    This is a learning website. This is under development stage, we are working on the website to make it look better.
               </pre>
              </main>
          </>
     );
}
