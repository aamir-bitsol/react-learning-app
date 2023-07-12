import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { Cookies, useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
    const [cookies] = useCookies();
    const navigate = useNavigate();
    const profileValidationSchema=yup.object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email()
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({resolver: yupResolver(profileValidationSchema)});
    function onSubmit(){
        navigate('/home');
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name: </label>
                <input type="text" {...register("firstName", {required: true})} placeholder="Your first name"/>
                <p>{errors.firstName?.message}</p>
                <label>Last Name: </label>
                <input type="text" {...register("lastName", {required: true})} placeholder="Your last name"/>
                <p>{errors.lastName?.message}</p>
                <label>User Name: </label>
                <input defaultValue={cookies.username} disabled /> <br />
                <input type="submit" />
            </form>
        </>
    )
}