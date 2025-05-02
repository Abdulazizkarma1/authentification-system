import { Link } from "react-router-dom";
import { useState } from "react"

const LoginForm = () => {

    const [ inputs, setInputs ] = useState({
        usernameOremail : "",
        loginPassword : "",
    })


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({
            ...values, 
            [name] : value
        }))

        console.log(inputs)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`hey ${inputs.usernameOremail}, this is your password: ${inputs.loginPassword} and you have login successfully`)
    }



    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-4">
                        <label className="block text-gray-700">Username or Email</label>
                        <input
                            type="text"
                            required
                            name = "usernameOremail"
                            value = {inputs.usernameOremail}
                            onChange = {handleChange}
                            placeholder="Enter your username or email"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            name = "loginPassword"
                            minLength = "8"
                            value = {inputs.loginPassword}
                            onChange = {handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/reset-password" className="text-indigo-600 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <div className="mt-2 text-center">
                    <Link to="/register" className="text-indigo-600 hover:underline">
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;