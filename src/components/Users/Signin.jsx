import React from 'react';
import { useForm } from 'react-hook-form';
import Api from '../../API/apis.js'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit, 
        clearErrors,
        formState: { errors } 
    } = useForm();

    const onSubmit = (formData) => {
        const userSignIn = {
            email: formData.email,
            password: formData.password
        }
        const api = new Api();
        api.signin({userSignIn, onSignedIn, onError});
    }

    const onSignedIn = () => {
        // onLoggedIn(user);
        navigate("/");
    };
    
    const onError = (error) => {
        console.log(error);
    };

    return (
        // make a pop up for error message from server
        // <div>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <p>{errors.username?.message}</p>
        //         <input 
        //             {...register("email", {required: "Email required"})}
        //             type="email" 
        //             placeholder="Email" 
        //         />
        //         <input 
        //             {...register("password", {required: true})}
        //             type="password" 
        //             placeholder="Password" 
        //         />

        //         <button onClick={() => clearErrors()}>Sign in</button>
        //     </form>
        // </div>
        <div className='register-container'>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
               
            <div className="relative register z-0 mb-6 w-full group">
                <input
                    {...register("email", { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" })}
                    type="email"
                    name="email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                <p>{errors.email?.message}</p>
            </div>

            <div className="relative register z-0 mb-6 w-full group">
                <input
                    {...register("password", {
                        required: true,
                        minLength: { value: 6, message: "Password must be greater than 6 characters" }
                    })}
                    type="password"
                    name="password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Password
                </label>
                <p>{errors.password?.message}</p>
            </div>
            <input
                type="submit"
                // onClick={() => clearErrors()}
                className="register-buttom text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
        </form>

        <div className='register-check'>
            <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
        </div>
    </div>
    );
}

export default SignIn