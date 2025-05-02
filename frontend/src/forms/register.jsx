import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
    // State to gather form inputs
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        date: "",
        password: "",
        confirmpassword: "",
    });

    // State to manage loading animation
    const [loading, setLoading] = useState(false);

    const handleOnchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        if (inputs.password !== inputs.confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        // Start loading animation
        setLoading(true);

        // Simulate a delay (e.g., API call)
        setTimeout(() => {
            alert("Sign Up Successfully");

            // Reset the form inputs
            setInputs({
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                date: "",
                password: "",
                confirmpassword: "",
            });

            // Stop loading animation
            setLoading(false);
        }, 3000); // Simulate a 3-second delay
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            required
                            value={inputs.firstname}
                            onChange={handleOnchange}
                            placeholder="Enter your first name"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            required
                            value={inputs.lastname}
                            onChange={handleOnchange}
                            placeholder="Enter your last name"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            value={inputs.username}
                            onChange={handleOnchange}
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={inputs.email}
                            onChange={handleOnchange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            name="date"
                            required
                            value={inputs.date}
                            onChange={handleOnchange}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            name="password"
                            value={inputs.password}
                            onChange={handleOnchange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            required
                            name="confirmpassword"
                            value={inputs.confirmpassword}
                            onChange={handleOnchange}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>

                    {/* Conditional rendering for the button */}
                    {loading ? (
                        <button
                            type="button"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 flex items-center justify-center"
                            disabled
                        >
                            <svg
                                className="animate-spin h-5 w-5 mr-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Signing up…
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                        >
                            Sign Up
                        </button>
                    )}
                </form>
                <div className="mt-4 text-center">
                    <Link to="/reset-password" className="text-indigo-600 hover:underline">
                        Reset Password
                    </Link>
                </div>
                <div className="mt-2 text-center">
                    <Link to="/login" className="text-indigo-600 hover:underline">
                        Already have an account? Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;