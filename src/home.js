import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";

export default function Home() {
    const navigate = useNavigate();
    const [cookies] = useCookies();

    function handleProfile(){
        navigate('/profile');
    }
     return (
          <>
          <nav className="nav-bar">
            <ul>
                <li><button onClick={handleProfile}>Profile</button></li>
                <li><button>Contact</button></li>
                <li><button>About</button></li>
            </ul>
          </nav>
          <h1>Wellcome {cookies.username},</h1>
          <p>This is the home page</p>
          </>
     );
}
