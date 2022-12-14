import React from 'react';
import { useForm } from 'react-hook-form';
import Api from '../../API/apis.js'
import {useNavigate} from 'react-router-dom';
import NavApp from '../NavApp.jsx';


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
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
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
        <div>
            <NavApp/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>{errors.username?.message}</p>
                <input 
                    {...register("email", {required: "Email required"})}
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    {...register("password", {required: true})}
                    type="password" 
                    placeholder="Password" 
                />

                <button onClick={() => clearErrors()}>Sign in</button>
            </form>
        </div>
    );
}

export default SignIn