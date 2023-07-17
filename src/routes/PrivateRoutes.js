import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const [cookies] = useCookies(["username"]);
    return(
        cookies.username !== 'undefined' ? <Outlet /> : <Navigate to="/login" />
    )
};

export function InvalidURL() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/", {replace:"true"});
    }, [])
}

export default PrivateRoute