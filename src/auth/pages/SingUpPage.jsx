import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/backend/user";
import { ErrorMessage } from "../components";
import { AuthContext } from "../context";
import { FaGoogle } from 'react-icons/fa';

export const SingUpPage = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            displayName: '',
            password: '',
            email: '',
            google: '',
        }
    });
    const { login, signUpWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async ({ displayName, password, email }) => {

        const { type, message } = await createUser({displayName,password,state:true,email});
    
        if (type && message) setError(type, { type: "custom", message })
        else{
            login(email,password); 
            navigate('/');
        }
    };

    const onSubmitGoogle = async() => {
        const { type, message } = await signUpWithGoogle();
        if(message) setError(type,{type:'custom',message});
        else navigate('/');
    }

    return (
        <div className='mt-4'>
            <h1 className='text-center'>Sign Up</h1>
            <form className='col-10 col-md-6 col-lg-3 col-xl-2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">

                    <label htmlFor="displayName" className="form-label">Enter a display name</label>

                    <input type="text" className="form-control" id="displayName" placeholder="" {...register("displayName", { required: 'Display name is required' })} />

                    {
                        errors.displayName && <ErrorMessage errors={errors} name="displayName" />
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
                <div className="mb-3">

                    <label htmlFor="email" className="form-label">Email</label>

                    <input type="email" className="form-control" id="email" placeholder="" {...register("email", { required: 'Email is required' })} />

                    {
                        errors.email && <ErrorMessage errors={errors} name="email" />
                    }

                </div>

                <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Sign Up</button>

                <div className="text-center m-2">Or</div>   

            </form>
            <div className="text-center">
                    <button className="btn btn-primary" onClick={onSubmitGoogle} {...register("google")}><FaGoogle size={23}/></button>
                    {
                        errors.google && <ErrorMessage errors={errors} name="google" />
                    }
            </div> 
        </div>
    )
}
