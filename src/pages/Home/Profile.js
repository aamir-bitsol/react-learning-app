import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect,useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "../../context/useUserContext";

export default function Profile() {
     const [cookies] = useCookies();
     const { user, setUser } = useContext(UserContext);

     const profileValidationSchema = yup.object().shape({
          firstName: yup.string().required("First Name is required"),
          lastName: yup.string().required("Last Name is required"),
          email: yup.string().email(),
          avatar: yup.mixed().test('fileType', 'Invalid image format', (file) => {
               if (file.length) {
                 return file && ['image/jpeg', 'image/png'].includes(file[0].type);
               }
               return true;
             }),
     });
     
     useEffect(()=>{
          console.log(localStorage.getItem('firstName'))
     }, [])

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(profileValidationSchema) });

     function onSubmit(e) {
          if(e.avatar.length){
               setUser({ firstName: e.firstName, lastName: e.lastName, avatar: e.avatar[0].name });
          } else{
               setUser({ firstName: e.firstName, lastName: e.lastName, avatar: user.avatar });
          }
     }

     return (
          <>
               <form onSubmit={handleSubmit(onSubmit)} className="info-form">
               <label style={{ backgroundColor: "gray", display: "block", textAlign:"center" }}>
                    Enter your Details!
               </label>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                         id='firstName'
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
                    <input type="file" {...register('avatar')} />
                    <p>{errors.avatar?.message}</p>
                    <input type="submit"  className="info-form-submit"/>
               </form>
          </>
     );
}
