import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="flex gap-4 justify-center items-center h-screen">
            
            <div>
                <Link to="/register">
                    <button type="submit"
                        className="border-4 border-black rounded-full p-2 bg- text-indigo-600 text-xl cursor-pointer">
                        Sign Up
                    </button>
                </Link>
            </div>
            
            <div>
                <hr className="border-9"/>
            </div>

            <div>
                <Link to="/login">
                    <button type="submit" 
                    className="border-4 border-black rounded-full p-2 bg- text-indigo-600 text-xl cursor-pointer">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Homepage;