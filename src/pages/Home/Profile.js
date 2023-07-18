import { useContext, useRef } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";

import { UserContext } from "../../context/useUserContext";
import { profileValidationSchema } from "../../utils/form-validations";

export default function Profile() {
     const [cookies] = useCookies();
     const { user, setUser } = useContext(UserContext);
     const inputRef = useRef(null);
 
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(profileValidationSchema) });

     function onSubmit(e) {
          setUser({...user, firstName: e.firstName, lastName: e.lastName });
     }

     function handleAvatar(e) {
          if(e.target.files.length){
               setUser({...user, avatar: URL.createObjectURL(e.target.files[0])})
          }
     }
    
     return (
          <>
               <form onSubmit={handleSubmit(onSubmit)} className="info-form">
                    <label
                         style={{ backgroundColor: "gray", display: "block", textAlign: "center" }}
                    >
                         Enter your Details!
                    </label>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                         id="firstName"
                         type="text"
                         {...register("firstName", { required: true })}
                         placeholder="Your first name"
                         defaultValue={JSON.parse(localStorage.getItem("firstName"))}
                    />
                    <p>{errors.firstName?.message}</p>

                    <label htmlFor="lastName">Last Name: </label>
                    <input
                         id="lastName"
                         type="text"
                         {...register("lastName", { required: true })}
                         placeholder="Your last name"
                         defaultValue={JSON.parse(localStorage.getItem("lastName"))}
                    />
                    <p>{errors.lastName?.message}</p>
                    
                    <label>User Name: </label>
                    <input defaultValue={cookies.username} disabled /> <br />
                    
                    <label>Avatar: </label>
                    <input ref={inputRef} onChange={handleAvatar} defaultValue={''} accept="image/png, image/jpeg" type="file" />
                    <input type="submit" className="info-form-submit" />
               </form>
          </>
     );
}
