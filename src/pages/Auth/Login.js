import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
     const navigate = useNavigate();
     const [cookies, setCookie] = useCookies(["username"]);

     useEffect(() => {
          if (cookies.username !== "undefined") {
               navigate("/");
          }
     }, [cookies.username]);

     const loginValidationSchema = yup.object({
          username: yup
               .string()
               .required("Username is required")
               .matches(/[a\-z+A\-Z]/, "Must be Alphabets")
               .test("len", "Must be at least 4 characters ", (val) => val.length > 3),
          password: yup
               .string()
               .required("Password is required")
               .test("len", "Must be at least 6 characters ", (val) => val.length > 6),
     });
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(loginValidationSchema) });

     function onSubmit(e) {
          if (e.username === "username" && e.password === "password") {
               setCookie("username", e.username);
               navigate("/");
          } else {
               console.log("Incorrect username or Password");
          }
     }

     return (
          <div className="login-div">
               <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <h1 style={{textAlign:"center", fontFamily:"initial"}}>Login</h1>
                    <label>Username: </label>
                    <input {...register("username", { required: true })} placeholder="username" />
                    <p>{errors.username?.message}</p>
                    <label>Password: </label>
                    <input
                         type="password"
                         {...register("password", { required: true })}
                         placeholder="password"
                    />
                    <p>{errors.password?.message}</p>
                    <input type="submit" className="login-submit-btn" />
               </form>
          </div>
     );
}
