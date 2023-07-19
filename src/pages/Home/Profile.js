import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "react-cookie";

import { UserContext } from "../../context/useUserContext";
import { profileValidationSchema } from "../../utils/form-validations";
import Input from "../../components/Input";

export default function Profile() {
     const [cookies] = useCookies();
     const { user, setUser } = useContext(UserContext);

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(profileValidationSchema) });

     function onSubmit(e) {
          setUser({ ...user, firstName: e.firstName, lastName: e.lastName });
     }

     function handleAvatar(e) {
          if (e.target.files.length) {
               setUser({ ...user, avatar: URL.createObjectURL(e.target.files[0]) });
          }
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)} className="container">
               <div className="row bg-light align-items-center gap-1">
                    <label className="w-100 text-center text-dark bg-light">Enter your Details!</label>
                    <label className="" htmlFor="firstName">First Name: </label>
                    <Input
                         className="col-md-12 col-lg-3"
                         id="firstName"
                         type="text"
                         {...register("firstName", { required: true })}
                         placeholder="Your first name"
                         defaultValue={JSON.parse(localStorage.getItem("firstName"))}
                    />
                    <p className="md-12">{errors.firstName?.message}</p>
                    <label htmlFor="lastName">Last Name: </label>
                    <Input
                         className="col-md-12 col-lg-3"
                         id="lastName"
                         type="text"
                         {...register("lastName", { required: true })}
                         placeholder="Your last name"
                         defaultValue={JSON.parse(localStorage.getItem("lastName"))}
                    />
                    <p>{errors.lastName?.message}</p>
                    <label>User Name: </label>
                    <Input
                         className="col-md-12 col-lg-3"
                         defaultValue={cookies.username}
                         disabled
                    />{" "}
                    <label>Avatar: </label>
                    <Input
                         className="col-md-12 col-lg-3"
                         onChange={handleAvatar}
                         defaultValue={""}
                         accept="image/png, image/jpeg"
                         type="file"
                    />
                    <Input type="submit" className="btn btn-primary col-3 col-lg-1" />
               </div>
          </form>
     );
}
