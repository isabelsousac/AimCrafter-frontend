import { SubmitHandler, useForm } from "react-hook-form";
import Api from "../../API/apis";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SignInData {
    email: string;
    password: string;
}

const SignIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<SignInData>();
    const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null)

    const onSignedIn = () => {
        navigate("/");
    };

    const onError = (error: string) => {
        setServerErrorMessage(error);
    };

    const onSubmit: SubmitHandler<SignInData> = (signinData: SignInData) => {
        try {
            const api = new Api();
            api.signin(signinData, onSignedIn, onError);
        } catch (error) {
            console.error("SignIn error:", error);
            setServerErrorMessage("An error occurred during sign-in. Please try again later.");
        }
    };

    return (
        <div className="register-container">
            <h3>Sign In</h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="register-form"
            >
                {serverErrorMessage && (
                    <div className="text-red-500 text-sm">
                        <p>{serverErrorMessage}</p>
                    </div>
                )}

                <div className="relative register z-0 mb-6 w-full group">
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        }, pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address"
                        }
                    })}
                        type="email"
                        name="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                    {errors && (<p className="text-red-500 text-sm">{errors.email?.message}</p>)}
                </div>

                <div className="relative register z-0 mb-6 w-full group">
                    <input
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be greater than 6 characters",
                            },
                        })}
                        type="password"
                        name="password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                    {errors && (<p className="text-red-500 text-sm">{errors.password?.message}</p>)}

                </div>
                <input
                    type="submit"
                    className="register-buttom text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />


            </form>

            <div className="register-check">
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>{" "}
                </p>
            </div>
        </div>
    );
};

export default SignIn;
