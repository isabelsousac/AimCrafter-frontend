import React from 'react';
import { useForm } from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import Api from '../../API/apis.js'
import {useNavigate} from 'react-router-dom';
import NavApp from "../NavApp"


const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit, 
        setError, 
        clearErrors,
        // setFocus,
        formState: { errors } 
    } = useForm();

    // React.useEffect(() => {  MAYBEEEE
    //     setFocus("firstName");
    // }, [setFocus]);

    const isPasswordConfirmed = (formData) => {
        return formData.password === formData.passwordConfirmation;
    }

    const onSubmit = (formData) => {
        if (!isPasswordConfirmed(formData)) {
            console.log('catch')
            setError("passwordConfirmation", {message: "Passwords must match"});
            return;
        }

        const userSignUp = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
            email: formData.email,
            password: formData.password
        }
        const api = new Api();
        api.signup({userSignUp, onSignedIn, onError});
    }

    const onSignedIn = () => {
        // onLoggedIn(user);
        navigate("/");
    };
    
    const onError = (error) => {
        console.log(error);
    };

    return (
        <div>
            <NavApp/>
            <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input 
                        {...register("firstName", {
                            required: true,
                            minLength: {value: 2, message: "First name should be greater than 2"},
                            pattern: "[A-ZÀ-ÿ][-,a-z. ']+[ ]*"
                        }
                        )}
                        maxLength="80"
                        type="text" 
                        placeholder="First name"  
                    />
                    <p>{errors.firstName?.message}</p>  
                </div>

                <div className="form-group">
                    <input 
                        {...register("lastName", {
                            required: true,
                            minLength: {value: 2, message: "Last name should be greater than 2"},
                            pattern: "[A-ZÀ-ÿ][-,a-z. ']+[ ]*"
                        }
                        )}
                        type="text" 
                        maxLength="80"
                        placeholder="Last name" 
                    />
                    <p>{errors.lastName?.message}</p>
                </div>

                <div className="form-group">
                    <input 
                        {...register("username", {required: true})}
                        maxLength="80"
                        type="text" 
                        placeholder="Username"  
                    />
                    <p>{errors.username?.message}</p>
                </div>

                <div className="form-group">
                    <input 
                        {...register("email", {required: "Email required", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"})}
                        type="email" 
                        placeholder="Email" 
                    />
                    <p>{errors.email?.message}</p>
                </div>


                    <input 
                        {...register("password", {
                            required: true,
                            minLength: {value: 6, message: "Password must be greater than 6 characters"}
                        }
                        )}
                        type="password" 
                        placeholder="Password" 
                    />
                    <p>{errors.password?.message}</p>
                    <input 
                    {...register("passwordConfirmation", {
                        required: true,
                    }
                    )}
                        type="password" 
                        placeholder="Password Confirmation" 
                    />
                    <p>{errors.passwordConfirmation?.message}</p>

                <button onClick={() => clearErrors()}>Register</button>
            </form>
            </div>
        </div>
    );
}

export default Signup