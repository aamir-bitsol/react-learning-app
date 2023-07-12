import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate();
    const [ _, setCookie ] = useCookies(['username'])

    const loginValidationSchema=yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({resolver: yupResolver(loginValidationSchema)});

    function onSubmit(e){
       if(e.username === "username" && e.password === 'password'){
        setCookie('username', e.username);
        navigate('/home')
       }
       else{
        console.log('failed')
       }
    }

    function handleUsername(){

    }
    function handlePassword(){}
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username: </label>
                <input onChange={handleUsername} {...register("username", {required: true})} placeholder="username"/>
                <p>{errors.username?.message}</p>
                <label>Password: </label>
                <input type="password" onChange={handlePassword} {...register("password", {required: true})} placeholder="password"/>
                <p>{errors.password?.message}</p>
                <input type='submit' />
            </form>
        </>
    )
}