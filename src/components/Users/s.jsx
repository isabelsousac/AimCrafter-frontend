


// <div>
// <form onSubmit={handleSubmit(onSubmit)}>
//     <div className="relative z-0 mb-6 w-full group">
//         <input 
//             {...register("firstName", {
//                 required: true,
//                 minLength: {value: 2, message: "First name should be greater than 2"},
//                 pattern: "[A-ZÀ-ÿ][-,a-z. ']+[ ]*"
//             }
//             )}
//             maxLength="80"
//             type="text" 
//             placeholder=' '
//         />
//         <label 
//         for="floating_email" 
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
//         <p>{errors.firstName?.message}</p>  
//     </div>

//     <div className="form-group">
//         <input 
//             {...register("lastName", {
//                 required: true,
//                 minLength: {value: 2, message: "Last name should be greater than 2"},
//                 pattern: "[A-ZÀ-ÿ][-,a-z. ']+[ ]*"
//             }
//             )}
//             type="text" 
//             maxLength="80"
//             placeholder="Last name" 
//         />
//         <p>{errors.lastName?.message}</p>
//     </div>

//     <div className="form-group">
//         <input 
//             {...register("username", {required: true})}
//             maxLength="80"
//             type="text" 
//             placeholder="Username"  
//         />
//         <p>{errors.username?.message}</p>
//     </div>

//     <div className="form-group">
//         <input 
//             {...register("email", {required: "Email required", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"})}
//             type="email" 
//             placeholder="" 
//             name='floating_email'
//             id="floating_email"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         />
//         <p>{errors.email?.message}</p>
//     </div>


//         <input 
//             {...register("password", {
//                 required: true,
//                 minLength: {value: 6, message: "Password must be greater than 6 characters"}
//             }
//             )}
//             type="password" 
//             placeholder="Password" 
//         />
//         <p>{errors.password?.message}</p>
//         <input 
//         {...register("passwordConfirmation", {
//             required: true,
//         }
//         )}
//             type="password" 
//             placeholder="Password Confirmation" 
//         />
//         <p>{errors.passwordConfirmation?.message}</p>

//     <button onClick={() => clearErrors()}>Register</button>
// </form>
// </div>