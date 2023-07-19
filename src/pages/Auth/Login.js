import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";

import { loginValidationSchema } from "../../utils/form-validations";

export default function Login() {
     const navigate = useNavigate();
     const [cookies, setCookie] = useCookies(["username"]);

     useEffect(() => {
          if (cookies.username !== "undefined") {
               navigate("/");
          }
     }, [cookies.username]);

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
               alert("Incorrect username or Password");
          }
     }

     return (
          <div className="vh-100 d-flex justify-content-center align-items-center bg-light gradient-custom">
               <form onSubmit={handleSubmit(onSubmit)} className="bg-light rounded-2 h-50 d-flex p-2 row col-12 col-md-3 justify-content-center">
                    <h1 className="text-center">Login</h1>
                    <hr />
                    <label className="p-0">Username: </label>
                    <input {...register("username", { required: true })} placeholder="username" />
                    <p>{errors.username?.message}</p>
                    <label className="p-0">Password: </label>
                    <input
                         type="password"
                         {...register("password", { required: true })}
                         placeholder="password"
                    />
                    <p>{errors.password?.message}</p>
                    <input type="submit" className="btn btn-primary col-6" />
               </form>
          </div>
     );
}
