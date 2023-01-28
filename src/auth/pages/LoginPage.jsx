import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { ErrorMessage } from '../components';
import { AuthContext } from '../context';
import { FaGoogle } from 'react-icons/fa'

export const LoginPage = () => {

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    defaultValues: {
      email: '',
      password: '',
      google: '',
    }
  });
  const { login, loginInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {

    const { type, message } = await login(email, password);

    if (type && message) setError(type, { type: "custom", message })
    else navigate('/');
  };

  const onLoginGoogle = async() => {
    const { type, message } = await loginInWithGoogle();
    if(message) setError(type, { type: 'custom', message});
    else navigate('/');
}

  return (
    <div className='mt-4'>
      <h1 className='text-center'>Login</h1>
      <form className='col-10 col-md-6 col-lg-3 col-xl-2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">

          <label htmlFor="email" className="form-label">Email</label>

          <input type="email" className="form-control" id="email" placeholder="" {...register("email", { required: 'Email is required' })} />

          {
            errors.email && <ErrorMessage errors={errors} name="email" /> 
          }

        </div>
        <div className="mb-3">

          <label htmlFor="password" className="form-label">Password</label>

          <input type="password" className="form-control" id="password" placeholder="" {...register("password", { required: 'Password is required' })} />

          {
            errors.password && <ErrorMessage errors={errors} name="password" />
          }

        </div>

        <a href="#" className="link-secondary text-decoration-none">Forgot password?</a>

        <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">Log in</button>

        <div className='text-center'>Or sign up <Link to='/register' className="link-secondary text-decoration-none">here</Link></div>

      </form>
      <div className="text-center mt-2">
        <button className="btn btn-primary" onClick={onLoginGoogle} {...register("google")}><FaGoogle size={23}/></button>
        {
          errors.google && <ErrorMessage errors={errors} name="google" />
        }
      </div> 
    </div>
  )
}
