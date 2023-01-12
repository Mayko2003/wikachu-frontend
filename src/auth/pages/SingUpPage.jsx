import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/backend/user";
import { ErrorMessage } from "../components";
import { AuthContext } from "../context";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'


export const SingUpPage = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async ({ username, password }) => {

        const { type, message } = await createUser({username,password,state:true});
    
        if (type && message) setError(type, { type: "custom", message })
        else{
            login(username,password); 
            navigate('/');
        }
    };

    return (
        <div className='mt-4'>
            <h1 className='text-center'>Sign Up</h1>
            <form className='col-10 col-md-6 col-lg-3 col-xl-2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">

                    <label htmlFor="username" className="form-label">Username</label>

                    <input type="text" className="form-control" id="username" placeholder="" {...register("username", { required: 'Username is required' })} />

                    {
                        errors.username && <ErrorMessage errors={errors} name="username" />
                    }

                </div>
                <div className="mb-3">

                    <label htmlFor="password" className="form-label">Password</label>

                    <input type="password" className="form-control" id="password" placeholder="" {...register("password", { required: 'Password is required' , 
                    pattern: {value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message:'At least 8 characters, upper and lower case letters, number and a symbol'} })} />

                    {
                        errors.password && <ErrorMessage errors={errors} name="password" />
                    }

                </div>

                <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Sign Up</button>

                <div className="text-center m-2">Or</div>

                <div className="text-center">
                    <a href="https://www.facebook.com" className="link-light me-2" target="_blank"><FaFacebook size={23}/></a>
                    <a href="https://www.google.com" className="link-light me-2" target="_blank"><FaGoogle size={23}/></a>
                    <a href="https://www.twitter.com" className="link-light" target="_blank"><FaTwitter size={23}/></a>
                </div>    

            </form>
        </div>
    )
}
